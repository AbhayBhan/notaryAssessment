import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';

const NotarySignForm = ({formData, setFormData}) => {
    const {getServiceDet} = useData();
    const servicedetails = getServiceDet();
    const listServices = servicedetails.LSA_ONLINE;

  return (
    <div className="container shadow-xl flex items-start border-2 mt-4 rounded-xl border-notaryGrey flex-col p-4 ">
      <div className='flex flex-row justify-around gap-10 mx-auto'>
        <button onClick={() => setFormData({...formData, isOnlineSigning : false})} className='font-bold text-xl transition-all duration-100 hover:text-2xl'>In-office</button>
        <button onClick={() => setFormData({...formData, isOnlineSigning : true})} className='font-bold text-xl transition-all duration-100 hover:text-2xl'>Online</button>
        <button onClick={() => setFormData({...formData, isOnlineSigning : false})} className='font-bold text-xl transition-all duration-100 hover:text-2xl'>RON</button>
      </div>
      <div className='flex mx-auto flex-col gap-3 px-4 mt-16'>
        {listServices.map((service) => {
            return(
              <div key={service.serviceName} className='flex flex-row justify-between space-x-80 mt-2'>
                <h2 className='text-xl font-bold'>{service.serviceName}</h2>
                <input type='checkbox' className='w-5 h-5 text-notaryProgressBar bg-gray-100 border-gray-300 focus:ring-notaryYellow rounded-full'></input>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default NotarySignForm