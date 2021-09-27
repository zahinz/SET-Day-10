console.log(`TEST`);

window.scrollTo(0, 0)

// ? declaring variables

let container = document.getElementById(`container`)

let layer1 = document.getElementById(`layer1`)
let layer2 = document.getElementById(`layer2`)
let layer3 = document.getElementById(`layer3`)
let layer4 = document.getElementById(`layer4`)
let layer5 = document.getElementById(`layer5`)
let layer6 = document.getElementById(`layer6`)
let layer7 = document.getElementById(`layer7`)
let layer8 = document.getElementById(`layer8`)


let containerPos = {w: 100, h: 100}
let layer1Pos = { x: 0, y: 0, w: 0, h: 20}
let layer2Pos = { x: 0, y: 0, w: -38, h: 29}
let layer3Pos = { x: 0, y: 0, w: -31, h: 34}
let layer4Pos = { x: 0, y: 0, w: -100, h: 26}
let layer5Pos = { x: 0, y: 0, w: -30, h: 30}
let layer6Pos = { x: 0, y: 0, w: -40, h: 31}
let layer7Pos = { x: 0, y: 0, w: -50, h: 30}
let layer8Pos = { x: 0, y: 0, w: 0, h: 180}

// ? refresh data for screen width and height
let screenHeight = window.innerHeight
let screenWidth = window.innerWidth
setInterval(() => {
    screenHeight = window.innerHeight
    screenWidth = window.innerWidth
}, 500);



window.addEventListener("mousemove", onMouseMove)

function onMouseMove (evt) {
    // console.log(evt);

    var mouse = {
        x: evt.pageX,
        y: evt.pageY
    }

    // console.log(`mouse X : ${mouse.x} mouse Y : ${mouse.y}`);
    // console.log(screenHeight, screenWidth);

    // ? layer 7 parallax x
    layer7.style.marginLeft = (-mouse.x * 0.6 / screenWidth * 100) + (layer7Pos.w/2) + "%"
    
    // ? layer 6 parallax x
    layer6.style.marginLeft = (-mouse.x * 0.5 / screenWidth * 100) + (layer6Pos.w/2) + "%"

    // ? layer 5 parallax x
    layer5.style.marginLeft = (-mouse.x * 0.4 / screenWidth * 100) + (layer5Pos.w/2) + "%"

    // ? layer 4 parallax x
    layer4.style.marginLeft = (-mouse.x * 0.3 / screenWidth * 100) + (layer4Pos.w/2) + "%"

    // ? layer 3 parallax x
    layer3.style.marginLeft = (-mouse.x * 0.2 / screenWidth * 100) + (layer3Pos.w/2) + "%"

    // ? layer 2 parallax x
    layer2.style.marginLeft = (-mouse.x * 0.1 / screenWidth * 100) + (layer2Pos.w/2) + "%"
    // console.log("margin left : ", layer7.style.marginLeft);

    // ? layer 7 parallax x
    layer7.style.bottom = (mouse.y * 0.3 / screenWidth * 100) + (layer7Pos.h/2) + "%"
    layer8.style.height = (mouse.y * 1.5 / screenWidth * 100) + (layer8Pos.h) + "px"

    // ? layer 6 parallax x
    layer6.style.bottom = (mouse.y * 0.25 / screenWidth * 100) + (layer6Pos.h/2) + "%"

    // ? layer 5 parallax x
    layer5.style.bottom = (mouse.y * 0.2 / screenWidth * 100) + (layer5Pos.h/2) + "%"

    // ? layer 4 parallax x
    layer4.style.bottom = (mouse.y * 0.15 / screenWidth * 100) + (layer4Pos.h/2) + "%"

    // ? layer 3 parallax x
    layer3.style.bottom = (mouse.y * 0.15 / screenWidth * 100) + (layer3Pos.h/2) + "%"

    // ? layer 2 parallax x
    layer2.style.bottom = (mouse.y * 0.1 / screenWidth * 100) + (layer2Pos.h/2) + "%"

}