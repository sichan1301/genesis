import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import './App.css';
import Result from './components/Result';
import Select from './components/Select';

function App() {
  const step = useSelector((state:RootState)=>state.step)
  return (
    <>
      {step <=10 ?  <Select /> : <Result />}
    </>
  );
}

export default App;
