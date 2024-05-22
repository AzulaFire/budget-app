import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */
const BudgetBox = ({ handleBudgetClick }) => {
  const [currMonth, setCurrentMonth] = useState('');

  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const getMonth = () => {
      const d = new Date();
      let m = months[d.getMonth()];

      setCurrentMonth(m);
      document.getElementById('Month').value = m;
    };

    getMonth();
  }, []);

  return (
    <div className='budgetBox block max-w-sm p-6 bg-white  hover:bg-lime-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className='mt-8'>
        <label
          htmlFor='Month'
          className='block my-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Select a Month
        </label>
        <select
          id='Month'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option defaultValue={currMonth}>Select Month</option>
          {monthList.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className='mt-6'>
        <label
          htmlFor='Budget'
          className='block my-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Budget Amount
        </label>
        <input
          type='text'
          id='Budget'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Budget Amount'
          required
        />
      </div>
      <div>
        <button
          type='submit'
          className='mt-6 focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800'
          onClick={handleBudgetClick}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};
export default BudgetBox;
