'use strict'
const mainEl =document.querySelector(".main");
const renderAdvice= function(advice,id){

    const card=`
    <article class="advice-card">
    <span class="advice_number">advice #${id}</span>
    <p class="advice-txt">${advice}</p>
    <picture>
    <source media="(max-width:768px)" srcset="images/pattern-divider-mobile.svg"/>
    <source media="(min-width:900px)" srcset="images/pattern-divider-desktop.svg"/>
    <img class="divider"src="images/pattern-divider-mobile.svg" alt=""/>
    </picture>

    <div class="icon">
        <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
    </div>

  
</article>`;

mainEl.insertAdjacentHTML("afterbegin",card);
}
const getAdvice = async function(){
const response =await fetch("https://api.adviceslip.com/advice");

const data =await response.json();
renderAdvice(data.slip.advice, data.slip.id);

}



getAdvice();