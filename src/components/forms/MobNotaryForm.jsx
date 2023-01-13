import React, {useState, useEffect} from 'react';
import { useData } from '../../contexts/DataContext';

const MobNotaryForm = () => {
  const {getCostDet} = useData();
  const costingdetails = getCostDet();
  const [quote, setQuote] = useState(costingdetails.GEN_ONLINE.baseNotarisationCost);
  const [signatures, SetSignatures] = useState(0);
  const [extraWitness, setExtraWitness] = useState(0); 
  const [extraSigners, setExtraSigners] = useState(0);

  useEffect(() => {
    const baseCost = costingdetails.GEN_ONLINE.baseNotarisationCost
    const extraSignCost = costingdetails.GEN_ONLINE.extraSignatureCost;
    const extraWitnessCost = costingdetails.GEN_ONLINE.perWitnessCost;
    const extraSignersCost = costingdetails.GEN_ONLINE.extraSignersCost;
    setQuote(baseCost + (signatures * extraSignCost) + (extraWitness * extraWitnessCost) + (extraSigners * extraSignersCost));
  },[signatures, extraWitness, extraSigners])

  return (
    <div className="container shadow-xl flex items-start border-2 mt-4 rounded-xl border-notaryGrey flex-col p-4">
      <h1 className="text-xl mx-auto font-bold">
        Calculate your Costs for MGN!
      </h1>
      <div className="flex flex-row gap-8 px-4 mt-16">
        <h2 className="font-semibold text-xl">No. of Extra Signatures</h2>
        <input onChange={(e) => SetSignatures(e.target.value)} className="border-2 rounded-lg border-notaryGrey" min='0' type="number" />
      </div>
      <div className="flex flex-row gap-8 px-4 mt-8">
        <h2 className="font-semibold text-xl">
          How Many Files will you be uploading in the session
        </h2>
        <input className="border-2 rounded-lg border-notaryGrey" type="text" />
      </div>
      <div className="flex flex-row gap-8 px-4 mt-8">
        <h2 className="font-semibold text-xl">Number of Signers</h2>
        <input onChange={(e) => setExtraSigners(e.target.value)} min='0' className="border-2 rounded-lg border-notaryGrey" type="number" />
      </div>
      <div className="flex flex-row gap-8 px-4 mt-8">
        <h2 className="font-semibold text-xl">Do you Need Witness?</h2>
        <input onChange={(e) => setExtraWitness(e.target.value)} min='0' className="border-2 rounded-lg border-notaryGrey" type="number" />
      </div>
      <h1 className="text-xl mt-12 text-notaryDarkGrey ml-64 font-bold px-4">
        Your Approximate Quote : {quote}$
      </h1>
    </div>
  )
}

export default MobNotaryForm