// let temp = getData();
const lat = 50.44768417843631, lon = 30.51974519336875;
const btn = document.querySelector('.btn');

async function getData () {
	const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=81b7484af2cf3817281487b6500731fa`);

	const response = await result.json();

	showData(response);
}

function showData(data){
	const date = document.querySelector('.date'),
		time = document.querySelector('.time'),
		humidity = document.querySelector('.humidity'),
		pressure = document.querySelector('.pressure'),
		wind = document.querySelector('.wind'),
		temp = document.querySelector('.temp'),
		feels = document.querySelector('.feels-like'),
		city = document.querySelector('.city'),
		weather = document.querySelector('.weather');

	const mainData = data.main;
	const currDate = new Date()


	humidity.textContent = `Humidity: ${mainData.humidity}%`;
	pressure.textContent = `Pressure: ${mainData.pressure}hPa`;
	wind.textContent = `Wind: ${data.wind.speed}km/h `;
	temp.textContent = `${Math.round(mainData.temp - 273)}°C`;
	feels.textContent = `Feels like: ${Math.round(mainData.feels_like - 273)}°C`;
	date.textContent = `${currDate.getDate()}.${(currDate.getMonth() + 1) < 10 ? '0' : ''}${currDate.getMonth() + 1}.${currDate.getFullYear()}`;
	time.textContent = `${(currDate.getHours() + 1) < 10 ? '0' : ''}${currDate.getHours()}:${(currDate.getMinutes() + 1) < 10 ? '0' : ''}${currDate.getMinutes()}`;
	city.textContent = `${data.name}`;
	weather.textContent = data.weather[0].description;
}

getData()

btn.addEventListener('click', getData);