

const API__KEY = '3661cff28cddbd7f762607cf5403bbb1'
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=49.4567&lon=35.1295&appid=${API__KEY}`

const DOM_town = document.querySelector('.wthr-body__title')
const DOM_wthr = document.querySelector('.wthr-body__descr')
const DOM_img = document.querySelector('.wthr-body__img')
const DOM_temp__now = document.querySelector('.wthr-tepm__now')
const DOM_tepm__max = document.querySelector('.wthr-tepm__max')
const DOM_tepm__min = document.querySelector('.wthr-tepm__min')
const DOM_info__wind = document.querySelector('.wthr-info__wind span')
const DOM_info__hum = document.querySelector('.wthr-info__hum span')
const DOM_nfo__precip = document.querySelector('.wthr-info__precip span')

// http://openweathermap.org/img/wn/04n@2x.png
axios.get(URL)
  .then(function (response) {
    
    console.log(response.data);
    DOM_town.innerHTML = response.data.name
    DOM_wthr.innerHTML = response.data.weather[0].description
    DOM_temp__now.innerHTML = response.data.main.temp
    DOM_tepm__max.innerHTML = response.data.main.temp_max
    DOM_tepm__min.innerHTML = response.data.main.temp_min
    DOM_info__hum.innerHTML = response.data.main.humidity
    DOM_info__wind.innerHTML = response.data.wind.speed
    DOM_img.src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` 
    DOM_nfo__precip.innerHTML = response.data.rain
  })
  .catch(function (error) {

    console.log(error);
  })
  .finally(function () {

  });

  // async function getUser() {
  //   try {
  //     const response = await axios.get('/user?ID=12345');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

console.warn('JS is RUNED')