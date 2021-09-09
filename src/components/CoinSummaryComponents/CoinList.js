import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

import { useState,useEffect,useContext,useMemo } from 'react'

import CoinGecko from '../../Apis/CoinGecko'

import {useApicaller} from './Apicaller'
import { WatchListContext } from '../../context/WatchListContext'
import { Coin } from './Coin'



export function CoinList() {
let data1=useApicaller('url')
// console.log(data1)
const [coins,setCoins] = useState([])  
 const {watchList,deleteCoin} =  useContext(WatchListContext)
const [loading,setLoading]=useState(1)
useEffect(() => {
     
// //     const fetchData = async () => {
  // setLoading(0)
// //         const response = await CoinGecko.get("/coins/markets/", {
// //           params: {
// //             vs_currency: "usd",
// //             ids:watchList.join(','),
// //           },
// //         });
// //         setCoins(response.data);
// //         setLoading(1)
// //       };
// //       if(watchList.length>0)
// // fetchData()
// else setCoins([])

let xyz=[]

for(let j=0;j<data1.length;j++){
      //  console.log(data1[j].id)
  for(let i = 0;i<watchList.length;i++)
{
        if(data1[j].id==watchList[i])
        xyz.push(data1[j])
}
}
// console.log(data1)
setCoins(xyz)
}, [data1,watchList])
       
// setLoading(1)

const RenderCoins=()=>{
  if(data1.length==0)
  {
     return(
     <div style={{color:"white"}}>
<a href="https://cooltext.com"><img src="https://images.cooltext.com/5548162.png" width="358" height="107" alt="Loading..." /></a>
{/* Loading****** */}

<br />
<br/>
<Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="secondary" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="border" variant="light" />
  <Spinner animation="border" variant="dark" />
  <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
  </div>)
  }
 
// setCoins(Xyoc)
else 
{
  return (
    <>
            
          <ul className="coinlist list-group at-2">
       
          {coins.map((coin,idx)=>
          {
             {/* return(<div key={idx}>hello There !!</div>)  */}
             return(<Coin key={coin.id} coinDetails={coin} deleteCoin={deleteCoin}/>)
          })}

          </ul>
</>
)
}

}

    return (
        <div style={{backgroundColor:"black",margin:"50px",width:"fit-content",height:"fit-content",padding:"20px",paddingBottom:"2px",margin:"auto",minHeight:"100px",minWidth:"50vw"}}>
        {/* {
            coins.map((elm)=>{
                return (<div style={{position:"relative",display:"inline"}}>   <img src={elm} alt="" height="50px"/></div>)
  
            })
        } */}
          
  

          {RenderCoins()}
          {/* <RenderCoins/> */}
        </div>
    )
}


