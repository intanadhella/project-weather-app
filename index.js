
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d`)
.then (response => {
    return response.json();
})
.then (data => {
    console.log(data)
    document.getElementById('weather').innerHTML = `<h2>${data.weather[0].main}</h2>`
    document.getElementsByTagName
})


