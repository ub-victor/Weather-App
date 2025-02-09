window.onload = function(){
    const apiKey = "da5d77d535345f098b3d4648bf4185e6";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kigali";

    async function checkWeather(params) {
        const response = await fetch(apiUrl + `&appid=${apiKey}`)
        var data = await response.json()
        console.log(data)
    }

    checkWeather();
}