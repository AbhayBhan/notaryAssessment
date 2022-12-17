import React, { useEffect, useState } from "react";
import "../styles/main.css";
import RonForm from "./forms/RonForm";
import MobNotaryForm from "./forms/MobNotaryForm";
import NotarySignForm from "./forms/NotarySignForm";

const Step1 = ({servicedetails, costingdetails}) => {
  const [signActive, setSignActive] = useState(false);
  const [remoteActive, setRemoteActive] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  const handleSign = () => {
    if(signActive){
      setSignActive(false);
      return
    }
    setRemoteActive(false);
    setMobileActive(false);
    setSignActive(true);
  };

  const handleRemote = () => {
    if(remoteActive){
      setRemoteActive(false);
      return;
    }
    setSignActive(false);
    setMobileActive(false);
    setRemoteActive(true);
  };

  const handleMobile = () => {
    if(mobileActive){
      setMobileActive(false);
      return;
    }
    setSignActive(false);
    setRemoteActive(false);
    setMobileActive(true);
  };

  return (
    <div className="container flex flex-row p-2 space-x-4 mx-auto">
      <div className="container flex flex-col gap-3 space-y-0">
        <div
          style={{
            borderColor: signActive ? "#8b36fd" : "#d5cfe3",
            backgroundColor: signActive ? "#fef2be" : "#FFF",
          }}
          onClick={handleSign}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-xl"
        >
          <h1 className="text-4xl px-4 mt-5">Notary Signing Agent</h1>
          <p className="text-sm px-4 mt-2 text-notaryDarkGrey">
            Suitable for those who have purchased a brand new car.
          </p>
          <p className="text-sm px-4 mb-4 mt-5 font-bold">
            View Details &rarr;
          </p>
        </div>
        <div
          style={{
            borderColor: remoteActive ? "#8b36fd" : "#d5cfe3",
            backgroundColor: remoteActive ? "#fef2be" : "#FFF",
          }}
          onClick={handleRemote}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-xl"
        >
          <h1 className="text-4xl px-4 mt-5">Remote Online Notary</h1>
          <p className="text-sm px-4 mt-2 text-notaryDarkGrey">
            Suitable for thoe who already have a valid third party cover.
          </p>
          <p className="text-sm px-4 mb-4 mt-5 font-bold">
            View Details &rarr;
          </p>
        </div>
        <div
          style={{
            borderColor: mobileActive ? "#8b36fd" : "#d5cfe3",
            backgroundColor: mobileActive ? "#fef2be" : "#FFF",
          }}
          onClick={handleMobile}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-xl"
        >
          <h1 className="text-4xl px-4 mt-5">Mobile General Notary</h1>
          <p className="text-sm px-4 mt-2 text-notaryDarkGrey">
            Suitable for those who use the car infrequently.
          </p>
          <p className="text-sm px-4 mb-4 mt-5 font-bold">
            View Details &rarr;
          </p>
        </div>
      </div>
      
      {signActive ? <NotarySignForm servicedetails={servicedetails}/> : <></>}
      {remoteActive ? <RonForm costingdetails={costingdetails}/> : <></>}
      {mobileActive ? <MobNotaryForm costingdetails={costingdetails} /> : <></>}
    </div>
  );
};

export default Step1;
