import CustomButton from "./CustomButton";

function ChangeOwner({state}){


    async function handleSubmit(event){
        event.preventDefault();
        const {contract}=state;
       const id= document.querySelector("#x").value;
       const lic= document.querySelector("#lic").value;
       const add= document.querySelector("#addr").value;
        try{
            const transaction=await contract.ChangeOwnere(id,lic,add);
            await transaction.wait()
            alert("changed successfuly");
            window.location.reload();  
        }catch(error){
            alert(error);
        }
       

    }
    return<>
         <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
       <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Change OwnerShip Of product</h1>
      </div>
       
      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">

      <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">Enter Id</span>
       <input 
          required
          
          id="x"
          type="Number"
          step="1"
          placeholder="Enter id of Product "
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] 
          bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] 
          sm:min-w-[300px]"
        />
       </label>
       <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">License No.</span>
       <input 
          required
          
          id="lic"
          type="Number"
          step="1"
          placeholder="Enter License Number of next Owner"
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] 
          bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] 
          sm:min-w-[300px]"
        />
       </label>
       <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">Address</span>
       <input 
          required
          
          id="addr"
          type="text"
          step="0.1"
          placeholder="Enter Buyer's Address "
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] 
          bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] 
          sm:min-w-[300px]"
        />
       </label>

       <div className="flex justify-center items-center mt-[40px] ">
          <CustomButton
             btnType="submit" 
             title="Change Owner"
             styles="bg-[#1dc071]"
          />
        </div>


            
      </form>
       </div>
    </>;
}
export default ChangeOwner;