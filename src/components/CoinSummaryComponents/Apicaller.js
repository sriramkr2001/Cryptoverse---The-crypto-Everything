import React from 'react'
import { useState,useEffect,useContext } from 'react'
import CoinGecko from '../../Apis/CoinGecko'




 export const useApicaller=(url)=>{
 
    const [API,setAPI]=useState([])
    useEffect(() => {
        console.log("hello")
              const fetchData = async () => {

            const response = await CoinGecko.get("/coins/markets/", {
              params: {
                vs_currency: "usd",
                ids:"",
                per_page:300
              },
            });
   return response;
          };
      
(async ()=>{
  try{
const x = await fetchData()

setAPI(x.data)

  } catch(err){
console.log("error")
  }
})();


    }, [url])

return API;
    
}
     




// export default  y
        










