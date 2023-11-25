

let nameEl=document.querySelector(".name")
console.log(nameEl)
let name=nameEl.innerHTML;
console.log(name)

let mesajh1=`Hello ${name}`;
console.log(mesajh1)

let mesajP=document.querySelector(".mesaj")
mesajP.innerText=mesajh1//set

let metin = prompt("Bir metin girin: ");

document.write(metin);