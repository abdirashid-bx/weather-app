const input=document.getElementById('input')
     
const btn=document.getElementById('btn')
const results=document.getElementById('results')
const apiKey = "a64394a71bff5ffd2f09f4ac1b5602f0";
 

async function getWeather() {
    try{
        const cityName=input.value.trim()
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    const response= await fetch(apiUrl)
    const data=await response.json()
    console.log(data)
    const weather=`
   <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡️ Temperature: <strong>${data.main.temp}°C</strong></p>
            <p>💧 Humidity: <strong>${data.main.humidity}%</strong></p>
            <p> im Wind Speed: <strong>${data.wind.speed} m/s</strong></p>
            <p>⏳ Timezone: <strong>GMT ${data.timezone / 3600}</strong></p>

    `
    results.innerHTML=weather
    
    }
    catch(error){
        results.innerText='we didnot find a city'
    }
    

    
}