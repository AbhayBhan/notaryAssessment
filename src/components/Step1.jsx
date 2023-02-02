import React from "react";
import "../styles/main.css";
import RonForm from "./forms/RonForm";
import MobNotaryForm from "./forms/MobNotaryForm";
import NotarySignForm from "./forms/NotarySignForm";
import OthersForm from "./forms/OthersForm";

const Step1 = ({activeAgent, setActiveAgent, formData, setFormData}) => {

  const handleSign = () => {
    if(activeAgent.nsa){
      setActiveAgent({...activeAgent, nsa : false});
      return;
    }
    setActiveAgent({nsa : true, mgn : false, ron : false, oth : false});
    setFormData({...formData, isRealEstateTransaction : true, isOnlineSigning :  true});
    setFormData({...formData, signers : []});
  };

  const handleRemote = () => {
    if(activeAgent.ron){
      setActiveAgent({...activeAgent, ron : false});
      return;
    }
    setActiveAgent({nsa : false, mgn : false, ron : true, oth : false});
    setFormData({...formData, isRealEstateTransaction : false, isOnlineSigning : true});
  };

  const handleMobile = () => {
    if(activeAgent.mgn){
      setActiveAgent({...activeAgent, mgn : false});
      return;
    }
    setActiveAgent({nsa : false, mgn : true, ron : false, oth : false});
    setFormData({...formData, isRealEstateTransaction : false, isOnlineSigning : false});
  };

  const handleOthers = () => {
    if(activeAgent.oth){
      setActiveAgent({...activeAgent, oth : false});
      return;
    }
    setActiveAgent({nsa : false, mgn : false, ron : false, oth : true});
    setFormData({...formData, isRealEstateTransaction : false, isOnlineSigning : false});
  }

  return (
    <div className="container flex flex-col p-2 space-x-4 mx-auto -mt-6 md:flex-row">
      <div className="container flex flex-col gap-3 space-y-0">
        <div
          style={{
            borderColor: activeAgent.nsa ? "#8b36fd" : "#d5cfe3",
            backgroundColor: activeAgent.nsa ? "#fef2be" : "#FFF",
          }}
          onClick={handleSign}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-xl"
        >
          <h1 className="text-4xl px-4 mt-5 mb-5 md:mb-0">Notary Signing Agent</h1>
          <p className="hidden text-sm px-4 mt-2 text-notaryDarkGrey md:block">
            Suitable for those who have purchased a brand new car.
          </p>
          <p className="hidden text-sm px-4 mb-4 mt-5 font-bold md:block">
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
          <h1 className="text-4xl px-4 mt-5 mb-5 md:mb-0">Remote Online Notary</h1>
          <p className="hidden text-sm px-4 mt-2 text-notaryDarkGrey md:block">
            Suitable for thoe who already have a valid third party cover.
          </p>
          <p className="hidden text-sm px-4 mb-4 mt-5 font-bold md:block">
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
          <h1 className="text-4xl px-4 mt-5 mb-5 md:mb-0">Mobile General Notary</h1>
          <p className="hidden text-sm px-4 mt-2 text-notaryDarkGrey md:block">
            Suitable for those who use the car infrequently.
          </p>
          <p className="hidden text-sm px-4 mb-4 mt-5 font-bold md:block">
            View Details &rarr;
          </p>
        </div>
        <div
          style={{
            borderColor: activeAgent.oth ? "#8b36fd" : "#d5cfe3",
            backgroundColor: activeAgent.oth ? "#fef2be" : "#FFF",
          }}
          onClick={handleOthers}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-xl"
        >
          <h1 className="text-4xl px-4 mt-5 mb-5 md:mb-0">Others</h1>
          <p className="hidden text-sm px-4 mt-2 text-notaryDarkGrey md:block">
            For other Service Categories
          </p>
          <p className="hidden text-sm px-4 mb-4 mt-5 font-bold md:block">
            View Details &rarr;
          </p>
        </div>
      </div>
      
      {activeAgent.nsa ? <NotarySignForm formData={formData} setFormData={setFormData} /> : <></>}
      {activeAgent.ron ? <RonForm /> : <></>}
      {activeAgent.mgn ? <MobNotaryForm /> : <></>}
      {activeAgent.oth ? <OthersForm formData={formData} setFormData={setFormData} signerDets={formData.signers}/> : <></>}
    </div>
  );
};

export default Step1;
