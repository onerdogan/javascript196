// import {countries} from "../data/countries.js";

// let timer=null;

// const filteredData = (inputValue) => {
//   if(!inputValue) return [];
//   let filtrelenmisData=  countries.filter((country)=>
//     country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
//     console.log(filtrelenmisData)
//     return filtrelenmisData;
// }


// const setOutPut = (items) => {
//   let outPutList=document.getElementById("output");
//   outPutList.innerHTML="";
  
//   items.forEach((item) => {
//     let liEl=document.createElement("li")
//     liEl.innerText=items.name.common;
//     outPutList.appendChild(liEl)

//   });
// }
// document.getElementById("inputSearch").addEventListener("input",(e)=>{

//     if(timer) clearTimeout(timer)
//  timer=setTimeout(()=>{
//     let dataTimeOut=filteredData(e.target.value)
//     setOutPut(dataTimeOut)
//     console.log(dataTimeOut)
// },2000)
// })

import { countries } from "../data/countries.js";
let timer=null;
const filteredData = (val) => { 
    if(!val) return [];
 let filtrelenmisData= countries.filter((country)=>
country.name.common.toLowerCase().includes(val.toLowerCase()))
  console.log(filtrelenmisData)
    return filtrelenmisData;
 }
const setList = (items) => { 
    let listEl=document.getElementById("output");
    listEl.innerHTML="";
    items.forEach((item) => {
     let liEl=   document.createElement("li")
     liEl.innerText=item.name.common;
     listEl.appendChild(liEl)
        
    });
 }
document.getElementById("searchInput").addEventListener("input",(e)=>{
if(timer) clearTimeout(timer)
 timer=setTimeout(()=>{
 let fd= filteredData(e.target.value)
 setList(fd)
},1000)
})

