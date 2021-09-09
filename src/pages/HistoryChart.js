import React, { useState,useEffect,useRef } from 'react'
import {Chart, registerables} from 'chart.js';
import {CategoryScale} from 'chart.js'; 
import { Filler } from 'chart.js'
import { historyOptions } from './historyOptions';
import {Bar,Line} from 'react-chartjs-2'

import "tailwindcss/tailwind.css"
Chart.register(...registerables);


    const HistoryChart = ({ data }) => {
        const chartRef = useRef();
        const { day, week, year, detail } = data;
        const [timeFormat, setTimeFormat] = useState("24h");
      const getLabels=(timeformat)=>{
        // let optionsTime = {  
           
        //     hour: "2-digit", minute: "2-digit"  
        //   }; 
        //   let optionsWeek = {
        //     month: "short",  
        //     day: "numeric"

        //   }

        //   let optionsYear={
        //     year: "numeric", month: "short",  
        //     day: "numeric"
        //   }
      switch (timeFormat) {
                   case "24h":
                       {
                        return day.map(elm=>{
                       
                            // let date=new Date(elm.t)
                            return elm.t}
                            ) 
                       }

                       case "7d":
                           {
                            return week.map(elm=>{
                       
                                // let date=new Date(elm.t)
                                return elm.t}
                                )
                           }

                           case "1y":
                               {
                                return year.map(elm=>{
                       
                                    // let date=new Date(elm.t)
                                    return elm.t}
                                    )
                               }
              default:
                  {
                      return day.map(elm=>{
                       
                          let date=new Date(elm.t)
                          return elm.t}
                          )
                  }








      }


      }
        const determineTimeFormat = () => {
          switch (timeFormat) {
            case "24h":

             {
                 return day.map(elm=>elm.y)
             }
            case "7d":
                return week.map(elm=>elm.y)
            case "1y":
                return year.map(elm=>elm.y)
            default:
                return day.map(elm=>elm.y)
          }
        };
        const Data = (canvas) => {
            const ctx = canvas.getContext("2d");
            const gradient = ctx.createLinearGradient(0, 0, 0, '250');
            const gradient1 = ctx.createLinearGradient(0, 0, 0, '300');
            // gradient.addColorStop(0, '#1FFF0F');   
            // gradient.addColorStop(0, 'rgb(52,228,83');   
            gradient.addColorStop(0, '#22dc00');   
            gradient1.addColorStop(0, 'rgb(52,228,83');   
            // gradient.addColorStop(1, 'rgba(250,174,50,0)');
            gradient.addColorStop(1, 'white');
            gradient1.addColorStop(1, 'white');
    
        // let options = {  
           
        //   hour: "2-digit", minute: "2-digit"  
        // }; 
            return {

              
                labels: getLabels(timeFormat),
             
                datasets: [
                    {   
                      label:`${detail.id} price`,
                      fill:'start',
                        backgroundColor : 'rgba(25 ,255 ,25, .6)', // Put the gradient here as a fill color
                        // borderColor : "#ff6c23",
                        borderWidth: 2,
                        pointColor : "#fff",
                        // pointStrokeColor : "#ff6c23",
                        // pointHighlightFill: "#fff",
                        // pointHighlightStroke: "#ff6c23",
                        data : determineTimeFormat()
                    }, 
            
                ]
            }
        }
      
        var options = {
            responsive: true,
            maintainAspectRatio:false,
            // datasetStrokeWidth : 3,
            // pointDotStrokeWidth : 4,
                      elements: {
                          point:{
                              radius: 0
                          },
                        },
                        mouseLine: {
                          color: "#32d296"
                        },
                        //   tooltips: {
                        //     mode: 'index',
                        //     intersect: false,
                        //   },
                        //  hover: {
                        //     mode: 'nearest',
                        //     intersect: true
                        //   },
                          scales: {
                            xAxes: [{
                              display: true,
                              scaleLabel: {
                                display: true,
                                labelString: 'Month'
                              }
                            }],
                            yAxes: [{
                              stacked: true,
                        
                              display: true,
                              scaleLabel: {
                                display: true,
                              },
                            }]
                          },
                        plugins: {
                         
                          legend: {
                          display: true
                          },
                          tooltip: {
                          mode: 'index',
                          intersect: false
                          },
           
               hover: {
                      mode: 'nearest',
                      intersect: false
                      },
         
                          
          
            scaleLabel : "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>"
                    }
        };
      
        const divStyle = {
            width: '100px',
            height: '100px'
        };
        useEffect(() => {
        //   if (chartRef && chartRef.current && detail) {
        
        //     const chartInstance = new Chart(chartRef.current, {
        //       type: "line",
        //       data: {
        //         datasets: [
        //           {
        //             label: `${detail.name} price`,
        //             data: determineTimeFormat(),
        //             backgroundColor: "rgba(174, 305, 194, 0.5)",
        //             borderColor: "rgba(174, 305, 194, 0.4",
        //             pointRadius: 0,
        //           },
        //         ],
        //       },
        //       options: {
        //         ...historyOptions,
        //       },
        //     });
        //   }





        });
      
        const renderPrice = () => {

          
          if (detail) {
  let s = detail.id
        let s1=s[0].toUpperCase()+s.slice(1)

            return (
            <>
              <img src={detail.image} style={{margin:"auto"}} height="50px"alt="" />
                <b style={{fontSize:"30px",display:"block"}} >{detail.name}</b>
                <p style={{fontSize:"20px"}}><b>${detail.current_price.toFixed(2)}</b>  </p>
                <p  style={{fontSize:"20px"}}
                  className={
                    detail.price_change_24h < 0
                      ? "text-danger my-0"
                      : "text-success my-0"
                  }
                >
     
                <b style={{display:"block" ,marginTop:"-10px"}}>{detail.price_change_percentage_24h.toFixed(2)}%   <i className={detail.price_change_percentage_24h < 0 ? "fas fa-sort-down align-middle mr-1" : "fas fa-sort-up align-middle mr-1"} style={{ marginRight: "3px",marginTop:"-13px" }}></i> </b>
               
           
                </p>
            </>
            );
          }
        };
        return (
          <div style={{width:"90%",margin:"auto",boxShadow:"0px 5px 15px  #9CA3AF"}} className="bg-white rounded p-4" >
          
            <div style={{}}>{renderPrice()}</div>
            <div style={{width:"100%"}}>
            <Line 
 style={{backgroundColor:"white",height:"300px"}}
className="w-16 md: w-32 lg:w-48"
                data={Data} 
                options={options}
            />
            </div>
      
            <div className="chart-button mt-1">
              <button style={{border:"1px solid black",fontWeight:"bold"}}
                onClick={() => setTimeFormat("24h")}
                onMouseOver={(e)=>{
                    
                    e.target.style.color="white"
                    e.target.style.backgroundColor="green"}}
                onMouseLeave={(e)=>{
                    e.target.style.color="black"
                    e.target.style.backgroundColor="white"}}
                className="btn btn-outline-secondary btn-sm"
              >
                24h
              </button>
              <button style={{border:"1px solid black",fontWeight:"bold"}}
                onClick={() => setTimeFormat("7d")}
                onMouseOver={(e)=>{
                    
                    e.target.style.color="white"
                    e.target.style.backgroundColor="green"}}
                onMouseLeave={(e)=>{
                    e.target.style.color="black"
                    e.target.style.backgroundColor="white"}}
                className="btn btn-outline-secondary btn-sm mx-1"
              >

             7d
             
              </button>
              <button style={{border:"1px solid black",fontWeight:"bold"}}
                onMouseOver={(e)=>{
                    
                    e.target.style.color="white"
                    e.target.style.backgroundColor="green"}}
                onMouseLeave={(e)=>{
                    e.target.style.color="black"
                    e.target.style.backgroundColor="white"}}
                onClick={() => setTimeFormat("1y")}
                className="btn btn-outline-secondary btn-sm"
              > 1y
               
              </button>
            </div>
          </div>
        );
      }

export default HistoryChart

// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;