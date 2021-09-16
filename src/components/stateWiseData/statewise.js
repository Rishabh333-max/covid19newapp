import React, { useEffect, useState } from "react"
import "./statewise.css"

const Statewise=()=>{
  const [data,setData]=useState([]);

const getCovidData= async ()=>{
    const res=await fetch("https://data.covid19india.org/data.json");
    const actualData=await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
}
    useEffect(()=>{
    getCovidData();
    },[]);

  return(
    <>
<div className="container-fluid mt-5">
  <div className="main-heading">
<h1 className="center"><span className="size">INDIA </span><span className="size2">COVID-19</span><span className="size3"> Dashboard</span></h1>
  </div>
  <div className="table-responsive">
    <table className="table table-hover">
      <thead className="thead-dark">
    <tr>
      <th>State</th>
      <th>Confirmed</th>
      <th>recovered</th>
      <th>deaths</th>
      <th>active</th>
      <th>lastupdatedtime</th>
    </tr>
      </thead>
      <tbody>
        {data.map((curElem,index)=>{
    return(
      <tr key={index}>
      <th>{curElem.state}</th>
      <td>{curElem.confirmed}</td>
      <td>{curElem.recovered}</td>
      <td>{curElem.deaths}</td>
      <td>{curElem.active}</td>
      <td>{curElem.lastupdatedtime}</td>
    </tr>
    )
        })}
     
      </tbody>
    </table>
  </div>
</div>
    </>
  )
}
export default Statewise;