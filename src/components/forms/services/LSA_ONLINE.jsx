import React, { useState } from "react";
import { useData } from "../../../contexts/DataContext";

const LSA_ONLINE = ({ formData, setFormData }) => {
  const { getServiceDet } = useData();
  const servicedetails = getServiceDet();
  const listServices = servicedetails.LSA_ONLINE;

  const [selectedService, setSelectedService] = useState(null);

  const handleCheckboxChange = (service) => {
    if (selectedService === service) {
      setSelectedService(null);
      setFormData({ ...formData, serviceDetails: null });
    } else {
      setSelectedService(service);
      setFormData({ ...formData, serviceDetails: service });
    }
  };

  return (
    <>
      <h1 className="text-xl mx-auto font-bold">Select Services</h1>
      <div className="flex flex-col gap-1">
        {listServices.map((service) => {
          return (
            <div
              key={service.serviceName}
              className="flex flex-row space-x-24 mt-2 justify-between md:space-x-80"
            >
              <h2 className="text-lg font-normal">{service.serviceName}</h2>
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedService === service}
                onChange={() => handleCheckboxChange(service)}
              ></input>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LSA_ONLINE;
