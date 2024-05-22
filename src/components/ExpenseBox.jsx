/* eslint-disable react/prop-types */
const ExpenseBox = ({
  handleExpenseClick,
  toggleEdit,
  handleEditClick,
  id,
}) => {
  const categories = [
    'Food',
    'Fun and Entertainment',
    'Health and Fitness',
    'Household Items',
    'Insurance',
    'Miscellaneous',
    'Saving (or Debt Payoff)',
    'Shelter/Housing',
    'Transportation',
    'Utilities',
  ];

  return (
    <div className='expenseBox block max-w-sm p-6 bg-white  hover:bg-red-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className='mt-8'>
        <label
          htmlFor='Expense'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Expense
        </label>
        <input
          type='text'
          id='Expense'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Expense Name'
          required
        />
      </div>
      <div className='mt-6'>
        <label
          htmlFor='Amount'
          className='block my-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Expense Amount
        </label>
        <input
          type='text'
          id='Amount'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Expense Amount'
          required
        />
      </div>
      <div className='mt-6'>
        <label
          htmlFor='Category'
          className='block my-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Select an Category
        </label>
        <select
          id='Category'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option defaultValue='Expense Category'>Expense Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className='inline-block'>
        {!toggleEdit && (
          <button
            type='submit'
            className='mt-6 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
            onClick={handleExpenseClick}
          >
            Add Expense
          </button>
        )}
        {toggleEdit && (
          <button
            type='submit'
            className='mt-6 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600'
            onClick={() => handleEditClick(id)}
          >
            Edit Expense
          </button>
        )}
      </div>
    </div>
  );
};
export default ExpenseBox;
