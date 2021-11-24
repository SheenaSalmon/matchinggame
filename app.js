const animals = { "cat": "img/Cat.png", "dog": "img/dog.png", "pig": "img/pig.png" };
arrayCards = [];

let matchPlace = document.getElementById('matchplace');
let countClick = 0;
let card1Div;
let card2Div;
let card1;
let card2;
let matchesFound=0;
let playAgainButton=document.createElement("p");
playAgainButton.innerHTML='<a href="#">Play Again</a>';
playAgainButton.classList.add("play-again-btn");
matchPlace.insertAdjacentElement("afterend",playAgainButton);



function testCards() {
    if (card1 == card2) {
        console.log("true");

        console.log(card1Div);
        console.log(card2Div);
        matchesFound++;
        console.log(matchesFound);
        return true;
    }
    else {
        console.log("false");

        console.log(card1Div);
        console.log(card2Div);

        return false;
    }
}

function createAllCards() {

    for (const [key, value] of Object.entries(animals)) {

        let nameCardContainer = document.createElement("div");
        // console.log(nameCardContainer);
        let imgCardContainer = document.createElement("div");

        let nameCard = document.createElement("div");
        let imgCard = document.createElement("div");
        let backCard = document.createElement("div");
        let backCard2 = document.createElement("div");
        let image = document.createElement('img');

        nameCardContainer.classList.add("card-container");
        imgCardContainer.classList.add("card-container");
        backCard.classList.add("back-card");
        backCard2.classList.add("back-card");
        imgCard.classList.add("card");
        nameCard.classList.add("card");
        image.classList.add("card-img");

       
        imgCardContainer.appendChild(imgCard);
        imgCardContainer.appendChild(backCard);

        nameCardContainer.appendChild(nameCard);
        nameCardContainer.appendChild(backCard2);



        image.src = value;


        imgCard.appendChild(image);


        imgCard.setAttribute('name', key);
        nameCard.setAttribute('name', key);

       

        nameCard.innerHTML = `<span class="cardText"> ${key}</span>`;
        nameCardContainer.addEventListener("click", function () {

            cardClicked(this);
        })



        imgCardContainer.addEventListener("click", function () {

            cardClicked(this);
        })

        //console.log(nameCardContainer);
        arrayCards.push(nameCardContainer);
        arrayCards.push(imgCardContainer)

    } 





}


createAllCards();


function randomCards()
{
    
        for(let i=arrayCards.length-1; i>0;i--)
        {
            const j=Math.floor(Math.random()* (i+1));
            const temp=arrayCards[i];
            arrayCards[i]=arrayCards[j];
            arrayCards[j]=temp;
        }
    

    
}

//randomCards();
// console.log(arrayCards);

function setCards(){
    arrayCards.forEach(element => {
        element.classList.remove("no-click");
        element.classList.remove("flip");
        matchPlace.appendChild(element);
        
    });
}
randomCards();
setCards();



function cardClicked(c) {
    matchPlace.style.pointerEvents='none';

    c.classList.add("no-click");
    c.classList.toggle("flip");

    console.log(c);
    countClick++;
    console.log(countClick);

    if (countClick == 1) {
        card1Div = c;
        card1 = c.firstElementChild.getAttribute('name');
        console.log(card1);
       // matchPlace.style.pointerEvents='auto';
    }
    else if (countClick == 2) {
        card2Div = c;
        card2 = c.firstElementChild.getAttribute("name");
        if (testCards()) {
            countClick = 0;
         

        }
        else {
            countClick = 0;
            setTimeout(() => {
                card2Div.classList.remove("flip");
                console.log(card2Div);
                card2Div.classList.remove("no-click");
                card1Div.classList.remove("flip");
                console.log(card1Div);
                card1Div.classList.remove("no-click");
            }, 800
            )
        }

       // matchPlace.style.pointerEvents='auto';
    }
    setTimeout(()=>{
        matchPlace.style.pointerEvents='auto';
    },900)

}


function startGame(){

    matchesFound=0;
    matchPlace.innerHTML="";
    randomCards();
  
    setCards();
    
}

playAgainButton.addEventListener("click", startGame);








