import { useState, useEffect } from 'react';
import BudgetBox from './components/BudgetBox';
import ExpenseBox from './components/ExpenseBox';
import TotalsBox from './components/TotalsBox';
import ExpenseList from './components/ExpenseList';
import BarGraph from './components/BarGraph';

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const [budget, setBudget] = useState();
  const [total, setTotal] = useState(0);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editID, setEditID] = useState();

  const reset = () => {
    document.getElementById('Expense').value = '';
    document.getElementById('Amount').value = '';
    document.getElementById('Category').value = 'Expense Category';
  };

  const handleDelete = (id) => {
    const newArr = expenseList.filter((item) => item.id !== id);
    setExpenseList(newArr);
    reset();
  };

  const handleEdit = (id) => {
    const selectedRow = expenseList.find((item) => item.id == id);

    document.getElementById('Expense').value = selectedRow.expense;
    document.getElementById('Amount').value = selectedRow.amount;
    document.getElementById('Category').value = selectedRow.category;
    setEditID(id);
    setToggleEdit((prev) => !prev);
  };

  const handleEditClick = (id) => {
    let newExpense = document.getElementById('Expense').value;
    let newAmount = document.getElementById('Amount').value;
    let newCategory = document.getElementById('Category').value;

    setExpenseList(
      expenseList.map((item) =>
        item.id === id
          ? {
              ...item,
              expense: newExpense,
              amount: newAmount,
              category: newCategory,
            }
          : item
      )
    );
    setToggleEdit(false);
    reset();
  };

  const handleBudgetClick = (event) => {
    if (event.target.form.Budget.checkValidity() === true) {
      event.preventDefault();
      let budgetInput = parseFloat(event.target.form.Budget.value); // from elements property
      setBudget(budgetInput);
    }
  };

  const handleExpenseClick = (event) => {
    if (
      event.target.form.Expense.checkValidity() === true &&
      event.target.form.Amount.checkValidity() === true
    ) {
      event.preventDefault();

      let id = expenseList.length + 1;
      let name = event.target.form.Expense.value; // from elements property
      let amount = event.target.form.Amount.value;
      let category = event.target.form.Category.value;

      if (category === 'Expense Category') {
        category = 'Miscellaneous';
      }

      let newExpense = {
        id: id,
        expense: name.toUpperCase(),
        category: category,
        amount: amount,
      };

      setExpenseList((oldArray) => [...oldArray, newExpense]);
      reset();
    }
  };

  useEffect(() => {
    const totalExpenseCalculate = () => {
      let total = 0;
      expenseList.map((item) => {
        total += parseFloat(item.amount);
      });
      setTotal(total);
    };

    totalExpenseCalculate();
  }, [expenseList]);

  return (
    <div className='container' style={{ margin: '0 auto' }}>
      <div className='main'>
        <TotalsBox budget={budget} total={total} />
        <form>
          <div className='grid gap-6 mb-6 md:grid-cols-3'>
            <BudgetBox handleBudgetClick={handleBudgetClick} />
            <ExpenseBox
              handleExpenseClick={handleExpenseClick}
              toggleEdit={toggleEdit}
              handleEditClick={handleEditClick}
              id={editID}
            />

            <div className='block max-w-sm p-6 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
              <BarGraph expenseList={expenseList} total={total} />
            </div>
          </div>
        </form>

        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  ID
                </th>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3'>
                  Amount
                </th>
                <th scope='col' className='px-3 py-3'>
                  <span className='sr-only'>Edit</span>
                </th>
                <th scope='col' className='px-3 py-3'>
                  <span className='sr-only'>Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {expenseList.map((item, index) => (
                <ExpenseList
                  key={index}
                  id={item.id}
                  expense={item.expense}
                  category={item.category}
                  amount={item.amount}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
