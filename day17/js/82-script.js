import { students } from "../data/students.js";

document.getElementById("btnPoint").addEventListener("click",()=>{
let pointEl=document.querySelectorAll("#tblStudents tbody tr td:last-child")

pointEl.forEach((point,index)=>{
    let pointText=point.innerText
    //console.log(pointText)

    if(pointText<50){
        document.querySelector(`#tblStudents tbody tr:nth-child(${index+1})`).
        classList.add("table-danger")

        //point.closest("tr").classList.add("table-danger")
    }
})

})



const loadStudents = () => {
  
    let strStudent="";
    students.forEach((student,index)=>{

    
strStudent+=` <tr>
<td>${index+1}</td>
<td>${student.name}</td>  
<td>${student.point}</td>  
</tr>`

document.querySelector("#tblStudents tbody").innerHTML=strStudent
})
}
loadStudents()
