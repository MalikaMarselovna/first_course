const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

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

updateCounter();
const sections = document.querySelector("section");

const checkBoxes = () => {
    const triggerBottom = (window.innerheight / 5) * 4;
    sections.forEach((section) => { 
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) section.classList.add("show");
        else section.classList.remove("show");
    })
}
window.addEventListener("scroll",checkBoxes);
checkBoxes()
