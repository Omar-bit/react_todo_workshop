import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import { useState } from 'react';
import Navbar from './components/Navbar';
function App() {
  const [todos, setTodos] = useState([
    {
      title: 'hit the gym',
      done: true,
      description: 'test',
    },
  ]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home todos={todos} setTodos={setTodos} />} />
        <Route
          path='/about'
          element={
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              vitae maiores beatae quaerat dolore eius quis necessitatibus quam,
              voluptatum dolores?
            </p>
          }
        />
      </Routes>
    </>
  );
}

export default App;
