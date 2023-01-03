import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useData } from "../contexts/DataContext";

const Step3 = ({ handleSubmit, formData, setFormData }) => {
  const {getTimeDet} = useData();
  const [date, selectDate] =  useState('')
  const [timeList, setTimeList] = useState([]);

  useEffect(() => {
    if(date === '') return;

    const [year, month, day] = date.split('-');
    const formattedDate = [day, month, year].join('/');

    const timeGroup = getTimeDet();
    setTimeList(timeGroup[formattedDate]);
    
  },[date]);

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
          <h4 className="mb-1">Enter Signing Location</h4>
          <GooglePlacesAutocomplete selectProps={{
            onChange : e => setFormData({...formData, place : e})
          }} 
          apiKey="AIzaSyBcMIlCF4yCRP4GJ-PxA_5xxc4lpFEBysc">

          </GooglePlacesAutocomplete>
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Date</h4>
          <input
            value={formData.signingDate}
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              setFormData({ ...formData, signingDate : e.target.value });
              selectDate(e.target.value);
            }}
            type="date"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Time</h4>
          <select name="timedata" className="px-4 rounded-lg border-2 border-solid border-notaryGrey">
            {timeList.map((timeVal) => {
              return(
                <option key={timeVal}>{timeVal}</option>
              )
            })}
          </select>
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
