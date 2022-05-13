const endGameData = [{
    name: "space-stone", avengers: ["captain-america", "iron-man"]
}, {
    name: "mind-stone", avengers: ["ant-man", "captain-america"]
}, {
    name: "reality-stone", avengers: ["rocket-raccoon", "thor"]
}, {
    name: "power-stone", avengers: ["war-machine", "nebula"]
}, {
    name: "time-stone", avengers: [{name: "hulk"}]
}, {
    name: "soul-stone", avengers: ["black-widow", "hawkeye"]
}];

const stones = document.querySelectorAll('.stone');
const avengers = document.querySelectorAll('.avenger');
const glove = document.querySelector('.infinity_glove');
const texty = document.querySelector('#goodWork');
let clickedStone;
let clickedStoneId;

for (const stone of stones){
    console.log(stone);
    stone.addEventListener('click', ({target}) => {
        //console.log(this.id);
        onStoneClicked(stone);
    });
}

function onStoneClicked(target){
    texty.style.display="none";
    clickedStone  = target;
    clickedStoneId = target.id;
    target.style.backgroundColor = "blue";
}

for (const avenger of avengers){
    avenger.addEventListener('click', ({target}) => {
        onAvengerClicked(avenger);
    });
}

function onAvengerClicked(avenger){
    avenger.style.backgroundColor = "blue";
    const index =  endGameData.findIndex(function(stone, index){
        return stone.name === clickedStoneId;
    })
    const correctAvengers = endGameData[index].avengers;
    console.log(correctAvengers);
    if (correctAvengers.includes(avenger.id) || correctAvengers[0].name===avenger.id){
        texty.style.display="block";
        texty.textContent = "Correct";
        clickedStone.style.display = 'none';
        avenger.style.backgroundColor = "white";
    }
    else{
        texty.style.display="block";
        texty.textContent = "Not correct";
        clickedStone.style.backgroundColor = "white";
        avenger.style.backgroundColor = "white";
    }
}

glove.addEventListener ('click', ({target}) => {
    let gameEnd=true;
    for (const stone of stones){
        console.log(stone.style.display);
        if(window.getComputedStyle(stone).display !== "none"){
            gameEnd = false;
        }
    }
    if(gameEnd){
        texty.style.display="block";
        texty.textContent = "Awesome! You finished the game!!";
    }
    else{
        texty.style.display="block";
        texty.textContent = "Haven't finished yet";
    }
});
