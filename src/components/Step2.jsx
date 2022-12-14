import React from "react";
import "../styles/main.css";

const Step2 = ({ formData, setFormData }) => {
  return (
    <div className="container flex flex-col gap-3 p-4 mt-8">
      <h3 className="text-xl font-bold text-notaryDarkGrey mb-2">
        Signer Details
      </h3>
      <div
        style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
        className="flex flex-row gap-16 p-4 flex-wrap"
      >
        <div className="flex flex-col space-y-2">
          <h4>Full Name</h4>
          <input
            value={formData.name}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Phone Number</h4>
          <input
            value={formData.phone}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Email</h4>
          <input
            value={formData.email}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            type="text"
          />
        </div>
      </div>

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

      <h3 className="text-xl font-bold text-notaryDarkGrey mb-2">Order Info</h3>
      <div
        style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
        className="flex flex-row gap-16 p-4 flex-wrap"
      >
        <div className="flex flex-col space-y-2">
          <h4>Escrow # / Loan Number</h4>
          <input
            value={formData.loanNum}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, loanNum: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Property Address</h4>
          <input
            value={formData.address}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
