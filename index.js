const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'
fetch(URL)
.then((response) => {
    return response.json();
})
// .then (data => {
//     console.log(data)
//     console.log(data);
//     const {
//         weather,
//         name
//     } = data
//     const weatherHTMLString = `
//     <div class="col-sm-6 col-md-4">
//         weather : ${weather[0]}
//         <br>
//         name : ${name}
//     </div>
//     `;
//     document.getElementById('weather').innerHTML = weatherHTMLString;
// }) 

.then (data => {
    console.log(data)
    document.getElementById('weather').innerHTML = `<h2>${data.weather[0].main}</h2>`
    document.getElementsByTagName
})