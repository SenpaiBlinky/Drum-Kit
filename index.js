var buttonArray = document.querySelectorAll(".drum");


for (let i = 0; i < buttonArray.length; i++) {
    
    const button = buttonArray[i];
    
    button.addEventListener("click", function (){
        
        var buttonInnerHtml = button.innerHTML;

        makeSound(buttonInnerHtml)

        buttonAnimation(buttonInnerHtml)

        });
}

document.addEventListener("keydown" , function(event) {

    makeSound(event.key)
    
    buttonAnimation(event.key)

})

function makeSound(key) {

    switch (key) {
        case "w":
            var t1 = new Audio("sounds/tom-1.mp3");
            t1.play();
            break;
            
        case "a":
            var t2 = new Audio("sounds/tom-2.mp3");
            t2.play();
            break;
            
        case "s":
            var t3 = new Audio("sounds/tom-3.mp3");
            t3.play();
            break;

        case "d":
            var t4 = new Audio("sounds/tom-4.mp3");
            t4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default: console.log()
            break;
    }

}


function buttonAnimation (currentKey) {

    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100)

}



// ------------------------------------ OBJECT PRACTICE -------------------------------------------
const Drummer = function Drummer (sticks, age, name, yearsOfExperience) {
    this.sticks = sticks;
    this.age = age;
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.favSong = function () {
        alert("bing bang boom");
    };
}

var drumBoi1 = new Drummer(["long", "short", "medium"], 21, "JeliBeli", 0)

console.log(drumBoi1)