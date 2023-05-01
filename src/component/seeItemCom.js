import {useState,useEffect} from "react";
import {ethers} from "ethers";
import DisplayProduct from "./DisplayProduct";


function SeeItemCom({state}){
    
    const [com,setCom]=useState([]);
    useEffect(()=>{
        const {contract}= state;
        async function Com(){
            try{
                const array=await contract.seeItemCom();
                
                const pros=array.filter((value)=>{
                    return value.name!=="null";
                })
                setCom(pros); 
                
                
            }catch(error){
                alert(error);
            }
        }
        contract && Com();
    },[state])
    return<>
    <DisplayProduct
           title="Company's Product"
           products={com}
     />
         
    </>;
}
export default SeeItemCom;
