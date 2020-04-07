const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&units=metric&appid=08c63bb12c5a4132f5d570f08f17872d'
fetch(URL)
.then((response) => {
    return response.json();
})
.then (data => {
    console.log(data)
    const {
        weather,
        name,
        main
    } = data
    const weatherHTMLString = `
    <div class="col-sm-6 col-md-4">
        weather : ${weather[0]}
        <br>
        name : ${name}
    </div>
    `;
    document.getElementById('weather').innerHTML = weatherHTMLString;
    
    document.getElementsByClassName('location')[0].getElementsByTagName('p')[0].innerHTML = name
    document.getElementsByClassName('temperature-description')[0].getElementsByTagName('p')[0].innerHTML = `${weather[0].main} (${weather[0].description})`
    document.getElementsByClassName('temperature-value')[0].getElementsByTagName('p')[0].innerHTML = `${main.temp} °C`
    let icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    document.getElementsByClassName('weather-icon')[0].getElementsByTagName('img')[0].src = icon

}) 