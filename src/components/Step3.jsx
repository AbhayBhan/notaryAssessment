import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";
import { useData } from "../contexts/DataContext";
import '../styles/loader.css';

const Step3 = ({ handleSubmit, formData, setFormData, activeAgent, err }) => {
  const { getTimeDet } = useData();
  const [date, selectDate] = useState("");
  const [timeList, setTimeList] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  const defTimeList = ["1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM"]

  useEffect(() => {
    if (date === "") return;

    const [year, month, day] = date.split("-");
    const formattedDate = [day, month, year].join("/");
    setFormData({ ...formData, signingDate: formattedDate });

    const timeGroup = getTimeDet();
    setTimeList(timeGroup[formattedDate]);
  }, [date]);

  const handleSchedule = () => {
    setBtnLoading(true);
    handleSubmit(setBtnLoading);
  }

  const AvailTime = () => {
    if (timeList) {
      return timeList.map((timeVal) => {
        return <option key={timeVal}>{timeVal}</option>;
      });
    } else {
      return defTimeList.map((timeVal) => {
        return <option key={timeVal}>{timeVal}</option>
      })
    }
  };

  const handlePlaceSelect = (e) => {
    geocodeByPlaceId(e.value.place_id)
      .then((res) => getLatLng(res[0]))
      .then(({ lat, lng }) =>
        setFormData({
          ...formData,
          place: {
            ...formData.place,
            lat: lat,
            lon: lng,
            completeAddress: e.label,
            place_id: e.value.place_id,
          },
        })
      );
  };

  return (
    <div>
      <h3 className="text-xl font-bold p-2 -mt-3 text-notaryDarkGrey mb-2">
        Signing Details
      </h3>
      <div
        style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
        className="flex flex-row gap-16 p-4 flex-wrap"
      >
        {!activeAgent.ron ? (
          <div className="flex flex-col space-y-2">
            <h4 className="mb-1">Enter Signing Location</h4>
            <GooglePlacesAutocomplete
              selectProps={{
                onChange: (e) => handlePlaceSelect(e),
              }}
              apiKey="AIzaSyBcMIlCF4yCRP4GJ-PxA_5xxc4lpFEBysc"
            ></GooglePlacesAutocomplete>
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col space-y-2">
          <h4>Date</h4>
          <input
            className="px-1 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => {
              selectDate(e.target.value);
            }}
            type="date"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h4>Time</h4>
          <select
            value={formData.signingTime}
            name="timedata"
            className="px-4 rounded-lg border-2 border-solid border-notaryGrey"
            onChange={(e) => setFormData({...formData, signingTime : e.target.value})}
          >
            <AvailTime />
          </select>
        </div>
      </div>
      <div className="flex mt-6">
        <button
          onClick={handleSchedule}
          disabled={btnLoading}
          className="px-6 py-3 bg-notaryLightBlue rounded-lg text-notaryDarkBlue mx-auto hover:text-notaryLightBlue hover:bg-notaryDarkBlue transition-all duration-150 ease-out"
        >
          {btnLoading ? 
          <div className="btn-loader"></div>
          : <>Schedule Appointment</> }
        </button>
      </div>
      <div className="flex flex-row justify-center mt-6">
        {err ? (
          <div className="mx-auto font-bold bg-notaryAlertRed text-white px-4 py-2 rounded-xl">
            {err}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Step3;
