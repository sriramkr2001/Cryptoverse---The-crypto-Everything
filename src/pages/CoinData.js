import React, { useState,useEffect } from 'react'
import "tailwindcss/tailwind.css"
const  CoinData=({detail})=>{

let x = detail ? detail.name:"Not Available"
if(detail)
{
        return(
<div className="whole-details-wrapper" style={{height:"fit-content",width:"90%",margin:"auto",marginTop:"50px",boxShadow:"0px 5px 15px #9CA3AF",paddingTop:"10px",paddingBottom:"2%",backgroundColor:"white"}}>

<h1>Details</h1>
<div className="data-wrapper" style={{marginTop:"2%"}}>
<div className="flex flex-wrap -mb-4" style={{width:"80%",margin:"auto",marginBottom:"5%"}} >
<div className="data-items w-full md:w-1/3 sm:w-1">
<b className="coin-data=heading" style={{color:"#4A5568"}}>Coin Name</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{x}</div>
</div>
<div className="data-items w-full md:w-1/3 sm:w-1">
<b className="coin-data=heading" style={{color:"#4A5568"}}>Market Cap</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.market_cap}</div>

</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 

<b className="coin-data=heading" style={{color:"#4A5568"}}>Market-Cap-Rank</b>

<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.market_cap_rank}</div>
</div>
{/* <p className="data-items">{detail.fully_diluted_valuation}</p> */}
<div className="data-items w-full md:w-1/3 sm:w-1"> 
<b className="coin-data=heading" style={{color:"#4A5568"}}>Total Volume</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.total_volume} </div>

</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 

<b className="coin-data=heading" style={{color:"#4A5568"}}>24-H High</b>

<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.high_24h}</div> 
</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 
<b className="coin-data=heading" style={{color:"#4A5568"}}>24-h Low</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.low_24h}</div> 
</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 
<b className="coin-data=heading" style={{color:"#4A5568"}}>Price Change 24-H</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.price_change_24h}</div> 
</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 
<b className="coin-data=heading" style={{color:"#4A5568"}}>Price Change Percentage 24-H</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.price_change_percentage_24h}%</div> 
</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 


<b className="coin-data=heading" style={{color:"#4A5568"}}>Market-Cap Change 24-H</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.market_cap_change_24h}</div> 
</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 
<b className="coin-data=heading" style={{color:"#4A5568"}}>Market-Cap Change Percentage  24-H</b><div></div>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.market_cap_change_percentage_24h}%</div> 
</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 
<b className="coin-data=heading" style={{color:"#4A5568"}}>Circulating Supply</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.circulating_supply}</div></div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 

<b className="coin-data=heading" style={{color:"#4A5568"}}>Total Supply</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.total_supply 
}</div></div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 


<b className="coin-data=heading" style={{color:"#4A5568"}}>All Time High</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.ath}</div> 
</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 

<b className="coin-data=heading" style={{color:"#4A5568"}}>All Time High Percentage Change</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.ath_change_percentage}% </div>

</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 

<b className="coin-data=heading" style={{color:"#4A5568"}}>All Time Low</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.atl}</div> 
</div>
<div className="data-items w-full md:w-1/3  sm:w-1"> 

<b className="coin-data=heading" style={{color:"#4A5568"}}>All Time Low Change Percentage</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.atl_change_percentage}%</div>
</div>
<div className="data-items w-full md:w-1/3 sm:w-1"> 
<b className="coin-data=heading" style={{color:"#4A5568"}}>All Time Low Date</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.atl_date}</div></div>
{/* <p className="data-items">{detail.roi}</p> */}
<div className="data-items w-full md:w-1/3 sm:w-1">

<b className="coin-data=heading" style={{color:"#4A5568"}}>Last Updated Date</b>
<div className="coin-data-values" style={{fontWeight:"bolder"}}>{detail.last_updated}</div>

</div>

</div>
</div>
 </div>
    )
    
} 
else
return(null)
    
    }

    export default CoinData