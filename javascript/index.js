function updateTime() {
  // London
  let londonTimeElement = document.querySelector("#time-london");
  let londonDateElement = document.querySelector("#city-state-london");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("ddd, MMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format("h:mm:ss A");

  // New York
  let newYorkTimeElement = document.querySelector("#time-newyork");
  let newYorkDateElement = document.querySelector("#city-state-newyork");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("ddd, MMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss A");

  // Tokyo
  let tokyoTimeElement = document.querySelector("#time-tokyo");
  let tokyoDateElement = document.querySelector("#city-state-tokyo");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("ddd, MMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  let cityName = event.target.options[event.target.selectedIndex].text;

  if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
    cityName = "";
  }

  let cityTime = moment().tz(cityTimeZone);

  let mainTimeElement = document.querySelector("#main-time");
  let mainDateElement = document.querySelector("#main-date");
  let mainLocationElement = document.querySelector("#main-location");

  mainTimeElement.innerHTML = cityTime.format("h:mm:ss A");
  mainDateElement.innerHTML = cityTime.format("dddd, MMM Do YYYY");
  mainLocationElement.innerHTML = cityName;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
