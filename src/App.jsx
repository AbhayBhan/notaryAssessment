import React from 'react';
import DataProvider from './contexts/DataContext';
import './styles/main.css';
import Details from './components/Details';
import Form from './components/Form';

function App() {
  
  return (
    <DataProvider>
    <div className='container flex flex-row justify-start'>
        <Details />
        <Form />
    </div>
    </DataProvider>
  )
}

export default App
