
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d`)
.then (response => {
    return response.json();
})
.then (data => {
    console.log(data);
    const {
        weather,
        name
    } = data
    const weatherHTMLString = `
    <div class="col-sm-6 col-md-4">
        weather : ${weather[0]}
        <br>
        name : ${name}
    </div>
    `;
    document.getElementById('weather').innerHTML = weatherHTMLString;
})