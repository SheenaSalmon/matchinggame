const animals={"cat":"img/Cat.png","dog":"img/dog.png","pig":"img/pig.png"};

let matchPlace=document.getElementById('matchplace');
let countClick=0;
let card1Div;
let card2Div;
let card1;
let card2;

function testCards()
{
    if (card1==card2)
    { 
        console.log("true");
        
        console.log(card1Div);
        console.log(card2Div);
       return true;
    }
    else{
        console.log("false");
        
        console.log(card1Div);
        console.log(card2Div);

        return false;
    }
}



function cardClicked(c)
{
    
   c.classList.add("no-click");
   c.classList.toggle("flip");
 
    console.log(c); 
    countClick++;
    console.log(countClick);
   
    if (countClick==1)
    {
        card1Div=c;
        card1=c.firstElementChild.getAttribute('name');
        console.log(card1)
    }
    else if (countClick==2)
     {
         card2Div=c;
         card2=c.firstElementChild.getAttribute("name");
         if (testCards())
         {
             countClick=0;
          
         }
         else{
             countClick=0;
             setTimeout(()=>                
            { card2Div.classList.remove("flip");
             console.log(card2Div);
             card2Div.classList.remove("no-click");
             card1Div.classList.remove("flip");
             console.log(card1Div);
             card1Div.classList.remove("no-click");},1000
             )                
         }
     }      

}



for( const [key, value] of Object.entries(animals)){
    
let newCardContainer =document.createElement("div");
let newCard =document.createElement("div");
let backCard=document.createElement("div");
backCard.classList.add("back-card");
matchPlace.appendChild(newCardContainer);  
newCardContainer.appendChild(newCard);
newCardContainer.appendChild(backCard);
newCardContainer.classList.add("card-container");
newCard.classList.add("card");



let image=document.createElement('img');
image.src=value;
image.classList.add("card-img");

newCard.appendChild(image);
newCard.setAttribute('name',key);



newCardContainer.addEventListener("click", function(){

    cardClicked(this);
   })
 


    
}





for( const [key, value] of Object.entries(animals)){
    
    let newCardContainer =document.createElement("div");
    let newCard =document.createElement("div");
    matchPlace.appendChild(newCardContainer);  
    newCardContainer.appendChild(newCard);
    let backCard=document.createElement("div");
    backCard.classList.add("back-card");
    newCardContainer.classList.add("card-container");
    newCardContainer.appendChild(backCard);
    newCard.classList.add("card");
    newCard.setAttribute('name',key);    
    
   newCard.innerHTML=`<span class="cardText"> ${key}</span>`;
   newCardContainer.addEventListener("click", function(){

    cardClicked(this);
   })
    
        
    }

  