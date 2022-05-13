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
    console.log(index);
    console.log(avenger.id);
    if (endGameData[index].avengers.includes(avenger.id)){
        alert("correct");
        clickedStone.style.display = 'none';
        avenger.style.backgroundColor = "white";
    }
    else{
        alert("Not correct")
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
        alert("Good job");
    }
    else{
        alert("Not just yet");
    }
});
