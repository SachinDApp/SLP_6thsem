import React from 'react';

import { useLocation } from 'react-router-dom';


const ProductDetails = () => {
    const { state } = useLocation();

  return (
    <div>
        <div className="w-full flex  flex-col mt-10 gap-[30px]">
          <div className="flex-1 flex-col">
            <img src={state.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl"/>
          </div>
        </div>
        <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h3 className="font-epilogue font-semibold text-[18px] text-white ">Owner: <span className="font-epilogue font-semibold text-[18px] text-[#b2b3bd]">{state.HoldersAddress}</span></h3>
          </div>
          <div>
            <h3 className="font-epilogue font-semibold text-[18px] text-white ">Owner's License No.- <span className="font-epilogue font-semibold text-[18px] text-[#b2b3bd]">{Number(state.LicenseNoOfHolder._hex)}</span></h3>
          </div>
          <div>
            <h3 className="font-epilogue font-semibold text-[18px] text-white ">Product Id: {Number(state.id._hex)}</h3>
          </div>
          <div className="flex flex-col mt-10px">
            <h4 className="font-epilogue font-semibold text-[18px] text-white ">Name: {state.name}</h4>
            <h4 className="font-epilogue font-semibold text-[18px] text-white ">Rs: {Number(state.Rs._hex)}</h4>
            <h4 className="font-epilogue font-semibold text-[18px] text-white ">type: {state.typeOf}</h4>
              
        </div>
        <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">About the Product</h4>

              <div className="mt-[10px]">
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{state.WhatAboutUniqueInProduct}</p>
              </div>
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default ProductDetails