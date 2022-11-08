'use strict'
const card =document.querySelector(".card-data");
const btn=document.querySelector(".icon");


const renderAdvice= function(advice,id){
    card.innerHTML="";

    const cardData=`

    

    <span class="advice_number">advice #${id}</span>
    <p class="advice-txt">${advice}</p>
   
    `;

card.insertAdjacentHTML("afterbegin",cardData);
}



const getAdvice = async function(){
const response =await fetch("https://api.adviceslip.com/advice");

const data =await response.json();
renderAdvice(data.slip.advice, data.slip.id);

}



getAdvice();

btn.addEventListener("click",getAdvice);