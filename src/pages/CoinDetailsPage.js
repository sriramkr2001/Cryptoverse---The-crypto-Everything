import React , {useState,useEffect}  from 'react'
import { useParams } from 'react-router'
import CoinGecko from '../Apis/CoinGecko'
import { Link } from 'react-router-dom'
import HistoryChart from './HistoryChart'
import CoinData from './CoinData'
import Spinner from 'react-bootstrap/Spinner';

import "tailwindcss/tailwind.css"
export const CoinDetailsPage = ()=>{
    const [coinData,setcoindata]=useState({})
    const [isLoading,setisLoading]=useState(false)


const x = useParams()
const id=`${x.id}`




const formatData = (data,parameter) => {

    let optionsTime = {  
           
        hour: "2-digit", minute: "2-digit"  
      }; 
      let optionsWeek = {
        month: "short",  
        day: "numeric"

      }

      let optionsYear={
        year: "numeric", month: "short",  
        day: "numeric"
      }

if(parameter=="day") {
     return data.map((el) => {

        let date=new Date(el[0])
    
      return {
          
        t:  date.toLocaleTimeString("en-us",optionsTime),
        y: el[1].toFixed(2),
      };
    });
  }
  else if(parameter=="week") 
  {
    return data.map((el) => {
        let date=new Date(el[0])
    
        return {
            
          t:  date.toLocaleTimeString("en-us",optionsWeek),
          y: el[1].toFixed(2),
        }
        });
  }

  else if(parameter=="year")
  {
    // let date=new Date(el.t)
    return data.map((el) => {
        let date=new Date(el[0])
    
        return {
            
          t:  date.toLocaleDateString("en-us",optionsYear),
          y: el[1].toFixed(2),
        }
        });
  }

  
}

   




useEffect(() => {
const fetchData= async  ()=>{
setisLoading(true)
const [day,week,year,details] = await Promise.all([CoinGecko.get(`/coins/${id}/market_chart/`,{
   params:{
       vs_currency:"usd",
       days:"1",
   } 
}),
CoinGecko.get(`/coins/${id}/market_chart/`,{
    params:{
        vs_currency:"usd",
        days:"7",
    } 
 }),
 CoinGecko.get(`/coins/${id}/market_chart/`,{
    params:{
        vs_currency:"usd",
        days:"365",
    } 
 }),
 CoinGecko.get(`/coins/markets/`,{
    params:{
        vs_currency:"usd",
        ids:id,
        per_page:250
    } 
 }),


]);

console.log(details.data[0])
console.log(day.data.prices)
setcoindata({
    day:formatData(day.data.prices,"day"),
    week:formatData(week.data.prices,"week"),
    year:formatData(year.data.prices,"year"),
    detail:details.data[0]
})
setisLoading(false)
}
fetchData()
}, [])



// const HistoryChart=()=>{
//     return(
//         <div style={{color:"white"}}>"Heyyyyy</div>
//     )
// }

// const CoinData=()=>{



// return(
    
//     <div style={{color:"white"}}>"Heyyyyy There !!</div>

// )


// }

const renderCoins=()=>{
return(<div >
<br />
<br />
<br />
<br />
<HistoryChart data={coinData}/>
<CoinData detail={coinData.detail}/>


</div>
)




}

if(isLoading==true)
return(
  <>    <div style={{color:"white"}}>Loding !!!!!!</div>
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
  <Spinner animation="grow" variant="dark" /></>

)
else{

return(

<div style={{height:"fit-content",width:"80vw",backgroundColor:"#F3F4F6",margin:"auto",borderRadius:"10px",minHeight:"700px",paddingBottom:"50px",marginBottom:"50px"}}>
    {renderCoins()}
</div> 

   
// #F3F4F6


)
}





}