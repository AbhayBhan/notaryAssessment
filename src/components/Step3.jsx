import React from "react";

const Step3 = ({ handleSubmit, formData, setFormData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold p-2 mt-3 text-notaryDarkGrey mb-2">
        Signing Details
      </h3>
      <div
        style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
        className="flex flex-row gap-16 p-4 flex-wrap"
      >
        <div className="flex flex-col space-y-2">
          <h4>Enter Signing Location</h4>
          <input
            value={formData.location}
            className="px-1 rounded-lg border-2 w-[40rem] border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, location: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Date</h4>
          <input
            value={formData.date}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, date : e.target.value });
            }}
            type="date"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Time</h4>
          <input
            value={formData.time}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, time : e.target.value });
            }}
            type="time"
          />
        </div>
      </div>
      <div className="flex mt-6">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-notaryLightBlue rounded-lg text-notaryDarkBlue mx-auto hover:text-notaryLightBlue hover:bg-notaryDarkBlue transition-all duration-150 ease-out"
        >
          Schedule Appointment
        </button>
      </div>
    </div>
  );
};

export default Step3;