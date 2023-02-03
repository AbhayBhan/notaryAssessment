import React, { useState } from "react";
import GEN_ONLINE from "./services/GEN_ONLINE";
import LSA_OFFLINE from "./services/LSA_OFFLINE";
import LSA_ONLINE from "./services/LSA_ONLINE";

const NotarySignForm = ({ formData, setFormData }) => {
  const [showServices, setShowServices] = useState({
    inoffice: true,
    online: false,
    ron: false,
  });

  return (
    <div className="container shadow-xl flex items-start border-2 mt-4 rounded-md border-notaryGrey flex-col p-4 ">
      <div className="flex flex-row justify-around gap-10 mx-auto">
        <button
          onClick={() => {
            setFormData({ ...formData, isOnlineSigning: false });
            setShowServices({ inoffice: true, online: false, ron: false });
            setFormData({...formData, place : {...formData.place, isInOffice : true}})
          }}
          className="font-bold text-xl transition-all duration-100 hover:text-2xl"
          style={showServices.inoffice ? {color : "#8b36fd"} : {color : "black"}}
        >
          In-office
        </button>
        <button
          onClick={() => {
            setFormData({ ...formData, isOnlineSigning: true });
            setShowServices({ inoffice: false, online: true, ron: false });
            setFormData({...formData, place : {...formData.place, isInOffice : false}})
          }}
          className="font-bold text-xl transition-all duration-100 hover:text-2xl"
          style={showServices.online ? {color : "#8b36fd"} : {color : "black"}}
        >
          Online
        </button>
        <button
          onClick={() => {
            setFormData({ ...formData, isOnlineSigning: false });
            setShowServices({ inoffice: false, online: false, ron: true });
            setFormData({...formData, place : {...formData.place, isInOffice : false}})
          }}
          className="font-bold text-xl transition-all duration-100 hover:text-2xl"
          style={showServices.ron ? {color : "#8b36fd"} : {color : "black"}}
        >
          RON
        </button>
      </div>
      <div className="flex mx-auto flex-col gap-3 px-4 mt-16 mb-5">
        {showServices.online && <LSA_ONLINE formData={formData} setFormData={setFormData} />}
        {showServices.inoffice && <LSA_OFFLINE formData={formData} setFormData={setFormData} />}
        {showServices.ron && <GEN_ONLINE formData={formData} setFormData={setFormData} />}
      </div>
    </div>
  );
};

export default NotarySignForm;
