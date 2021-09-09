
import React  from 'react'
import { Header } from '../components/Header'

import {AddCoins} from '../components/CoinSummaryComponents/AddCoins'
import { CoinList } from '../components/CoinSummaryComponents/CoinList'
export const CoinSummaryPage=()=>{




return(
    <>
       <h1 style={{color:"white"}}>Crypto-WatchList</h1>
     <AddCoins/>
     <CoinList/>

    </>
)




}