import {useEffect,useState} from "react";
import DisplayProduct from "./DisplayProduct";

function ItemHolder({state}){
    const [hold,setHold]=useState([]);

    

    useEffect(()=>{
        const {contract}= state;
        async function Hold(){
            try{
                const arr=await contract.seeItemhol();
                let pros=arr.filter((value)=>{
                        return value.name!=="null";
                })
                setHold(pros);
                
            }catch(error){
                alert(error);
            }
        }
        contract && Hold();
    },[state])

    return<>
      <DisplayProduct
           title="Holder's Product"
           products={hold}
     />
    </>;
}
export default ItemHolder;