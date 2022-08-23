const btn = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');
const input = document.getElementById('input');
const api_key = 'fff8fc1f103410fc3d832904fa250ecd';

getWeather = async(city) => {
   weatherInfo.innerHTML = `<h1>Loading...</h1>`;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
   const response = await fetch(url);
   const data = await response.json();
   showWeather(data);
}

showWeather = (data) => {
   if(data.cod == 404){
      weatherInfo.innerHTML = `
         <h2>404 - Country Not Found</h2>
      `
   }else{
      weatherInfo.innerHTML = `
      <div>
         <img style ='width: 100px' src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
         <h1>${data.name}</h1>
         <h3><span>${data.main.temp}</span>&deg;C</h3>
         <h5>Feels Like <span>${data.main.feels_like}</span>&deg;</h5>
         <h1 class="lead">${data.weather[0].main}</h1>
      </div>
   `
   }
   
}
btn.addEventListener('click',function(){
   getWeather(input.value);
})






// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
// .then(res => res.json())
// .then(data => {
//    console.log(data);
// })

