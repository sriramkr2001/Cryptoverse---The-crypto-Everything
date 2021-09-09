import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export function Coin({ coinDetails, deleteCoin }) {
    return (
        <Link style={{ textDecoration: "none" }} to={`/coins/${coinDetails.id}`}>

            <li className=" sup-coin-label coinlist-item list-group-item list-group-item-action text-dark" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "black", width: "50vw", margin: "auto", marginBottom: "5px" }} >

                <img className="coinlist-image" src={coinDetails.image} alt="" />
                <span style={{ textDecoration: "none" }}><b>$ {coinDetails.current_price}</b></span>

                <span className={coinDetails.price_change_percentage_24h < 0 ? "text-danger mr-2" : "text-success mr-2"} >
                    <i className={coinDetails.price_change_percentage_24h < 0 ? "fas fa-sort-down align-middle mr-1" : "fas fa-sort-up align-middle mr-1"} style={{ marginRight: "3px" }}></i>

                    {coinDetails.price_change_percentage_24h}%
                    <span className="text-danger" ><i onClick={(e) => {

                        e.preventDefault();
                        deleteCoin(coinDetails.id)

                    }} style={{ marginLeft: "7px", }} className="fas fa-trash-alt"></i></span>
                </span>



            </li>



        </Link>
    )
}



