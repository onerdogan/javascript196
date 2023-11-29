//!declaration func
function topla(a, b) {
    return a + b;
  }
  console.log(topla(3, 6));
  //!expression func
  let carpma = function (a, b) {
    return a * b;
  };
  console.log(carpma(4, 6));
  //!arrow func
  let yasHesapla = (dogumYili) => 2023 - dogumYili;
  console.log(yasHesapla(2000));
  
  
  const sum = (x, y) => {
    return x + y;
  };
  console.log(sum(5, 9));
  const uzunluguBul = (str) => {
    return str.length;
  };
  console.log(uzunluguBul("merhaba"));

  const number = 10;

const result = number < 0 ? -number : number;

const message = result < 10 ? "The number is less than 10." : "The number is greater than or equal to 10.";

console.log(message);


  
  let maas=parseInt(prompt("maaşınızı girirniz "));
  
 console.log(maas)
  
  let ikinciBasamak=0;
  let üçüncüBasamak=0;
  const promosyonHesapla=()=> {
    let ilkBasamak=0;
    ilkBasamak=maas>5000 ? "promosyon 5000":"promosyon 3000"
   // ikinciBasamak=maas>10000 ? "promosyon 10000":"promosyon 5000"
   // üçüncüBasamak=maas>20000 ? "promosyon 20000":"promosyon 10000"
return ilkBasamak
  }
promosyonHesapla()
  
