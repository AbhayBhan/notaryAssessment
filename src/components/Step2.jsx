import React from "react";
import "../styles/main.css";

const Step2 = ({ formData, setFormData, activeAgent, witnessList }) => {

  const addSigner = () => {
    setFormData({
      ...formData,
      signers: [...formData.signers, { signerFullName: "", phoneNumber: "", emailAddress: "" }]
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
              className="px-1 rounded-lg border-2"
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
            value={formData.companyName}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, companyName: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Agent Name</h4>
          <input
            value={formData.agentName}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, agentName: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Email</h4>
          <input
            value={formData.agentEmail}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, agentEmail: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Phone Number</h4>
          <input
            value={formData.agentPhone}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, agentPhone: e.target.value });
            }}
            type="text"
          />
        </div>
      </div>
      </> : <></>}


      {!activeAgent.nsa ?
      <>        
      <h3 className="text-xl font-bold text-notaryDarkGrey mb-2">
        Witness Details
      </h3>
      <div
        style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
        className="flex flex-row gap-16 p-4 flex-wrap"
      >
        <div className="flex flex-col space-y-2">
          <h4>Witness Name</h4>
          <input
            value={formData.witnessList.fullName}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, witnessList : {
                ...witnessList, fullName : e.target.value
              }});
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Witness Phone</h4>
          <input
            value={formData.witnessList.phoneNumber}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            type="text"
            onChange={(e) => {
              setFormData({...formData, witnessList : {
                ...witnessList, phoneNumber : e.target.value
              }})
            }}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Email</h4>
          <input
            value={formData.witnessList.emailAddress}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            type="text"
            onChange={(e) => {
              setFormData({...formData, witnessList : {
                ...witnessList, emailAddress : e.target.value
              }})
            }}
          />
        </div>
      </div>
      </> : <></>}

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
      </div>
    </div>
  );
};

export default Step2;
