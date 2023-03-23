import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './components/store/store';
import './App.css';
import Result from './components/Result';
import Select from './components/Select';

function App() {

  const number = useSelector((state:RootState)=>state.number)
  
  return (
    <>
      {number <=10 ?  <Select /> : <Result />}
    </>
  );
}

export default App;
