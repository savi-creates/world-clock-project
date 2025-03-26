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
  let NewYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = londonTime.format("ddd, MMM Do YYYY");
  newYorkTimeElement.innerHTML = londonTime.format("h:mm:ss A");

  // Tokyo
  let tokyoTimeElement = document.querySelector("#time-tokyo");
  let tokyoDateElement = document.querySelector("#city-state-tokyo");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = londonTime.format("ddd, MMM Do YYYY");
  tokyoTimeElement.innerHTML = londonTime.format("h:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);
