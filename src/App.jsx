import React from 'react';
import axios from 'axios';
import './styles/main.css';
import Details from './components/Details';
import Form from './components/Form';

function App() {
  
  return (
    <div className='container flex flex-row justify-start'>
      <Details />
      <Form />
    </div>
  )
}

export default App
