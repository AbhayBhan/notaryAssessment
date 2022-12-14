import React, { useState } from "react";
import "../styles/main.css";

const Step1 = () => {
  const [signActive, setSignActive] = useState(false);
  const [remoteActive, setRemoteActive] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  const handleSign = () => {
    setRemoteActive(false);
    setMobileActive(false);
    setSignActive(true);
  };

  const handleRemote = () => {
    setSignActive(false);
    setMobileActive(false);
    setRemoteActive(true);
  };

  const handleMobile = () => {
    setSignActive(false);
    setRemoteActive(false);
    setMobileActive(true);
  };

  return (
    <div className="container flex flex-row p-2 space-x-4 mx-auto">
      <div className="container flex flex-col gap-3 space-y-0">
        <div
          style={{
            borderColor: signActive ? "#8b36fd" : "#d5cfe3",
            backgroundColor: signActive ? "#fef2be" : "#FFF",
          }}
          onClick={handleSign}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-xl"
        >
          <h1 className="text-4xl px-4 mt-5">Notary Signing Agent</h1>
          <p className="text-sm px-4 mt-2 text-notaryDarkGrey">
            Suitable for those who have purchased a brand new car.
          </p>
          <p className="text-sm px-4 mb-4 mt-5 font-bold">
            View Details &rarr;
          </p>
        </div>
        <div
          style={{
            borderColor: remoteActive ? "#8b36fd" : "#d5cfe3",
            backgroundColor: remoteActive ? "#fef2be" : "#FFF",
          }}
          onClick={handleRemote}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-xl"
        >
          <h1 className="text-4xl px-4 mt-5">Remote Online Notary</h1>
          <p className="text-sm px-4 mt-2 text-notaryDarkGrey">
            Suitable for thoe who already have a valid third party cover.
          </p>
          <p className="text-sm px-4 mb-4 mt-5 font-bold">
            View Details &rarr;
          </p>
        </div>
        <div
          style={{
            borderColor: mobileActive ? "#8b36fd" : "#d5cfe3",
            backgroundColor: mobileActive ? "#fef2be" : "#FFF",
          }}
          onClick={handleMobile}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-xl"
        >
          <h1 className="text-4xl px-4 mt-5">Mobile General Notary</h1>
          <p className="text-sm px-4 mt-2 text-notaryDarkGrey">
            Suitable for those who use the car infrequently.
          </p>
          <p className="text-sm px-4 mb-4 mt-5 font-bold">
            View Details &rarr;
          </p>
        </div>
      </div>

      <div className="container shadow-xl flex items-start border-2 mt-4 rounded-xl border-notaryGrey flex-col p-4 ">
        <h1 className="text-xl mx-auto font-bold">Calculate your Costs for RON!</h1>
        <div className="flex flex-row gap-8 px-4 mt-16">
          <h2 className="font-semibold text-xl">No. of Extra Signatures</h2>
          <input className="border-2 rounded-lg border-notaryGrey" type='text' />
        </div>
        <div className="flex flex-row gap-8 px-4 mt-8">
          <h2 className="font-semibold text-xl">How Many Files will you be uploading in the session</h2>
          <input className="border-2 rounded-lg border-notaryGrey" type='text' />
        </div>
        <div className="flex flex-row gap-8 px-4 mt-8">
          <h2 className="font-semibold text-xl">Number of Signers</h2>
          <input className="border-2 rounded-lg border-notaryGrey" type='text' />
        </div>
        <div className="flex flex-row gap-8 px-4 mt-8">
          <h2 className="font-semibold text-xl">Do you Need Witness?</h2>
          <input className="border-2 rounded-lg border-notaryGrey" type='text' />
        </div>
        <h1 className="text-xl mt-12 text-notaryDarkGrey ml-64 font-bold px-4">Your Approximate Quote : 59$</h1>
      </div>
    </div>
  );
};

export default Step1;
