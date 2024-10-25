const hamburger = document.querySelector(".hamburger");
const mobileNavbar = document.getElementById('menubar');
const header = document.getElementById('header');
const toggleNav = () => {
    mobileNavbar.classList.toggle("active");
    hamburger.classList.toggle("hamburger-active");
};

const closeNav = (e) => {
    if(!mobileNavbar.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove("hamburger-active");
        mobileNavbar.classList.remove("active");
    }
};

const handleScroll = () => {
    if(window.scrollY > 50) {
        header.classList.add("scrolled");
    }else {
        header.classList.remove("scrolled");
    }
}

hamburger.addEventListener("click", toggleNav);
document.addEventListener("click", closeNav);
window.addEventListener("scroll", handleScroll);