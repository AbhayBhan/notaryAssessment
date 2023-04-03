import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";
import { useData } from "../contexts/DataContext";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import "../styles/loader.css";
import location from "../assets/location.svg";
import calender from "../assets/calender.svg";
import time from "../assets/time.svg";
import editLogo from "../assets/edit-profile.svg";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
dayjs.extend(utc);

const Step3 = ({ handleSubmit, formData, setFormData, activeAgent, err }) => {
  const { getTimeDet } = useData();
  const [date, selectDate] = useState("");
  const [timeZone, setTimeZone] = useState('');
  const [timeList, setTimeList] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  const defTimeList = [
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
  ];

  useEffect(() => {
    // if (date === "") return;

    // const [year, month, day] = date.split("-");
    // const formattedDate = [day, month, year].join("/");
    // setFormData({ ...formData, signingDate: formattedDate });

    // const timeGroup = getTimeDet();
    // setTimeList(timeGroup[formattedDate]);
  }, [date]);

  const handleSchedule = () => {
    setBtnLoading(true);
    handleSubmit(setBtnLoading);
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

  useEffect(()=>{
    const options = Intl.DateTimeFormat().resolvedOptions();
    const timeZone = options.timeZone;
    setTimeZone(timeZone);
  },[]);

  const today = new Date().toISOString().substr(0, 10);

  return (
    <div className="p-4 m-4 border mt-5 shadow-xl">
      <div className="flex items-center gap-2 my-2">
        <img className="w-6 h-6" src={editLogo} alt="" />
        <h3 className="text-xl font-bold text-notaryDarkGrey">
          Pick Your Slot for Appointment
        </h3>
      </div>
      <div
        // style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
        className="flex flex-col gap-x-20 gap-y-8 p-4 flex-wrap"
      >
        {!formData.isOnlineSigning ? (
          <div className="flex items-center space-x-3">
            <img className="w-6 h-6" src={location} alt="" />
            <h4 className="pr-1">Venue</h4>
            <div className="w-44 md:w-96 ">
              <GooglePlacesAutocomplete
                selectProps={{
                  onChange: (e) => handlePlaceSelect(e),
                  // className:" focus:border-primary-100"
                }}
                apiKey="AIzaSyBcMIlCF4yCRP4GJ-PxA_5xxc4lpFEBysc"
              ></GooglePlacesAutocomplete>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex items-center space-x-3">
          <img className="w-6 h-6" src={calender} alt="" />
          <h4 className="pr-3">Date & Time</h4>
          <ReactDatePicker
          selected={Date.parse(date)}
          onChange={(e)=>{
            selectDate(e.toString());
            setFormData({ ...formData, signingTime: e.toLocaleTimeString(), signingDateTimeStamp: dayjs(e).utc().valueOf() })
          }}
          showTimeSelect
          timeIntervals={30}
          timeCaption="Time"
          dateFormat={"MMMM d, yyyy h:mm aa"}
          className=""
          />
          <br />
        </div>
      </div>
      <h1 className="ml-10 md:ml-28">Your timezone: "{timeZone}"</h1>
      <div className="flex mt-6">
        <button
          onClick={handleSchedule}
          disabled={btnLoading}
          className="px-6 py-3 bg-notaryLightBlue rounded-lg text-notaryDarkBlue mx-auto hover:text-notaryLightBlue hover:bg-notaryDarkBlue transition-all duration-150 ease-out"
        >
          {btnLoading ? (
            <div className="btn-loader"></div>
          ) : (
            <>Schedule Appointment</>
          )}
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
