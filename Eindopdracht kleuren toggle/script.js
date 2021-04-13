console.log("hello");

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar ul span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar ul button");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visability = "visable";
        getSidebar.style.width = "200px";
        getSidebarTitle.style.opacity = "1";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visability = "hidden";


        toggleNavStatus = false;
    }
}


const backgroundRood = document.querySelector(".toggle");
const toggleBackgroundRood = () => {
    backgroundRood.classList.toggle("rood");
};
button1.addEventListener("click", toggleBackgroundRood);


const backgroundGroen = document.querySelector(".groen");
const toggleBackgroundGroen = () => {
    backgroundRood.classList.toggle("groen");
};
button2.addEventListener("click", toggleBackgroundGroen);


const backgroundBlauw = document.querySelector(".blauw");
const toggleBackgroundBlauw = () => {
    backgroundRood.classList.toggle("blauw");
};
button3.addEventListener("click", toggleBackgroundBlauw);

const backgroundPaars = document.querySelector(".paars");
const toggleBackgroundPaars = () => {
    backgroundRood.classList.toggle("paars");
};
button4.addEventListener("click", toggleBackgroundPaars); 