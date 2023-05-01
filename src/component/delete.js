import CustomButton from "./CustomButton";
function Del({state}){

    async function del(event){
        event.preventDefault();
        const {contract}=state;
       
        let a= document.querySelector("#x").value;
        try{
            const transaction=await contract.delItem(a);
            await transaction.wait();
            alert("deleted successfully");
            window.location.reload(); 

        }catch(error)
        {
            alert(error);
        }


    }

    return<>
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
       <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Delete OwnerShip Of product</h1>
      </div>
       
      <form onSubmit={del} className="w-full mt-[65px] flex flex-col gap-[30px]">

      <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-white mb-[10px]">Enter Id</span>
       <input 
          required
          
          id="x"
          type="Number"
          step="1"
          placeholder="Enter id of Product to be deleted"
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] 
          bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] 
          sm:min-w-[300px]"
        />
       </label>
       <div className="flex justify-center items-center mt-[40px] ">
          <CustomButton
             btnType="submit" 
             title="Delete OwnerShip"
             styles="bg-[#1dc071]"
          />
        </div>

      </form>
      </div>

    
    </>

}

export default Del;