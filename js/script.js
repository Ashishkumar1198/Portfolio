// var typed = new Typed(".multiple-text", {
//     strings: [
//         "Data Engineer",
//         "Machine Learning Enthusiast",
//         "Software Developer"
//     ],
//     typeSpeed: 80,
//     backSpeed: 60,
//     backDelay: 1500,
//     loop: true
// });

// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     navbar.classList.toggle('active');
// };
/* ================= TYPING ================= */

var typed = new Typed(".multiple-text", {
    strings: [
        "Data Engineer",
        "Machine Learning Enthusiast",
        "Software Developer"
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});


/* ================= MENU TOGGLE ================= */

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
};



/* ================= CLOSE MENU WHEN CLICK ================= */

document.querySelectorAll('.navbar a').forEach(link => {

    link.onclick = () => {
        navbar.classList.remove('active');
    };

});



/* ================= ACTIVE LINK ON SCROLL ================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            document
                .querySelector('.navbar a[href*=' + id + ']')
                .classList.add('active');
        }

    });

};



/* ================= STICKY HEADER ================= */

let header = document.querySelector('.header');

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 100);

});



/* ================= SCROLL REVEAL ================= */

ScrollReveal({
    distance: '60px',
    duration: 800,
    delay: 100
});

ScrollReveal().reveal('.home-content, .section-title', {
    origin: 'top'
});

ScrollReveal().reveal('.home-img, .project-item, .skill-item, .certificate-card, .education-item, .contact-content', {
    origin: 'bottom',
    interval: 100
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const msg = document.getElementById("form-msg");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        msg.innerText =
        "Message received successfully. Thank you for contacting me. I will get back to you soon.";

        msg.style.color = "#00e5ff";

        form.reset();

    });

});