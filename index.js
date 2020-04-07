const URL = '//api.openweathermap.org/data/2.5/group?id=1642911,1214520,1642858,1631761&units=metric&appid=08c63bb12c5a4132f5d570f08f17872d'
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
    return data.list
})
.then (data => {
    console.log(data)

    //currentCity
    const currentCityHead = document.getElementById('currentCity-head')
    currentCityHead.innerHTML = data[0].name
    const date = new Date()
    const currentCityDate = document.getElementById('currentCity-date')
    currentCityDate.innerHTML = date
    const currentCityIcon = document.getElementById('currentCity-icon')
    currentCityIcon.src = `http://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`
    currentCityIcon.alt = data[0].weather[0].description
    
    //secondCity
    const secondCityHead = document.getElementById('secondCity-head')
    secondCityHead.innerHTML = data[1].name
    const secondCityIcon = document.getElementById('secondCity-icon')
    secondCityIcon.src = `http://openweathermap.org/img/wn/${data[1].weather[0].icon}@2x.png`
    secondCityIcon.alt = data[1].weather[0].description
    const secondCityTemp = document.getElementById('secondCity-temp')
    secondCityTemp.innerHTML = data[1].main.temp
    const secondCityDesc = document.getElementById('secondCity-desc')
    secondCityDesc.innerHTML = data[1].weather[0].main
    
    //thirdCity
    const thirdCityHead = document.getElementById('thirdCity-head')
    thirdCityHead.innerHTML = data[2].name
    const thirdCityIcon = document.getElementById('thirdCity-icon')
    thirdCityIcon.src = `http://openweathermap.org/img/wn/${data[2].weather[0].icon}@2x.png`
    thirdCityIcon.alt = data[2].weather[0].description
    const thirdCityTemp = document.getElementById('thirdCity-temp')
    thirdCityTemp.innerHTML = data[2].main.temp
    const thirdCityDesc = document.getElementById('thirdCity-desc')
    thirdCityDesc.innerHTML = data[2].weather[0].main
    
    //fourthCity
    const fourthCityHead = document.getElementById('fourthCity-head')
    fourthCityHead.innerHTML = data[3].name
    const fourthCityIcon = document.getElementById('fourthCity-icon')
    fourthCityIcon.src = `http://openweathermap.org/img/wn/${data[3].weather[0].icon}@2x.png`
    fourthCityIcon.alt = data[3].weather[0].description
    const fourthCityTemp = document.getElementById('fourthCity-temp')
    fourthCityTemp.innerHTML = data[3].main.temp
    const fourthCityDesc = document.getElementById('fourthCity-desc')
    fourthCityDesc.innerHTML = data[3].weather[0].main
}) 
