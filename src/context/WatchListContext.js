

import React from 'react'
import { useState } from 'react'


import { createContext } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props)=>{

// const [watchList,setWatchList]=useState(["bitcoin","ethereum","ripple","polkadot"])
const [watchList,setWatchList]=useState(()=>{
    
    
       if(localStorage.getItem('watchList'))
       {
           let arr=localStorage.getItem('watchList')
           let arr1=JSON.parse(arr)
           return arr1
    //   return  []
       }

    else
    return []
    
  
    })


const addCoin=(coin)=>{
if(watchList.indexOf(coin)==-1)
{   let tempArray=[...watchList]
    tempArray.push(coin)
    localStorage.setItem('watchList',JSON.stringify(tempArray))
    setWatchList(tempArray)
}
}
const deleteCoin=(coin)=>{
 
   let tempArray= watchList.filter((el)=>{

    return el !==coin
  
    })
  localStorage.setItem('watchList',JSON.stringify(tempArray))  
setWatchList(tempArray)



}
return(
    <WatchListContext.Provider value={{watchList,deleteCoin,addCoin}}>
        {props.children}
    </WatchListContext.Provider>
)

}








