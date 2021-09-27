console.log(`SCROLL EVENT`);


let progressBar = document.getElementById(`progress-bar`)

let winHeight = window.innerHeight
// let scrollVer = window.scrollY
// let widthBar = scrollVer/winHeight * 100

let container = document.getElementById(`container`)

let num = document.getElementById(`percentageNum`)




let sectionOne = document.getElementById(`content1`)
let sectionTwo = document.getElementById(`content2`)
let sectionThree = document.getElementById(`content3`)


let sectionHolder = document.getElementById(`sectionHolder`)

// ? ALWAYS SCROLL AT TOP
window.scrollTo(0, 0)




window.addEventListener("scroll", onScroll)

// ! BUG TO FIX IF HEIGHT MORE THAN 200%
function onScroll() {

    // ? get the data
    console.log("window scroll Y: ", window.scrollY);
    console.log("window height", winHeight);
    console.log("#container height: ", container.offsetHeight);

    // ? calculate the percentage
    widthBar = (window.scrollY + winHeight)/container.offsetHeight * 100
    console.log("Width", widthBar, "%");

    // ? apply the css style width
    progressBar.style.width = widthBar + "%"

    // ? insert the percetage in the span
    num.innerHTML = Math.round(widthBar) + "%"




    console.log(" ");


    // ? get the data of sectionYwo offsetTop
    console.log("sectionTwo offsetTop", sectionTwo.offsetTop);

    // ? apply if else statement for sectionTwo conditioning
    // if ( window.scrollY > sectionTwo.offsetTop) {
    //     console.log("I am in sectionTwo");
    //     sectionHolder.style.display = `block`
    // }

    // else if ( window.scrollY < sectionTwo.offsetTop) {
    //     console.log("I am in sectionTwo");
    //     sectionHolder.style.display = `none`
    // }



    var itemList = document.querySelectorAll(".item");
    console.log(itemList);


    // ? APPLY THE FADE IN CSS CLASS WHEN REACH AT #content2 .item

    console.log("list item 1: ", itemList[0].offsetTop);
    console.log("list item 2: ", itemList[1].offsetTop);
    console.log("list item 3: ", itemList[2].offsetTop);
    console.log("list item 4: ", itemList[3].offsetTop);

    if (window.scrollY + 500 >= itemList[0].offsetTop) {
        itemList[0].classList.add(`fadeIn`)
        console.log(`item 1 fade in`);
    }
    
    if (window.scrollY + 500 >= itemList[1].offsetTop) {
        itemList[1].classList.add(`fadeIn`)
        console.log(`item 2 fade in`);
    }
    
    if (window.scrollY + 500 >= itemList[2].offsetTop) {
        itemList[2].classList.add(`fadeIn`)
        console.log(`item 3 fade in`);
    }
    
    if (window.scrollY + 500 >= itemList[3].offsetTop) {
        itemList[3].classList.add(`fadeIn`)
        console.log(`item 4 fade in`);
    }
    
    // if (window.scrollY + 500 <= itemList[0].offsetTop) {
    //     itemList[0].classList.add(`fadeOut`)
    // }




    // ? SHORTEN UP USING FOR LOOP
    // for (let i = 0; i < itemList.length; i++) {
    //     if (window.scrollY >= itemList[i].offsetTop) {
    //         itemList[i].classList.add(`fadeIn`)
    //         itemList[i].classList.remove(`fadeOut`)
    //     }
        
    //     else if (window.scrollY < itemList[i].offsetTop) {
    //         itemList[i].classList.add(`fadeOut`)
    //         itemList[i].classList.remove(`fadeIn`)
    //     }
    // }



    console.log(" ");
    console.log(" ");
    console.log(" ");
}








