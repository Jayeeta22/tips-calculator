const billinput=document.querySelector("#bill-input")
const peopleinput=document.querySelector("#people-input")
const tipperpersion=document.querySelector("#tip-amount")
const totalperpersion=document.querySelector("#total-amount")
const tips=document.querySelectorAll(".tips")
 billinput.addEventListener("input",billinputFunction)
 peopleinput.addEventListener("input",peopleinputFunction)
 tips.forEach(function(value){
    value.addEventListener("click",handelclick)
 })
billinput.value=0.0
peopleinput.value=1
tipperpersion.innerHTML="$"+0.00
totalperpersion.innerHTML="$"+0.00

let billvalue=0.0
let peoplevalue=1
function billinputFunction(){
    billvalue=billinput.value
    console.log(billvalue)
}

function peopleinputFunction(){
    peoplevalue =peopleinput.value
    console.log(peoplevalue)
}