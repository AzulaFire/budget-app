/* eslint-disable react/prop-types */
import { FaMoneyBill, FaRegCreditCard, FaYenSign } from 'react-icons/fa';

const TotalsBox = ({ budget, total }) => {
  return (
    <div className='grid gap-6 mb-6 md:grid-cols-3'>
      <div className='flex flex-col items-center mb-4 text-2xl font-normal lg:text-3xl dark:text-gray-400'>
        <FaMoneyBill style={{ marginBottom: '.5rem', color: '#1D4ED8' }} />
        <span className='inline-block'>
          BUDGET: <span className='text-lime-700'>¥{budget ? budget : 0}</span>
        </span>
      </div>
      <div className='flex flex-col items-center mb-4 text-2xl font-normal lg:text-3xl dark:text-gray-400'>
        <FaRegCreditCard style={{ marginBottom: '.5rem', color: '#1D4ED8' }} />
        <span className='inline-block'>
          EXPENSES: <span className='text-red-700 ml-2'>¥{total}</span>
        </span>
      </div>
      <div className='flex flex-col items-center mb-4 text-2xl font-normal lg:text-3xl dark:text-gray-400'>
        <FaYenSign style={{ marginBottom: '.5rem', color: '#1D4ED8' }} />
        <span className='inline-block'>
          BALANCE:
          {budget && total > 0 ? (
            budget - total >= 0 ? (
              <span className='text-lime-700 ml-2'>¥{budget - total}</span>
            ) : (
              <span className='text-red-700 ml-2'>¥{budget - total}</span>
            )
          ) : (
            <span className='text-lime-700 ml-2'>¥0</span>
          )}
        </span>
      </div>
    </div>
  );
};
export default TotalsBox;
