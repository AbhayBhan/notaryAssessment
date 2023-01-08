import React, { useState } from "react";
import backIcon from "../assets/back.png";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import "../styles/main.css";
import { useData } from "../contexts/DataContext";

const Form = () => {
  const [step, setStep] = useState(1);
  const { getPersonalDet, getBusinessDet, getUserId } = useData();
  const pDet = getPersonalDet();
  const bDet = getBusinessDet();
  const uId = getUserId();
  const [err, setErr] = useState("");
  const [activeAgent, setActiveAgent] = useState({
    nsa: false,
    mgn: false,
    ron: false,
    oth: false,
  });
  const [formData, setFormData] = useState({
    activityHistory: [],
    isRealEstateTransaction: false,
    isOnlineSigning: false,
    escrowNumber: "",
    loanNo: "",
    place: null,
    serviceDetails: null,
    customerDetails: {
      customerFirstName: pDet.firstName,
      customerLastName: pDet.lastName,
      type: "Customer",
      customerPhoneNumber: pDet.phoneNumber,
      customerEmailAddress: pDet.email,
      companyName: bDet.businessName,
      companyAddress: bDet.businessAddress,
    },
    signers: {
      signerFullName: "",
      type: "signer",
      phoneNumber: "",
      signerAddress: null,
      emailAddress: "",
    },

    witnessCount: 0,
    witnessList: {
      fullName: "",
      type: "witness",
      phoneNumber: "",
      address: null,
      emailAddress: "",
    },
    propertyAddress: "",
    signingDate: "",
    signingDateTimeStamp: "",
    signingTime: "",
    readableTime: "",
    isMileageEntered: false,
    isNotarialActsEntered: false,
    isExpenseEntered: false,
    status: 0,
    paymentStatus: 0,
    notaryId: uId,
    markAsUncollectable: false,
    isParsedFromMail: false,
    aptSource: "plugin",
    isInvoiceDue: true,
    isInvoiceFullyPaid: false,
    isPaymentReceivedFull: false,
    fromPlugin: true,
    isDeleted: false,
    isRescheduled: false,
    isRejected: false,
    isCancelledBefore: false,
  });

  const handleSubmit = () => {
    axios.post('https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails',formData)
    .then(() => {
      console.log('sent!');
      console.log(formData);
      setErr('');
      setStep(step+1);
    }).catch((error) => {
      setErr(error.message);
      setTimeout(() => {
        setErr('');
      },10000)
    })
  };

  const handlePages = () => {
    if (step === 1) {
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          activeAgent={activeAgent}
          setActiveAgent={setActiveAgent}
        />
      );
    } else if (step === 2) {
      return (
        <Step2
          activeAgent={activeAgent}
          formData={formData}
          setFormData={setFormData}
          witnessList={formData.witnessList}
          signerDets={formData.signers}
        />
      );
    } else if (step === 3) {
      return (
        <Step3
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          err={err}
        />
      );
    } else {
      return <Step4 />;
    }
  };
  return (
    <div className="relative container w-[87vw] h-[100vh] p-2">
      <div className="flex flex-row mb-10">
        {" "}
        {/*Previous Button Functionality*/}
        <div className="flex-1 flex-row p-4">
          <button
            disabled={step === 1 || step === 4}
            onClick={() => {
              if(activeAgent.oth){
                setStep(step - 2);
                return;
              }
              setStep(step - 1)
              }}
            className="rounded-full bg-notaryGrey p-2"
            style={step === 1 ? {backgroundColor : '#a5a0b0'} : {}}
          >
            <img src={backIcon} width="10px" />
          </button>
        </div>
        <div className="flex absolute flex-col p-2 ml-12">
          <h1 className="text-2xl ">New Appointment Request</h1>
          <h3 className="text-notaryGrey">Same great coverage for less.</h3>
        </div>
      </div>

      <div className="container -mt-6 flex p-2">
        {" "}
        {/* Stepper */}
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

      <div>{handlePages()}</div>
      {step < 3 ? (
        <div className="flex flex-row px-6 mt-4 gap-2 justify-end">
          <h3 className="text-notaryTextPurple text-xl font-bold ">
            Next Step
          </h3>
          <button
            disabled={step === 4}
            onClick={() => {
              if(activeAgent.oth){
                setStep(step + 2);
                return;
              }
              setStep(step + 1);
            }}
            className="bg-notaryLightYellow text-notaryDarkGrey mb-4 font-bold rounded-full px-2 py-1"
          >
            &rarr;
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Form;
