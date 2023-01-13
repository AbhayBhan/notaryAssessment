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
    <div className='container flex-col space-y-6 bg-notaryDarkPurple flex md:w-[20vw]'>
        <h1 className='text-3xl p-4 mb-11 text-notaryYellow font-bold'>BeInsurance</h1>
        <img src={personaldetails.photoURL} width='120px' height='120px' className='rounded-full shadow-xl mx-auto mb-6'></img>
        <h1 className='text-3xl text-white font-bold mb-9 mx-auto'>{personaldetails.username}</h1>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={mailIcon} width='20px' height='16px' ></img>
            <h6 className='text-notaryTextPurple text-sm font-semibold'>{personaldetails.email}</h6>
        </div>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={callIcon} width='20px' height='16px' ></img>
            <h6 className='text-notaryTextPurple text-sm font-semibold'>{personaldetails.phoneNumber}</h6>
        </div>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={markerIcon} width='20px' height='16px' ></img>
            <h6 className='text-notaryTextPurple text-sm font-semibold'>{businessdetails.businessAddress}</h6>
        </div>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={userIcon} width='20px' height='16px' ></img>
            <h6 className='text-notaryTextPurple text-sm font-semibold'>{personaldetails.createdOn}</h6>
        </div>
    </div>
  )
}

export default Details