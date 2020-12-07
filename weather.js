const weather = document.querySelector(".js-weather"),
    COORDS = "coords",
    API_KEY = "f93bd0b49bdf38f401a3720578b3ce5f";
const deleteBtn = document.querySelector(".js-deleteBtn");
function init(){
    loadCoords();
    
    deleteBtn.addEventListener("click",handleEvent);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else
    {   
        const parsedCoords = JSON.parse(loadedCoords);
        getweather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(getSuccess,getError);
}

function getSuccess(currentPosition){
    const latitude = currentPosition.coords.latitude,
        longitude = currentPosition.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getweather(latitude,longitude);
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function getweather(latitude,longitude){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    ).then(function(reponse){
        return reponse.json()
    }).then(function(currentPositionData){
        const temperature = Math.floor(currentPositionData.main.temp - 273);
        const city = currentPositionData.name;
        weather.innerText = ` 현위치: ${city}  
        기온: ${temperature}˚C`;
    })
}

function getError(){
    console.log("Click 'F5' then please permit to access to you!");
}

function handleEvent(){
    localStorage.removeItem("toDos");
    localStorage.removeItem("currentName");
    localStorage.removeItem("coords");
}

init();