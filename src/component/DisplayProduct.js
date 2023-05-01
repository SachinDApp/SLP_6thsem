import React from 'react';

import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';

const DisplayProduct = ({title, products}) => {
    const navigate=useNavigate();
    const handleNavigate = (product) => {
        navigate(`/product-details/${product.id}`, { state: product })
      }
  return (
    <div>
    <h1 className='font-epilogue font-semibold text-[18px] text-white text-left'>{title} ({products.length})</h1>

    <div className="flex flex-wrap mt-[20px] gap-[26px]">


    { products.length === 0 && (
      <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
        No product in Stoke yet.
      </p>
    )}

    { products.length > 0 && products.map((product) => <FundCard 
      key={product.id}
      {...product}
      handleClick={() => handleNavigate(product)}
    />)}
  </div>
</div>
  )
}

export default DisplayProduct