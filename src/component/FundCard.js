import React from 'react';


const FundCard = ({typeOf, id, Rs, name, LicenseNoOfHolder, HoldersAddress, WhatAboutUniqueInProduct, image, handleClick}) => {
  return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer" onClick={handleClick}>
    <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>
    <div className="flex flex-col p-4">
    <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[14px] text-[#808191]">Product Id: { Number(id._hex)}</p>
    <div className="block">
        <h3 className="font-epilogue font-medium text-[14px] text-white text-left leading-[26px] truncate">{name}</h3>
        <h4 className="font-epilogue font-medium text-[14px] text-[#b2b3bd] leading-[22px]">Rs: {Number(Rs._hex)}</h4>
        <p className="mt-[5px] font-epilogue font-normal text-[#b2b3bd] text-left leading-[16px] truncate">{typeOf}</p>
        <p className="mt-[5px] font-epilogue font-normal text-[12px] text-[#808191] text-left leading-[12px] truncate">{WhatAboutUniqueInProduct}</p>
      </div>
      <p className="mt-[5px] flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">owner: {HoldersAddress}</span></p>
    </div>
    </div>
  )
}

export default FundCard