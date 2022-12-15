import React from 'react';
import axios from 'axios';
import './styles/main.css';
import Details from './components/Details';
import Form from './components/Form';

function App() {

  const getData = () => {
    axios.post("https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse",{username : "demo"})
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
  
  return (
    <div className='container flex flex-row justify-start'>
      <Details />
      <Form />
      <button onClick={getData}>Click</button>
    </div>
  )
}

export default App
