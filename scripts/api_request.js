async function getData() {

  const inputCity = document.getElementById("city").value;

  // const url = "http://www.prevision-meteo.ch/services/json/[nom_ville][lat=xx.xxxlng=yy.yyy]";
  const url = "https://www.prevision-meteo.ch/services/json/" + inputCity;

  try {

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json

  } catch (error) {
    console.error(error.message);
  }

}


const submitButton = document.getElementById("submit");

submitButton.addEventListener('click', async function (e) {

  e.preventDefault();

  const data = await getData();

  const city = document.getElementById('cityResult');
  city.innerText = data.city_info.name;

  const temperature = document.getElementById('temperature');
  temperature.innerText = data.current_condition.tmp + " °C";

  const condition = document.getElementById('condition');
  condition.innerText = data.current_condition.condition;

  const icon = document.getElementById('icon');
  icon.src = data.current_condition.icon;

  const humidity = document.getElementById('humidity');
  humidity.innerText = data.current_condition.humidity + " %";

  const wind = document.getElementById('wind');
  wind.innerText = data.current_condition.wnd_spd + " km/h";

  console.log(city);

})


