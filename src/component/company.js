import CustomButton from "./CustomButton";

function Company({state}){
        
   
        async function handleSubmit(event){
             event.preventDefault();
             const {contract}=state;
             const type=document.querySelector("#rom").value;
             const Rs=document.querySelector("#rs").value;
             const name=document.querySelector("#name").value;
             
             const uniq=document.querySelector("#unique").value;
             const img=document.querySelector("#img").value;
             

            try{
            const transaction= await contract.makeProd(type,Rs,name,uniq,img);
            await transaction.wait();
            alert("successfully made");
             window.location.reload();
            
            }catch(error){
                alert(error);
            }
             
             
         }
    return<>
        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Enter Product</h1>
      </div>
       
       <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        
       <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-white mb-[10px]">Type Of Product</span>
       <input 
          required
          
          id="rom"
          type="text"
          step="0.1"
          placeholder="Enter Type of Product"
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] 
          bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] 
          sm:min-w-[300px]"
        />
       </label>

       <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-white mb-[10px]">Name Of Product</span>
       <input 
          required
          
          id="name"
          type="text"
          step="0.1"
          placeholder="Enter Name of Product"
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] 
          bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] 
          sm:min-w-[300px]"
        />
       </label>

       <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-white mb-[10px]">Rs</span>
       <input 
          required
          
          id="rs"
          type="Number"
          step="0.1"
          placeholder="Enter Rs of Product"
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] 
          bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] 
          sm:min-w-[300px]"
        />
       </label>

       
       

       <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-white mb-[10px]">About the product</span>
       <textarea 
          required
          id="unique"
          rows={10}
          placeholder="About the product"
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent 
          font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
       </label>

       <label className="flex-1 w-full flex flex-col">
       <span className="font-epilogue font-medium text-[14px] leading-[22px] text-white mb-[10px]">Product Image</span>
       <input 
          required
          id="img"
          type="url"
          placeholder="Enter URL of Image"
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent 
          font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
       </label>

         

       
        <div className="flex justify-center items-center mt-[40px] ">
          <CustomButton
             btnType="submit" 
             title="Make"
             styles="bg-[#1dc071]"
          />
        </div>

       </form>

    </div>
    </>;
}
export default Company;