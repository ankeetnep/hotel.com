//  Navbar

const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-link');
const menu = document.querySelector('.nav-toggle-btn');

menu.addEventListener("click", function () {
    navbar.classList.toggle('active');
    menu.classList.toggle('active')
});

// For close link when one click
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        navbar.classList.toggle('active');
        menu.classList.toggle('active');
    })
}

// Sticky navbar and back
const header = document.querySelector('.header');
const back = document.querySelector('.back-top-btn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        header.classList.add('active')
        back.classList.add('active')
    } else {
        header.classList.remove('active')
        back.classList.remove('active')
    }
})


// SearchINput

const search = document.querySelector('.search-btn');
const searchfir = document.querySelector('.search-container');
const searchsec = document.querySelector('.search-submit');
const searchthir = document.querySelector('.search-close-btn');

const Elem = [search, searchsec, searchthir];

for (let i = 0; i < Elem.length; i++) {
    Elem[i].addEventListener("click", function () {
        searchfir.classList.toggle('active');
        document.body.classList.toggle('active')
    })
}

// MOVE CYCLE IN SCROOLLL
const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
    let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
    if (deliveryBoyTopPos < 500 & deliveryBoyTopPos > -250) {
        let activeScrollPos = window.scrollY;
        if (lastScrollPos < activeScrollPos) {
            deliveryBoyMove++;
        } else {
            deliveryBoyMove--;
        }
        lastScrollPos = activeScrollPos;

        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
    };
});