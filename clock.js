const dateText = document.querySelector(".js-date");
const timeText = document.querySelector(".js-time");

function init(){
    getCurrentTime();
}

init();

function getCurrentTime(){    
    const currentTime = new Date();
    const currentYear = currentTime.getFullYear(),
        currentMonth = currentTime.getMonth(),
        currentDay = currentTime.getDate(),
        currentHour = currentTime.getHours(),
        currentMinute = currentTime.getMinutes();


    if(currentHour < 12){
        dateText.innerText = `${currentYear}/${
            currentMonth+1 < 10 ? `0${currentMonth}` : `${currentMonth}`}/${
            currentDay < 10 ? `0${currentDay}` : `${currentDay}`}`
        timeText.innerText = `AM ${currentHour < 10 ? `0${currentHour}` : `${currentHour}`}:${
            currentMinute < 10 ? `0${currentMinute}` : `${currentMinute}`}` 
        }
    else{
        dateText.innerText = `${currentYear}/${
            currentMonth+1 < 10 ? `0${currentMonth}` : `${currentMonth}`}/${
            currentDay < 10 ? `0${currentDay}` : `${currentDay}`}`
        timeText.innerText = `${currentHour < 10 ? `0${currentHour}` : `${currentHour}`}:${
            currentMinute < 10 ? `0${currentMinute}` : `${currentMinute}`}`    
        }
    }

