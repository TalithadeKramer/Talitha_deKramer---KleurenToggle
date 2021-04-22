console.log("hello");

/*Nieuwe functie*/
let toggleNav = () => {
    let sidebar = document.querySelector(".nav-sidebar");
    sidebar.classList.toggle('active');
}

/* Eerste (oude) functie -> bij gebruik (CSS) opacity uit commit en visability commit */
/* let toggleNavStatus = false;

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
} */


const backgroundRood = () => {
    document.body.style.backgroundColor = '#f65d5d';
};
button1.addEventListener("click", backgroundRood);


const backgroundGroen = () => {
    document.body.style.backgroundColor = '#50a42e';
};
button2.addEventListener("click", backgroundGroen);


const backgroundBlauw = () => {
    document.body.style.backgroundColor = '#2195e1';
};
button3.addEventListener("click", backgroundBlauw);

const backgroundPaars = () => {
    document.body.style.backgroundColor = '#905b95';
};
button4.addEventListener("click", backgroundPaars);

const backgroundReset = () => {
    document.body.style.backgroundColor = '#fff';
};
button5.addEventListener("click", backgroundReset); 