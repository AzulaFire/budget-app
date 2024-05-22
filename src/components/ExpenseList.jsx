/* eslint-disable react/prop-types */
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const ExpenseList = ({
  id,
  expense,
  category,
  amount,
  handleEdit,
  handleDelete,
}) => {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-gray-600'>
      <td className='px-6 py-4 text-red-600'>{id}</td>
      <td className='px-6 py-4 text-red-600'>{expense}</td>
      <td className='px-6 py-4 text-red-600'>{category}</td>
      <td className='px-6 py-4 text-red-600'>{'-' + amount}</td>
      <td className='px-6 py-4 text-right'>
        <FaRegEdit
          style={{ cursor: 'pointer', color: '#1D4ED8', fontSize: '1.5rem' }}
          onClick={() => handleEdit(id)}
        />
      </td>
      <td className='px-6 py-4 text-right'>
        <FaRegTrashAlt
          style={{ cursor: 'pointer', color: 'red', fontSize: '1.5rem' }}
          onClick={() => handleDelete(id)}
        />
      </td>
    </tr>
  );
};
export default ExpenseList;
