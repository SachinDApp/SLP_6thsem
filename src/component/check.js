import { useState } from "react";
import CustomButton from "./CustomButton";
import DisplayProduct from "./DisplayProduct";

function Check({state}){
    const [alfa,setAlfa]= useState([]);
    async function check(e){
        e.preventDefault();
        const {contract}=state;

           const a= document.querySelector("#ch").value;
           try{
           const x=await contract.check(a);
           
           setAlfa(x);

           
           }catch(error){
            alert(error);
           }

    }
    return<>
<div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
       <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Check OwnerShip Of product</h1>
      </div>
       
      <form onSubmit={check} className="w-full mt-[65px] flex flex-col gap-[30px]">

      <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-white mb-[10px]">Enter Id</span>
       <input 
          required
          
          id="ch"
          type="Number"
          step="1"
          placeholder="Enter id of Product to be checked"
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] 
          bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] 
          sm:min-w-[300px]"
        />
       </label>
       <div className="flex justify-center items-center mt-[40px] ">
          <CustomButton
             btnType="submit" 
             title="Check Ownership"
             styles="bg-[#1dc071]"
          />
        </div>

      </form>
      </div>
      <div>
      {alfa.length>0 && <DisplayProduct
           title="Check owner"
           products={alfa}
     />}
      </div>

        
    </>;
}
export default Check;