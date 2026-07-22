// ======================================
// EGYPT 2026
// by ChatGPT
// ======================================

// Data plecării
const departureDate = new Date("2026-08-05T19:40:00");

// Elemente countdown
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// =======================
// COUNTDOWN
// =======================

function updateCountdown(){

const now = new Date();

const diff = departureDate - now;

if(diff<=0){

days.innerHTML="0";

hours.innerHTML="0";

minutes.innerHTML="0";

seconds.innerHTML="0";

return;

}

const d=Math.floor(diff/(1000*60*60*24));

const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const m=Math.floor((diff%(1000*60*60))/(1000*60));

const s=Math.floor((diff%(1000*60))/1000);

days.innerHTML=d;

hours.innerHTML=h;

minutes.innerHTML=m;

seconds.innerHTML=s;

}

setInterval(updateCountdown,1000);

updateCountdown();


// =======================
// ORA EGIPT
// =======================

function updateEgyptTime(){

const now=new Date();

const egypt=now.toLocaleTimeString("ro-RO",{

timeZone:"Africa/Cairo"

});

document.getElementById("egyptTime").innerHTML=egypt;

}

setInterval(updateEgyptTime,1000);

updateEgyptTime();
// ======================================
// VREME HURGHADA
// ======================================

async function loadWeather(){

try{

const response=await fetch("https://wttr.in/Hurghada?format=j1");

const data=await response.json();

const current=data.current_condition[0];

document.getElementById("weather").innerHTML=current.weatherDesc[0].value;

document.getElementById("temperature").innerHTML=current.temp_C+"°C";

}catch(e){

document.getElementById("weather").innerHTML="Vreme indisponibilă";

}

}

loadWeather();


// ======================================
// MUZICĂ
// ======================================

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸️ Pauză";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="▶️ Play";

playing=false;

}

});


// ======================================
// CHECKLIST
// ======================================

const checks=document.querySelectorAll(".list input");

checks.forEach((box,index)=>{

const saved=localStorage.getItem("egypt-check-"+index);

if(saved==="true"){

box.checked=true;

}

box.addEventListener("change",()=>{

localStorage.setItem(

"egypt-check-"+index,

box.checked

);

});

});


// ======================================
// GALERIE
// ======================================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});


// ======================================
// AVION
// ======================================

setInterval(()=>{

const plane=document.querySelector(".plane");

plane.style.animation="none";

plane.offsetHeight;

plane.style.animation="fly 20s linear";

},20000);


// ======================================
// FOOTER YEAR
// ======================================

console.log("Egypt 2026 Ready!");
// ======================================
// SCROLL ANIMATIONS
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".glass,.event,.gallery img,.time-card,.card"
).forEach(el => observer.observe(el));


// ======================================
// COUNTDOWN FINISHED
// ======================================

let celebrationShown = false;

function celebrate(){

    if(celebrationShown) return;

    celebrationShown = true;

    document.body.classList.add("celebrate");

    alert("🇪🇬 A sosit ziua plecării! Drum bun! ✈️");

}


// Verificăm la fiecare secundă
setInterval(()=>{

    if(new Date() >= departureDate){

        celebrate();

    }

},1000);


// ======================================
// RANDOM TWINKLE
// ======================================

setInterval(()=>{

    const cards=document.querySelectorAll(".time-card");

    const random=Math.floor(Math.random()*cards.length);

    cards[random].style.transform="scale(1.08)";

    setTimeout(()=>{

        cards[random].style.transform="scale(1)";

    },500);

},4000);


// ======================================
// HEADER PARALLAX
// ======================================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    hero.style.transform="translateY("+(window.scrollY*0.18)+"px)";

});


// ======================================
// FADE EFFECT
// ======================================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


// ======================================
// PREVENT RIGHT CLICK
// ======================================

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});


// ======================================
// PRELOAD IMAGE
// ======================================

const preload = new Image();

preload.src="background.jpg";


// ======================================
// READY
// ======================================

console.log("🏝️ Egypt 2026 loaded successfully!");
