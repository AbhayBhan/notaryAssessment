import React from 'react';

const NotarySignForm = ({servicedetails}) => {
    const listServices = servicedetails.LSA_ONLINE;

  return (
    <div className="container shadow-xl flex items-start border-2 mt-4 rounded-xl border-notaryGrey flex-col p-4 ">
      <h1 className="text-xl mx-auto font-bold"> {/* Change h1 to div with flex row buttons*/}
        Services
      </h1>
      <div className='flex flex-col gap-3 px-4 mt-16'>
        {listServices.map((service) => {
            return(
              <h2 key={service.serviceName} className='text-xl font-bold'>{service.serviceName}</h2>
            )
        })}
      </div>
    </div>
  )
}

export default NotarySignForm