const targetDate = new Date("August 5, 2026 19:40:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.querySelector(".countdown").innerHTML = `
            <h1 style="font-size:60px;">
                🇪🇬 EGIPT, VENIM!! ✈️
            </h1>
        `;

        clearInterval(timer);

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

    const seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

const timer = setInterval(updateCountdown,1000);
