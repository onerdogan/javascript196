let hourEl=document.getElementById("hour");
let minuteEl=document.getElementById("minutes");
let secondEl=document.getElementById("seconds");
let ampmEl=document.getElementById("am-pm");

const runClock=()=>{
console.log(new Date)

let hours=new Date().getHours()
let minutes=new Date().getMinutes()
let seconds=new Date().getSeconds()
let ampm=hours>=12 ? "PM" : "AM"
//console.log(hours)
hours=hours<10?"0"+hours:hours
minutes=minutes<10?"0"+minutes:minutes
seconds=seconds<10?"0"+seconds:seconds



hourEl.textContent=hours
minuteEl.textContent=minutes
secondEl.textContent=seconds
ampmEl.textContent=ampm



}
let timer=setInterval(()=>{
    runClock()

    },1000)
setInterval(runClock,clearTimeout(timer))
