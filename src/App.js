/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import useForm from './useForm';
import useFetch from './useFetch';
import Hello from './Hello';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });
  const temp = localStorage.getItem('count')
    ? JSON.parse(localStorage.getItem('count'))
    : 0;

  const [count, setCount] = useState(temp);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    console.log(count);
  }, [count]);

  const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('mount1');
  // }, []);

  // useEffect(() => {
  //   console.log('mount2');
  // }, []);

  return (
    <div className="app">
      <h1>{!data ? '...' : data}</h1>
      <div>
        count:&nbsp;
        {count}
      </div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        inc
      </button>
      {/* <button type="button" onClick={() => setShowHello(!showHello)}>
        toggle
      </button>
      {showHello && <Hello />} */}
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
