import React, { useState } from "react";
import "../styles/main.css";

const Step2 = ({ formData, setFormData, activeAgent}) => {

  const [showWitness, setShowWitness] = useState(false);

  const addSigner = () => {
    setFormData({
      ...formData,
      signers: [...formData.signers, { signerFullName: "", phoneNumber: "", emailAddress: "" }]
    });
  }

  const addWitness = () => {
    setFormData({
      ...formData,
      witnessList : [...formData.witnessList, {witnessName : "", witnessPhone : "", witnessEmail : "", type : "witness"}]
    });
  }

  return (
    <div className="container flex flex-col gap-2 p-4 mt-8">
      <h3 className="text-xl font-bold text-notaryDarkGrey mb-2">
        Signer Details
      </h3>
      {formData.signers.map((signer, index) => (
        <div
          style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
          className="flex flex-row gap-16 p-4 flex-wrap"
          key={index}
        >
          <div className="flex flex-col space-y-2">
            <h4>Full Name</h4>
            <input
              value={signer.signerFullName}
              className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
              onChange={(e) => {
                const updatedSigners = [...formData.signers];
                updatedSigners[index].signerFullName = e.target.value;
                setFormData({ ...formData, signers: updatedSigners });
              }}
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h4>Phone Number</h4>
            <input
              value={signer.phoneNumber}
              className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
              onChange={(e) => {
                const updatedSigners = [...formData.signers];
                updatedSigners[index].phoneNumber = e.target.value;
                setFormData({ ...formData, signers: updatedSigners });
              }}
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h4>Email</h4>
            <input
              value={signer.emailAddress}
              className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
              onChange={(e) => {
                const updatedSigners = [...formData.signers];
                updatedSigners[index].emailAddress = e.target.value;
                setFormData({ ...formData, signers: updatedSigners });
              }}
              type="text"
            />
          </div>
        </div>
      ))}
      <button className="px-4 py-2 rounded-full self-baseline transition-all duration-100 bg-notaryProgressBar text-white font-bold hover:bg-white hover:text-notaryProgressBar" 
        onClick={addSigner}
        >Add Signer</button>


      
      {activeAgent.nsa ?
      <>
      <h3 className="text-xl font-bold text-notaryDarkGrey mb-2">
        Title Company Details
      </h3>
      <div
        style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
        className="flex flex-row gap-16 p-4 flex-wrap"
      >
        <div className="flex flex-col space-y-2">
          <h4>Company Name</h4>
          <input
            value={formData.customerDetails.companyName}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, customerDetails : {...formData.customerDetails , companyName : e.target.value}});
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Agent Name</h4>
          <input
            value={formData.customerDetails.customerName}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, customerDetails : {...formData.customerDetails, customerName : e.target.value}});
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Email</h4>
          <input
            value={formData.customerDetails.customerEmailAddress}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, customerDetails : {...formData.customerDetails, customerEmailAddress : e.target.value}});
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Phone Number</h4>
          <input
            value={formData.customerDetails.customerPhoneNumber}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, customerDetails : {...formData.customerDetails, customerPhoneNumber : e.target.value} });
            }}
            type="text"
          />
        </div>
      </div>
      </> : <></>}


      {!activeAgent.nsa ? 
      <>
      <div className="flex flex-row gap-4 p-2 mt-4">
        <input className="" type='checkbox' checked={showWitness} onClick={() => setShowWitness(!showWitness)}/>
        <h3 className="text-sm font-bold">Do you want Witness with this signing?</h3>
      </div>
      {showWitness ? 
      <>        
      <h3 className="text-xl font-bold text-notaryDarkGrey mb-2">
        Witness Details
      </h3>
      {formData.witnessList.map((witness, index) => (
        <div
        style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
        className="flex flex-row gap-16 p-4 flex-wrap"
        key={index}
      >
        <div className="flex flex-col space-y-2">
          <h4>Witness Name</h4>
          <input
            value={witness.witnessName}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              const updatedWitness = [...formData.witnessList];
              updatedWitness[index].witnessName = e.target.value;
              setFormData({ ...formData, witnessList: updatedWitness });
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Witness Phone</h4>
          <input
            value={witness.witnessPhone}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            type="text"
            onChange={(e) => {
              const updatedWitness = [...formData.witnessList];
              updatedWitness[index].witnessPhone = e.target.value;
              setFormData({ ...formData, witnessList: updatedWitness });
            }}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Email</h4>
          <input
            value={witness.witnessEmail}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            type="text"
            onChange={(e) => {
              const updatedWitness = [...formData.witnessList];
              updatedWitness[index].witnessEmail = e.target.value;
              setFormData({ ...formData, witnessList: updatedWitness });
            }}
          />
        </div>
      </div>
      ))}
      <button className="px-4 py-2 rounded-full self-baseline transition-all duration-100 bg-notaryProgressBar text-white font-bold hover:bg-white hover:text-notaryProgressBar" 
        onClick={addWitness}
        >Add Witness</button>
      </> : <></>}
      </> : <></>}


      {!activeAgent.ron ? <>
      <h3 className="text-xl font-bold text-notaryDarkGrey mb-2">Order Info</h3>
      <div
        style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
        className="flex flex-row gap-16 p-4 flex-wrap"
      >
        <div className="flex flex-col space-y-2">
          <h4>Escrow # / Loan Number</h4>
          <input
            value={formData.escrowNumber}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, escrowNumber: e.target.value });
              setFormData({...formData, loanNo: e.target.value})
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Property Address</h4>
          <input
            value={formData.propertyAddress}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, propertyAddress: e.target.value });
            }}
            type="text"
          />
        </div>
      </div></> : <></> }
    </div>
  );
};

export default Step2;
