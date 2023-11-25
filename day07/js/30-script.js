function hesapla(){
    let maasEl=document.querySelector("#inpMaas")
    let resultEl=document.querySelector("#result")
    let statusEl=document.querySelector("input[name='durum']:checked")
    let maas= Number( maasEl.value)
    let status=statusEl.value
  maas=status==="emekli" ? maas*=0.9 : maas*=0.95;
resultEl.innerHTML=`Kesintiden sonraki maas: ${maas.toFixed(2)}'Tldir`
maasEl.value=""
}

//foncsion içinde
function checkAge(age) {
    return age >= 18 ? "Evet, oy kullanabilir." : "Hayır, oy kullanamaz.";
  }
  
  console.log(checkAge(20)); // "Evet, oy kullanabilir."
  console.log(checkAge(15)); // "Hayır, oy kullanamaz."


  //basit kullanımı
  const age = 18;
const canVote = age >= 18 ? "Evet, oy kullanabilir." : "Hayır, oy kullanamaz.";
console.log(canVote); // "Evet, oy kullanabilir."

//birden fazla koşul
const score = 75;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(`Notunuz: ${grade}`); // "Notunuz: C"