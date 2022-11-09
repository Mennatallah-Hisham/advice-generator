'use strict'
const mainContanier = document.querySelector(".main");
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

const renderError = function(msg="something went wrong"){
    mainContanier.innerHTML="";
    const card = `
    <article class="advice-card">
       <p class="error-msg">
       ${msg}
       </p>
    
      
    </article>`
    mainContanier.insertAdjacentHTML("afterbegin",card);

}


const getAdvice = async function(){
    try{
        const response =await fetch("https://api.adviceslip.com/advice");
        console.log(response.ok)
  if(!response.ok){
    throw new Error("something went wrong");
}
    const data =await response.json();
      renderAdvice(data.slip.advice, data.slip.id);

    }catch(error){
        
renderError(error.message);



    }


}



getAdvice();

btn.addEventListener("click",getAdvice);