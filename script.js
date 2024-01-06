const container =document.querySelector(".container");
const search=document.querySelector(".search-box button");
const weatherBox=document.querySelector(".weather-box");
const weatherDetails=document.querySelector(".weather-details");

search.addEventListener("click",()=>{
    const APIkey='0caab3efefd66ead4a2aa9120ec3fe52';
    const city=document.querySelector(".search-box input").value;

    if(city=="")
       return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response =>response.json()).then(json =>{
    
    const image=document.querySelector(".weather-box img");
    const temperature=document.querySelector(".weather-box .temperature");
    const description=document.querySelector(".weather-box .description");
    const humidity=document.querySelector(".weather-details .humidity span");
    const wind=document.querySelector(".weather-details .wind span");
    
    switch (json.weather[0].main){
        case "clear":
            image.src="imags/clear.png";
            break;

        case "Rain":
            image.src="imags/rain.png";
            break;
        
        case "Snow":
            image.src="imags/snow.png";
            break;
        
        case "Clouds":
            image.src="imags/cloud.png";
            break;
        
        case "Mist":
            image.src="imags/mist.png";
            break;

        case "Haze":
            image.src="imags/haze.png";
            break;

        case "Smoke":
            image.src="imags/mist.png";
            break;

        default:
            image.src="imags/clear.png";
            

      }

      temperature.innerHTML=`${parseInt(json.main.temp)}<span>℃</span>`;
      description.innerHTML=`${json.weather[0].description}`;
      humidity.innerHTML=`${json.main.humidity}%`;
      wind.innerHTML=`${parseInt(json.wind.speed)}km/h`;
    });
});