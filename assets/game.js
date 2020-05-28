console.log("today is raining outside and there is purple buffalo outside")
let teamoneshootbutton = document.querySelector("#teamone-shoot-button");
let teamonenumshots = document.querySelector("#teamone-numshots");
let teamonenumgoals = document.querySelector("#teamone-numgoals")
teamoneshootbutton.addEventListener("click", function () {
    console.log("+the shoot button clicked");
    let newshootValue = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = newshootValue;
    if (Math.random() > .5) {
        let newgoalValue = Number(teamonenumgoals.innerHTML) + 1
        teamonenumgoals.innerHTML = newgoalValue;
    }
})

let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");
let teamtwonumshots = document.querySelector("#teamtwo-numshots");
let teamtwonumgoals = document.querySelector("#teamtwo-numgoals")
teamtwoshootbutton.addEventListener("click", function () {
    console.log("+the shoot button clicked");
    let newshootValue = Number(teamtwonumshots.innerHTML) + 1;
    teamtwonumshots.innerHTML = newshootValue;
    if (Math.random() > .5) {
        let newgoalValue = Number(teamtwonumgoals.innerHTML) + 1
        teamtwonumgoals.innerHTML = newgoalValue;
    }



})

let resetbutton = document.querySelector("#reset-button");
let numresets = document.querySelector("#num-resets");
resetbutton.addEventListener("click", function () {
    console.log("+the reset button clicked");
    let newresetValue = Number(numresets.innerHTML) + 1;
    numresets.innerHTML = newresetValue;

    teamonenumshots.innerHTML = 0;
    teamtwonumshots.innerHTML = 0;
    teamonenumgoals.innerHTML = 0;
    teamtwonumgoals.innerHTML = 0;





})