import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/main.css';
import Details from './components/Details';
import Form from './components/Form';

function App() {
  const [personaldetails, setPersonalDetails] = useState({});
  const [businessdetails, setBusinessDetails] = useState({});
  const [servicedetails, setServiceDetails] = useState({});
  const [costingdetails, setCostingDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      axios.post("https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse", {username : window.location.hostname})
      .then((res) => {
        console.log(res);
        setPersonalDetails(res.data.response.personalInfo);
        setBusinessDetails(res.data.response.personalInfo.businessDetails);
        setServiceDetails(res.data.response.ServicesInfo);
        setCostingDetails(res.data.response.costSettings);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
      })
    }

    getData();
  },[])
  
  return (
    <>
    {!loading ?
    <div className='container flex flex-row justify-start'>
        <Details personaldetails={personaldetails} businessdetails={businessdetails}/>
        <Form servicedetails={servicedetails} costingdetails={costingdetails} />
    </div>
    : <div></div>}
    </>
  )
}

export default App
