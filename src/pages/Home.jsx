import { useEffect, useState } from 'react';
import Todo from '../components/Todo';

function Home({ todos, setTodos }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  }

  function toggleDone(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function addTodo() {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title,
        description,
        done,
      },
    ]);
    setTitle('');
    setDescription('');
    setDone(false);
  }

  return (
    <div className='p-3'>
      <h1 className='text-purple-600 font-bold text-2xl mb-4'>My Todos</h1>
      <div className='mb-4'>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border p-2 rounded mr-2'
        />
        <input
          type='text'
          name='description'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border p-2 rounded mr-2'
        />
        <label className='mr-2'>
          <input
            type='checkbox'
            name='done'
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
            className='mr-1'
          />
          Done
        </label>
        <button
          onClick={addTodo}
          className='bg-purple-600 text-white p-2 rounded'
        >
          Add
        </button>
      </div>
      <div className='flex flex-wrap gap-4'>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleDone={toggleDone}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            done={todo.done}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
