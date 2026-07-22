// --- 1. COUNTDOWN TIMER (05 August 2026, 19:40) ---
const targetDate = new Date("2026-08-05T19:40:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Actualizează elementele din pagină după ID sau după clasa aferentă
        const daysEl = document.getElementById("days") || document.querySelector(".days");
        const hoursEl = document.getElementById("hours") || document.querySelector(".hours");
        const minutesEl = document.getElementById("minutes") || document.querySelector(".minutes");
        const secondsEl = document.getElementById("seconds") || document.querySelector(".seconds");

        if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.innerText = seconds.toString().padStart(2, '0');
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();


// --- 2. ORA EGIPTULUI ---
function updateEgyptTime() {
    const options = { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const egyptTimeString = new Intl.DateTimeFormat([], options).format(new Date());

    // Caută cardul în care scrie "Ora Egiptului"
    const cards = document.querySelectorAll('.card, .glass, div');
    cards.forEach(card => {
        if (card.innerText && card.innerText.includes("Ora Egiptului")) {
            const timeTarget = card.querySelector('p, h3, div:nth-child(2)') || card;
            // Daca are un element text intern cu ora, îl actualizează
            const pElements = card.querySelectorAll('p, div');
            pElements.forEach(p => {
                if (p.innerText.includes(":") || p.innerText === "00:00:00" || p.innerText.trim() === "") {
                    p.innerText = egyptTimeString;
                }
            });
        }
    });
}

setInterval(updateEgyptTime, 1000);
updateEgyptTime();


// --- 3. VREMEA ÎN HURGHADA ---
async function fetchWeather() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=27.2579&longitude=33.8116&current_weather=true');
        const data = await response.json();
        const temp = Math.round(data.current_weather.temperature);
        
        const cards = document.querySelectorAll('.card, .glass, div');
        cards.forEach(card => {
            if (card.innerText && card.innerText.includes("Hurghada")) {
                const pElements = card.querySelectorAll('p, div');
                pElements.forEach(p => {
                    if (p.innerText.includes("Se încarcă") || p.innerText.includes("°C") || p.innerText.trim() === "--") {
                        p.innerText = `${temp}°C`;
                    }
                });
            }
        });
    } catch (error) {
        console.log("Eroare la preluarea vremii:", error);
    }
}

fetchWeather();


// --- 4. MUSIC TOGGLE ---
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

if (musicBtn && music) {
    musicBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicBtn.innerText = "⏸️ Pause";
        } else {
            music.pause();
            musicBtn.innerText = "🎵 Play";
        }
    });
}
