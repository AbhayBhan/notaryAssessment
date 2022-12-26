import React from 'react';
import { useData } from '../../../contexts/DataContext';

const LSA_OFFLINE = () => {
    const {getServiceDet} = useData();
    const servicedetails = getServiceDet();
    const listServices = servicedetails.LSA_OFFLINE;
  return (
    <>
        {listServices.map((service) => {
            return(
              <div key={service.serviceName} className='flex flex-row justify-between space-x-80 mt-2'>
                <h2 className='text-xl font-bold'>{service.serviceName}</h2>
                <input type='checkbox' className='w-5 h-5 text-notaryProgressBar bg-gray-100 border-gray-300 focus:ring-notaryYellow rounded-full'></input>
              </div>
            )
        })}
    </>
  )
}

export default LSA_OFFLINE