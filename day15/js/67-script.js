import { countries } from "../data/countries.js";
console.log(countries)
const loadData = () => {
  let optionCountries="";
  for (let country of countries){
    optionCountries+=`<option> ${country.name.official}</option>`
  }
  let selectCountries=document.querySelector("#selectCountries").innerHTML=optionCountries
return optionCountries;


}
loadData()

