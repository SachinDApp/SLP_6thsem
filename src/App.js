import Buy from "./component/buy";
import { BrowserRouter as Router,Route, Link, Switch,Routes } from "react-router-dom";
import ChangeOwner from "./component/changeOwner";
import Check from "./component/check";
import ItemHolder from "./component/itemHolder";
import SeeItemCom from "./component/seeItemCom";
import Del from "./component/delete";

import ProductDetails from "./component/ProductDetails";

import './App.css';
import{useEffect,useState} from "react";
import Company from "./component/company";



const {ethers}=require("ethers");

function App() {

  const [state,setState]= useState({provider:null,
     signer:null,
     contract:null})
  const[account,setAccount]=useState("none");

  useEffect(() => {
    const connectWallet = async () => {
      
      
      const contractAddress = "0xb9667ffc7cd8721388e231ed86678b49f4c7c7d7";// deployed by remix ide contract on sepolia
      const contractABI = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_licence",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "buy",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "licence",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "s",
              "type": "address"
            }
          ],
          "name": "ChangeOwnere",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "delItem",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_type",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_rs",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "About",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "image",
              "type": "string"
            }
          ],
          "name": "makeProd",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "check",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "typeOf",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "Rs",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "LicenseNoOfHolder",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "HoldersAddress",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "WhatAboutUniqueInProduct",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "image",
                  "type": "string"
                }
              ],
              "internalType": "struct OrigProduct.product[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "seeItemCom",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "typeOf",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "Rs",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "LicenseNoOfHolder",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "HoldersAddress",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "WhatAboutUniqueInProduct",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "image",
                  "type": "string"
                }
              ],
              "internalType": "struct OrigProduct.product[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "seeItemhol",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "typeOf",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "Rs",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "LicenseNoOfHolder",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "HoldersAddress",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "WhatAboutUniqueInProduct",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "image",
                  "type": "string"
                }
              ],
              "internalType": "struct OrigProduct.product[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];
      
      try {
        const { ethereum } = window;
        

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts"
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
            
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          console.log(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
   
  
  
  return (
    <>
    <div className="relative sm:-8 p-4 
    bg-[#13131a] min-h-screen flex]">
    
    <div className="hi">
        <nav className="rounded-[10px]">
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>
        
          <li>
             <Link to="/company">Company</Link>
          </li>

           <li>
               <Link to="/buy">Sell Product</Link>
          </li>
          
          
          <li>
          <Link to="/changeOwner">Change Owner</Link>
          </li>
          
          
           <li>
          <Link to="/check">Check Ownership</Link>
          </li>
         
            <li>
             <Link to="/itemHolder">Holder's product</Link>
          </li>
         
           <li>
            <Link to="/seeitemCom">Company's product</Link>
          </li>
          
          <li>
            <Link to="/del">Delete Ownership</Link>
          </li>
        
          </ul>
        </nav>
        </div>
        
        
       
      <Routes>
          
          <Route path="/company" element={<Company state={state} />}></Route>
          <Route path="/buy" element={<Buy state={state} />}></Route>
          <Route path="/changeOwner" element={<ChangeOwner state={state} />}></Route>
          <Route path="/check" element={<Check state={state} />}></Route>
          <Route path="/itemHolder" element={<ItemHolder state={state}/>}></Route>
          <Route path="/seeitemCom" element={<SeeItemCom state={state} />}></Route>
          <Route path="/del" element={<Del state={state} />}></Route>
          <Route path="/product-details/:id" element={<ProductDetails/>}/>

      </Routes>
      
       
       
    
    
    <div className="mt-[20px]">
      <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-white">Connected Account:{account}</p>
      
    </div>
      </div>
      
      </>
  );
}

export default App;
