import React, { useState } from "react";
import backIcon from "../assets/back.png";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import '../styles/main.css'

const Form = ({servicedetails , costingdetails}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name : "",
    phone : "",
    email : "",
    companyName : "",
    agentName : "",
    agentEmail : "",
    agentPhone : "",
    loanNum : "",
    address : "",
    location : "",
    date : "",
    time : ""
  })
  
  const handleSubmit = () => {
    axios.post('https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails',formData)
    .then(() => {
      console.log('sent!');
      setStep(step+1);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handlePages = () => {
    if(step === 1){
      return <Step1 servicedetails={servicedetails} costingdetails={costingdetails}/>
    } else if(step === 2){
      return <Step2 formData={formData} setFormData={setFormData}/>
    } else if(step === 3){
      return <Step3 handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    } else {
      return <Step4 />
    }
  }
  return (
    <div className="relative container w-[87vw] h-[100vh] p-2">
      <div className="flex flex-row mb-10">
        {" "}
        {/*Previous Button Functionality*/}
        <div className="flex-1 flex-row p-4">
          <button
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="rounded-full bg-notaryGrey p-2"
          >
            <img src={backIcon} width="10px" />
          </button>
        </div>
        <div className="flex absolute flex-col p-2 ml-12">
          <h1 className="text-2xl ">New Appointment Request</h1>
          <h3 className="text-notaryGrey">Same great coverage for less.</h3>
        </div>
      </div>


      <div className="container flex p-2"> {/* Stepper */}
        <div className="inline-flex bg-notaryProgressBar rounded-full p-[8px]"></div>
        <div className="inline-flex mt-1 relative bg-notaryGrey ml-6 mb-2 p-[0.5px] w-[73vw]">
          <div
            style={{
              width:
                step === 4
                  ? "100%"
                  : step === 3
                  ? "60%"
                  : step === 2
                  ? "40%"
                  : "20%",
            }}
            className="bg-notaryProgressBar p-[1px] transition-all ease-out"
          ></div>
          <div
            style={{
              backgroundColor: step >= 1 ? "#8b36fd" : "#d5cfe3",
              color: step >= 1 ? "#d5cfe3" : "#000",
            }}
            className="absolute left-[20%] -top-[15px] rounded-full px-3 py-1 font-bold"
          >
            1
          </div>
          <div
            style={{
              backgroundColor: step >= 2 ? "#8b36fd" : "#d5cfe3",
              color: step >= 2 ? "#d5cfe3" : "#000",
            }}
            className="absolute left-[40%] -top-[15px] rounded-full px-3 py-1 font-bold"
          >
            2
          </div>
          <div
            style={{
              backgroundColor: step >= 3 ? "#8b36fd" : "#d5cfe3",
              color: step >= 3 ? "#d5cfe3" : "#000",
            }}
            className="absolute left-[60%] -top-[15px] rounded-full px-3 py-1 font-bold"
          >
            3
          </div>
          <div
            style={{
              backgroundColor: step >= 4 ? "#8b36fd" : "#d5cfe3",
              color: step >= 4 ? "#d5cfe3" : "#000",
            }}
            className="absolute left-[80%] -top-[15px] rounded-full px-3 py-1 font-bold"
          >
            4
          </div>
        </div>
        <div
          style={{ backgroundColor: step === 4 ? "#8b36fd" : "#d5cfe3" }}
          className="inline-block ml-5 rounded-full p-[8px]"
        ></div>
      </div>
      


      <div>
        {handlePages()}
      </div>
      {step < 3 ? 
      <div className="flex flex-row px-6 mt-4 gap-2 justify-end">
            <h3 className="text-notaryTextPurple text-xl font-bold ">Next Step</h3>
            <button disabled={step===4} onClick={() => {setStep(step + 1)}} className="bg-notaryLightYellow text-notaryDarkGrey font-bold rounded-full px-2 py-1">&rarr;</button>
      </div>
       : <div></div>}
    </div>
  );
};

export default Form;
