function updateTime() {
  const cities = [
    { id: "london", zone: "Europe/London" },
    { id: "newyork", zone: "America/New_York" },
    { id: "tokyo", zone: "Asia/Tokyo" },
  ];

  cities.forEach((city) => {
    let timeElement = document.querySelector(`#time-${city.id}`);
    let dateElement = document.querySelector(`#city-state-${city.id}`);
    let cityTime = moment().tz(city.zone);

    timeElement.innerHTML = cityTime.format("h:mm:ss A");
    dateElement.innerHTML = cityTime.format("ddd, MMM Do YYYY");
  });
}

let selectedTimeZone = moment.tz.guess();

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = event.target.options[event.target.selectedIndex].text;

  if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
    cityName = "";
  }

  if (cityTimeZone !== "") {
    event.target.options[0].disabled = true;
  }

  selectedTimeZone = cityTimeZone;

  document.querySelector("#main-location").innerHTML = cityName;
  updateMainClock();
}

function updateMainClock() {
  let cityTime = moment().tz(selectedTimeZone);
  let format = is24HourFormat ? "HH:mm:ss" : "h:mm:ss A";

  document.querySelector("#main-time").innerHTML = cityTime.format(format);
  document.querySelector("#main-date").innerHTML =
    cityTime.format("dddd, MMM Do YYYY");
}

let is24HourFormat = false;

document.querySelector("#twelveHour").classList.add("active");

document.querySelector("#twelveHour").addEventListener("click", () => {
  is24HourFormat = false;
  updateMainClock();
  document.querySelector("#twelveHour").classList.add("active");
  document.querySelector("#twentyFourHour").classList.remove("active");
});

document.querySelector("#twentyFourHour").addEventListener("click", () => {
  is24HourFormat = true;
  updateMainClock();
  document.querySelector("#twentyFourHour").classList.add("active");
  document.querySelector("#twelveHour").classList.remove("active");
});

setInterval(updateMainClock, 1000);
updateMainClock();

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
