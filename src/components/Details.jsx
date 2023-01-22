import React from 'react';
import mailIcon from '../assets/envelope.svg';
import callIcon from '../assets/phone-call.svg';
import markerIcon from '../assets/marker.svg';
import userIcon from '../assets/user.svg';
import { useData } from '../contexts/DataContext';

const Details = () => {

    const {getPersonalDet, getBusinessDet} = useData();
    const personaldetails = getPersonalDet();
    const businessdetails = getBusinessDet();

  return (
    <div className='container flex-col space-y-6 h-[60vh] bg-notarySideBarPurple flex md:fixed md:h-[100vh] md:w-[18vw]'>
        <div className='flex flex-row md:flex-col'>
            <h1 className='text-lg p-4 my-1 text-notaryYellow font-bold md:my-11 md:text-3xl md:mx-auto'>BeInsurance</h1>
            <img src={personaldetails.photoURL} width='120px' height='120px' className='rounded-full shadow-xl my-6 mx-6 mb-6 md:my-0 md:mx-auto'></img>    
        </div>    
        <h1 className='text-3xl text-white font-bold mb-9 mx-auto'>{personaldetails.username}</h1>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={mailIcon} width='20px' height='16px' ></img>
            <h6 className='text-white text-md font-medium'>{personaldetails.email}</h6>
        </div>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={callIcon} width='20px' height='16px' ></img>
            <h6 className='text-white text-md font-medium'>{personaldetails.phoneNumber}</h6>
        </div>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={markerIcon} width='20px' height='16px' ></img>
            <h6 className='text-white text-md font-medium'>{businessdetails.businessAddress}</h6>
        </div>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={userIcon} width='20px' height='16px' ></img>
            <h6 className='text-white text-md font-medium'>{personaldetails.createdOn}</h6>
        </div>
    </div>
  )
}

export default Details