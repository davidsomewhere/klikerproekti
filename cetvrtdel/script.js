
days = document.getElementById('days');
hours = document.getElementById('hours');
minutes = document.getElementById('minutes');
seconds = document.getElementById('seconds');
countdown = document.getElementById('countdown');
year = document.getElementById('year');

currentYear = new Date().getFullYear();
year.innerText = currentYear + 2;


premiereDate = new Date('2026-11-06T00:00:00');

function updateCountdown() {
    currentTime = new Date();
    diff = premiereDate - currentTime;

    if (diff <= 0) {
        days.innerText = '00';
        hours.innerText = '00';
        minutes.innerText = '00';
        seconds.innerText = '00';
        return;
    }

    d = Math.floor(diff / 1000 / 60 / 60 / 24);
    h = Math.floor(diff / 1000 / 60 / 60) % 24;
    m = Math.floor(diff / 1000 / 60) % 60;
    s = Math.floor(diff / 1000) % 60;

    days.innerText = d;
    hours.innerText = h < 10 ? '0' + h : h;
    minutes.innerText = m < 10 ? '0' + m : m;
    seconds.innerText = s < 10 ? '0' + s : s;
}

updateCountdown();
setInterval(updateCountdown, 1000);
