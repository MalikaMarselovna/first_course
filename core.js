const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const loader = document.querySelector('#loader-full')
const section = document.querySelector("section");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const order = document.querySelector('.order-course');
const about = document.querySelector('.about');
const start = document.querySelector('.start');
const advantages = document.querySelector('.advantages');
const partners = document.querySelector('.partners');
const program = document.querySelector('.program');
const mentors = document.querySelector('.mentors');
const form = document.querySelector('.form');


const currentYear = new Date().getFullYear();
const nextYear = new Date(`March 03 2024 00:00:00`);


function updateCounter() {
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;


    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateCounter, 1000)
updateCounter();

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

setTimeout(function (){
    loader.remove();
    section.style.display = 'flex';
    header.style.display = 'flex';
    footer.style.display = 'flex';
    order.style.display = 'flex';
    about.style.display = 'flex';
    start.style.display = 'flex';
    advantages.style.display = 'flex';
    partners.style.display = 'flex';
    program.style.display = 'flex';
    mentors.style.display = 'flex';
    form.style.display = 'flex';
}, 2000)