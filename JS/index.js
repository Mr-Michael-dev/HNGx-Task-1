const utcTime = document.getElementById("currentUTCTime");
const currentDayOfTheWeek = document.getElementById("currentDayOfTheWeek")

function updateTime() {
    const newTime = new Date().getTime().toString();
    utcTime.innerText = newTime;
    const day = new Date().toLocaleDateString(undefined, { weekday: 'long'});
    currentDayOfTheWeek.innerText = day;
}

setInterval(updateTime, 1);
