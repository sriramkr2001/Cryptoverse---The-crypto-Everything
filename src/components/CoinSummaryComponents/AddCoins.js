import React from 'react'
import CoinList from './CoinList'
import  { useState,useEffect } from 'react'
import $ from 'jquery'
import { useContext } from 'react';
import { WatchListContext } from '../../context/WatchListContext';
const jQuery = require('jquery');
window.jQuery = jQuery;
import ('bootstrap-select/dist/css/bootstrap-select.min.css');

require('bootstrap-select');


export function Searchyy(array){
    let array1=["null",...array]
  
const {watchList,addCoin}=useContext(WatchListContext)
    useEffect(() => {



           jQuery('.search_select_box select').selectpicker();
        
       
    },)
    console.log("sup")

    return(  
                          
        <div class="search_select_box">
 {/* onChange={(e)=>{addCoin(`${document.getElementById("Hey").value}`)}} */}
                {/* <label style={{color:"white"}}>Select</label> */}
                <select  class=" Hello w-40" id="Hey" data-live-search="true">
                {/* <option value={"null"}>{"null"}</option> */}
             {   
               

                 array1.map((elm,idx)=>
                 {   
                              if(idx==0)
                              return(       <option id="Heyyyy" value={elm}>{elm}</option>)
                              else 
                        return (
                         <option  value={elm}>{elm}</option>
                     )
         
                  
                 })
             }
                </select>

         </div>
   

    )
}

export  function AddCoins() {
    const {watchList,addCoin}=useContext(WatchListContext)
   let array=["bitcoin",
       "ethereum",
   "cardano",
   "binancecoin",
   "tether",
   "ripple",
   "dogecoin",
   "usd-coin",
   "polkadot",
   "solana",
   "uniswap",
   "binance-usd",
   "bitcoin-cash",
   "terra-luna",
   "chainlink",
   "litecoin",
   "matic-network",
   "wrapped-bitcoin",
   "internet-computer",
   "avalanche-2",
   "stellar",
   "vechain",
   "ethereum-classic",
   "filecoin",
   "theta-token",
   "tron",
   "dai",
   "okb",
   "monero",
   "cosmos",
   "pancakeswap-token",
   "compound-ether",
   "ftx-token",
   "aave",
   "eos",
   "compound-usd-coin",
   "the-graph",
   "cdai",
   "klay-token",
   "axie-infinity",
   "neo",
   "crypto-com-chain",
   "shiba-inu",
   "algorand",
   "tezos",
   "maker",
   "staked-ether",
   "bitcoin-cash-sv",
   "amp-token",
   "iota",
   "leo-token",
   "bittorrent-2",
   "thorchain",
   "elrond-erd-2",
   "kusama",
   "quant-network",
   "dash",
   "celsius-degree-token",
   "hedera-hashgraph",
   "waves",
   "terrausd",
   "compound-governance-token",
   "sushi",
   "huobi-token",
   "near",
   "decred",
   "havven",
   "helium",
   "chiliz",
   "huobi-btc",
   "xdce-crowd-sale",
   "holotoken",
   "nem",
   "zcash",
   "enjincoin",
   "theta-fuel",
   "blockstack",
   "bitcoin-cash-abc-2",
   "true-usd",
   "zilliqa",
   "yearn-finance",
   "telcoin",
   "flow",
   "qtum",
   "ravencoin",
   "fantom",
   "basic-attention-token",
   "bitcoin-gold",
   "coin98",
   "safemoon",
   "decentraland",
   "arweave",
   "harmony",
   "audius",
   "nexo",
   "siacoin",
   "constellation-labs",
   "zencash",
   "digibyte",
   "kucoin-shares",
   "mdex",
   "ethos",
   "bancor",
   "xsushi",
   "iostoken",
   "paxos-standard",
   "icon",
   "ontology",
   "link",
   "0x",
   "swissborg",
   "omisego",
   "curve-dao-token",
   "nano",
   "nxm",
   "uma",
   "perpetual-protocol",
   "reserve-rights-token",
   "swipe",
   "pirate-chain",
   "compound-usdt",
   "ankr",
   "bitclout",
   "ergo",
   "gatechain-token",
   "titanswap",
   "iotex",
   "wazirx",
   "yield-guild-games",
   "renbtc",
   "kava",
   "ecomi",
   "ultra",
   "dent",
   "liquity-usd",
   "lisk",
   "mina-protocol",
   "loopring",
   "the-sandbox",
   "1inch",
   "republic-protocol",
   "livepeer",
   "wax",
   "bitcoin-diamond",
   "energy-web-token",
   "neutrino",
   "alpha-finance",
   "bakerytoken",
   "osmosis",
   "pundi-x-2",
   "wink",
   "gnosis",
   "husd",
   "verge",
   "golem",
   "vethor-token",
   "fei-protocol",
   "unibright",
   "nervos-network",
   "medibloc",
   "raydium",
   "pundi-x",
   "bifrost",
   "skale",
   "celo",
   "olympus",
   "tribe-2",
   "chia",
   "ocean-protocol",
   "status",
   "injective-protocol",
   "fetch-ai",
   "my-neighbor-alice",
   "alien-worlds",
   "venus",
   "origin-protocol",
   "funfair",
   "iexec-rlc",
   "anchor-protocol",
   "serum",
   "oxygen",
   "pax-gold",
   "tokamak-network",
   "asd",
   "nusd",
   "trust-wallet-token",
   "cartesi",
   "band-protocol",
   "prometeus",
   "frax",
   "mirror-protocol",
   "seth",
   "woo-network",
   "polymath",
   "compound-uniswap",
   "persistence",
   "superrare",
   "dodo",
   "balancer",
   "nkn",
   "electroneum",
   "dawn-protocol",
   "ardor",
   "reef-finance",
   "illuvium",
   "rocket-pool",
   "storm",
   "tomochain",
   "thorstarter",
   "klever",
   "eden",
   "hbtc-token",
   "orion-protocol",
   "mango-markets",
   "superfarm",
   "numeraire",
   "ton-crystal",
   "alchemix-usd",
   "celer-network",
   "mask-network",
   "zkswap",
   "coti",
   "conflux-token",
   "orbs",
   "secret",
   "orchid-protocol",
   "truefi",
   "maidsafecoin",
   "radicle",
   "quick",
   "akash-network",
   "civic",
   "sapphire",
   "apeswap-finance",
   "lido-dao",
   "stratis",
   "keep-network",
   "steem",
   "ellipsis",
   "ark",
   "kin",
   "chromaway",
   "mobox",
   "smooth-love-potion",
   "starlink",
   "allianceblock",
   "metadium",
   "gemini-dollar",
   "kyber-network-crystal",
   "alchemy-pay"]
   const [Showhello,setShowhello]=useState(false)
    // console.log(array)
    return(
        <>  
        <div className="dropdown">

        <br/>
        <button className="btn btn-primary " 
        type="button" onClick={()=>{
            if(`${document.getElementById("Hey").value}`!="null")
            addCoin(`${document.getElementById("Hey").value}`)
            
            }}> Add Coin</button>
        <br />
        <br />
<label style={{color:"white",display:"block"}}>Select Coin</label>


        {/* <div className={Showhello? "dropdown-menu show":"dropdown-menu"}>
       
   {array.map(elm=>{
       return (
           <a href="#" className="dropdown-item">{elm}</a>
       )
   })}


 
        </div> */}

        </div>

        
{Searchyy(array)}
<br />

        



</>
      
   
    )
}
