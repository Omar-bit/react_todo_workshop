import React from 'react';
import { MdDone } from 'react-icons/md';
import { FaClock } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

function Todo({ id, title, description, done, deleteTodo, toggleDone }) {
  return (
    <div
      className={`flex items-center w-[30%] border p-2 rounded-lg shadow justify-between ${
        done ? 'border-green-700' : 'border-purple-700'
      }`}
    >
      <div className='flex flex-col'>
        <h3 className={`font-bold ${done ? 'line-through' : ''}`}>{title}</h3>
        <p className={`${done ? 'line-through' : ''}`}>{description}</p>
      </div>

      <div className='flex items-center gap-2'>
        {done ? (
          <MdDone
            className='text-green-700 cursor-pointer'
            onClick={() => toggleDone(id)}
          />
        ) : (
          <FaClock className='cursor-pointer' onClick={() => toggleDone(id)} />
        )}
        <FaTrash
          className='cursor-pointer text-red-700'
          onClick={() => deleteTodo(id)}
        />
      </div>
    </div>
  );
}

export default Todo;
