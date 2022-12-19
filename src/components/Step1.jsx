import React from "react";
import "../styles/main.css";
import RonForm from "./forms/RonForm";
import MobNotaryForm from "./forms/MobNotaryForm";
import NotarySignForm from "./forms/NotarySignForm";

const Step1 = ({activeAgent, setActiveAgent, formData, setFormData}) => {

  const handleSign = () => {
    if(activeAgent.nsa){
      setActiveAgent({...activeAgent, nsa : false});
      return;
    }
    setActiveAgent({nsa : true, mgn : false, ron : false});
    setFormData({...formData, isRealEstateTransaction : true});
  };

  const handleRemote = () => {
    if(activeAgent.ron){
      setActiveAgent({...activeAgent, ron : false});
      return;
    }
    setActiveAgent({nsa : false, mgn : false, ron : true});
    setFormData({...formData, isRealEstateTransaction : false});
  };

  const handleMobile = () => {
    if(activeAgent.mgn){
      setActiveAgent({...activeAgent, mgn : false});
      return;
    }
    setActiveAgent({nsa : false, mgn : true, ron : false});
    setFormData({...formData, isRealEstateTransaction : false});
  };

  return (
    <div className="container flex flex-row p-2 space-x-4 mx-auto">
      <div className="container flex flex-col gap-3 space-y-0">
        <div
          style={{
            borderColor: activeAgent.nsa ? "#8b36fd" : "#d5cfe3",
            backgroundColor: activeAgent.nsa ? "#fef2be" : "#FFF",
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
            borderColor: activeAgent.ron ? "#8b36fd" : "#d5cfe3",
            backgroundColor: activeAgent.ron ? "#fef2be" : "#FFF",
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
            borderColor: activeAgent.mgn ? "#8b36fd" : "#d5cfe3",
            backgroundColor: activeAgent.mgn ? "#fef2be" : "#FFF",
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
      
      {activeAgent.nsa ? <NotarySignForm formData={formData} setFormData={setFormData} /> : <></>}
      {activeAgent.ron ? <RonForm /> : <></>}
      {activeAgent.mgn ? <MobNotaryForm /> : <></>}
    </div>
  );
};

export default Step1;
