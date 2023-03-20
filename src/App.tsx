import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import './App.css';
import Result from './components/Result';
import Procedure from './components/Procedure';

function App() {

  const number = useSelector((state:RootState)=>state.number)
  
  return (
    <>
      {number <=10 ?  <Procedure /> : <Result />}
    </>
  );
}

export default App;
