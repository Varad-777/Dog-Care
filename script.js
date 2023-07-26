// ------Nav-------------
const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navToggle(){
    nav.classList.toggle("active");
    navToggler.classList.toggle("active");
}
navToggler.addEventListener("click", navToggle);


// hide the nav by clicking outside of it
document.addEventListener("click",(e) => {
    const isClickInsideNav = nav.contains(e.target);
    const isClickInsideNavToggler = navToggler.contains(e.target);
    if(!(isClickInsideNav|| isClickInsideNavToggler) && nav.classList.contains("active")){
        navToggle();
    }
})

// ---------------------Theme-light-dark-----------------------
function themeLightDark(){
    const switchBtn = document.querySelector(".js-switch-btn");
    const icon = switchBtn.querySelector("i");

    function changeIcon(){
        if(document.body.classList.contains("dark")){
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
        else{
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

    switchBtn.addEventListener("click", ()=>{
        document.body.classList.toggle("dark");
        changeIcon();
        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme", "dark");
        }
        else{
            localStorage.setItem("theme", "light");
        }
    });

    // Check for saved user preference, if any on load of the website
    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            document.body.classList.remove("dark");
        }
        else{
            document.body.classList.add("dark");
        }
    }
    changeIcon();
}
themeLightDark();