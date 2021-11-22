const animals={"cat":"img/Cat.png","dog":"img/dog.png","pig":"img/pig.png"};

let matchPlace=document.getElementById('matchplace');
let countClick=0;
let card1Div;
let card2Div;
let card1;
let card2;

  //var elem = document.getElementById('para');

// let newCardContainer =document.createElement("div");
// let newCard =document.createElement("div");
// matchPlace.appendChild(newCardContainer);  
// newCardContainer.appendChild(newCard);
// newCardContainer.classList.add("card-container");
// newCard.classList.add("card");



// let image=document.createElement('img');
// image.src=value;

// newCard.appendChild(image);


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
    console.log(this);
    
    
    this.classList.add("no-click");
    this.classList.toggle("flip");

     console.log(this); 
     countClick++;
     console.log(countClick);
    
     if (countClick==1)
     {
         card1Div=this;
         console.log(card1Div);
         //console.log(card1);
         card1=this.firstElementChild.getAttribute('name');
        console.log(card1);
     }
     else if (countClick==2)
      {
          card2Div=this;
          card2=this.firstElementChild.getAttribute("name");
          countClick==0;
          if (testCards())
          {
              countClick=0;
             
          }
          else{
            countClick=0;

              card2Div.classList.toggle("flip");
              card2Div.classList.remove("no-click");
              card1Div.classList.toggle("flip");
              card1Div.classList.remove("no-click");
          }
      }      

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
    
       this.classList.add("no-click");
      this.classList.toggle("flip");
    
       console.log(this); 
       countClick++;
       console.log(countClick);
      
       if (countClick==1)
       {
           card1Div=this;
           card1=this.firstElementChild.getAttribute('name');
           console.log(card1)
       }
       else if (countClick==2)
        {
            card2Div=this;
            card2=this.firstElementChild.getAttribute("name");
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



   })
    
        
    }