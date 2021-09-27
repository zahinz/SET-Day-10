console.log(`TEST`);

window.scrollTo(0, 0)



// ? scroll data element
// ! return as zero
// let scrollY = window.scrollY

// ? declare variable
let winHeight = window.innerHeight

let container = document.getElementById(`container`)

let page1 = document.getElementById(`page1`)

let caption1 = document.getElementById(`caption1`)
let caption2 = document.getElementById(`caption2`)


// ? progress bar
let progressBar = document.getElementById(`progressBar`)


// ? page 1 elements
let layer1 = document.getElementById(`layer1`)
let layer2 = document.getElementById(`layer2`)
let layer3 = document.getElementById(`layer3`)
let layer4 = document.getElementById(`layer4`)



let progress = document.getElementById(`progress`)

let progressPercentage = 0



// ? get the max height of the body
// ! copy from Stack Overflow
// * https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );


// ? add event listener for scrolling
window.addEventListener("scroll", onScroll)
window.addEventListener("scroll", onScroll2)








// ? update progress bar when scrolling

function onScroll() {
    // ? get the data
    console.log("window scroll Y: ", window.scrollY);
    console.log("window height", winHeight);
    console.log("total height",height);
    progressPercentage = (window.scrollY/(height-winHeight) * 100)
    console.log(progressPercentage, "%");

    // ? apply to the HTML
    progressBar.style.width = progressPercentage + "%"
    
    progress.innerHTML = Math.round(progressPercentage) + "%"
    console.log(" ");
}



// ? update position when scrolling

function onScroll2 () {

    if ( window.scrollY > 100) {
        layer4.style.opacity = (window.scrollY - 100)/(height-winHeight - 100)
        
        layer4.style.bottom = (-30+(window.scrollY*1.5 - 100)/(height-winHeight - 100) * 17) + "vw"


        console.log(layer4.style.bottom + "bottom");
        console.log("opacity 1", (window.scrollY - 100)/(height-winHeight - 100)+0.3);
    }


    if ( window.scrollY > 1500) {
        layer3.style.opacity = (window.scrollY - 1500)/(height-winHeight - 1500)

        layer3.style.bottom = (-10+(window.scrollY- 1500)/(height-winHeight - 1500) * 10) + "vw"


        console.log(layer3.style.bottom + "bottom");
        console.log("opacity 2", (window.scrollY - 1500)/(height-winHeight - 1500));
    }


    if ( window.scrollY > 2500) {
        layer2.style.opacity = (window.scrollY - 2500)/(height-winHeight - 2500)

        layer2.style.bottom = (-10+(window.scrollY*0.5 - 500)/(height-winHeight - 500) * 10) + "vw"


        console.log(layer2.style.bottom + "bottom");
        console.log("opacity 3", (window.scrollY - 2500)/(height-winHeight - 2500));
    }


    if ( window.scrollY > 3500) {
        layer1.style.opacity = (window.scrollY - 3500)/(height-winHeight - 3500)

        layer1.style.bottom = (5+(window.scrollY*0.5 - 500)/(height-winHeight - 500) * 10) + "vw"


        console.log(layer1.style.bottom + "bottom");
        console.log("opacity 4", (window.scrollY - 3500)/(height-winHeight - 3500));
    }
    console.log(" ");

    if ( window.scrollY > (height/4)) {
        caption1.classList.add(`fade-out`)
    }

    if ( window.scrollY > (height/2)) {
        caption2.classList.add(`fade-in`)
    }

    // if ( window.scrollY < (height*3/4)) {
    //     caption2.classList.add(`fade-out`)
    //     caption2.classList.remove(`fade-in`)
    // }

    // if ( window.scrollY < (height/2)) {
    //     caption1.classList.add(`fade-in`)
    //     caption1.classList.remove(`fade-out`)

    // }


}