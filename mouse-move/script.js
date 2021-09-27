console.log(`MOUSE MOVE`);

let container = document.getElementById(`container`)

let layerOne = document.getElementById(`layerOne`)
let layerTwo = document.getElementById(`layerTwo`)
let layerThree = document.getElementById(`layerThree`)


let onion = document.getElementById(`onion`)


let containerPos = {width: 512, height: 512}
let onionPos = {x: 0, y: 0, width: 50, height: 50}
let layerOnePos = {x: 0, y: 0, width: 512, height: 512}
let layerTwoPos = {x: 0, y: 0, width: 512, height: 512}
let layerThreePos = {x: 0, y: 0, width: 512, height: 512}





window.addEventListener("mousemove", onMouseMove)


function onMouseMove (evt) {
    // console.log(evt);

    var mouse = {
        x: evt.pageX,
        y: evt.pageY
    }
    console.log(onion.style)
    console.log(onion.style)

    console.log(`mouse X : ${mouse.x} mouse Y : ${mouse.y}`);

    onionPos.x = mouse.x - onionPos.width/2 - container.offsetLeft 
    onionPos.y = mouse.y - onionPos.height/2 - container.offsetTop 


    onion.style.left = onionPos.x + "px"
    onion.style.top  = onionPos.y + "px"


    

    // ? MADE LAYER 1 OPPPSITE OF THE MOUSE

    // ! *0.05 = to slow down the movement
    // !  
    layerOnePos.x = (-onionPos.x * 0.15) + (containerPos.width/2 - layerOnePos.width/2)

    layerOne.style.left = layerOnePos.x + "px"



    // ? LAYER TWO

    layerTwoPos.x = (-onionPos.x * 0.10) + (containerPos.width/2 - layerTwoPos.width/2)

    layerTwo.style.left = layerTwoPos.x + "px"



    // ? LAYER THREE

    layerThreePos.x = (-onionPos.x * 0.05) + (containerPos.width/2 - layerThreePos.width/2)

    layerThree.style.left = layerThreePos.x + "px"  


}