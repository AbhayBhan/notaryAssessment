import React from 'react';
import pic from '../assets/p1.png';
import mailIcon from '../assets/envelope.svg';
import callIcon from '../assets/phone-call.svg';
import markerIcon from '../assets/marker.svg';
import userIcon from '../assets/user.svg';

const Details = () => {
  return (
    <div className='hidden container flex-col bg-notaryDarkPurple h-[100vh] md:w-[20vw] md:flex'>
        <h1 className='text-3xl p-4 mb-11 text-notaryYellow font-bold'>BeInsurance</h1>
        <img src={pic} width='120px' className='rounded-full shadow-xl mx-auto mb-6'></img>
        <h1 className='text-3xl text-white font-bold mb-9 mx-auto'>Jacob Jones</h1>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={mailIcon} width='20px' height='16px' ></img>
            <h6 className='text-notaryTextPurple text-sm font-semibold'>example@test.com</h6>
        </div>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={callIcon} width='20px' height='16px' ></img>
            <h6 className='text-notaryTextPurple text-sm font-semibold'>+11 234XXXXXX</h6>
        </div>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={markerIcon} width='20px' height='16px' ></img>
            <h6 className='text-notaryTextPurple text-sm font-semibold'>3891 Ranchview Dr.Richardson, California 62639</h6>
        </div>
        <div className='flex flex-row px-4 mb-3 gap-4'>
            <img src={userIcon} width='20px' height='16px' ></img>
            <h6 className='text-notaryTextPurple text-sm font-semibold'>Insurance ID 22332123</h6>
        </div>
    </div>
  )
}

export default Details