
//connexion à l'ApI de prévision météo
//const est la variable qui récupère la valeur de l'input de la ville
//concaténation de l'url avec la ville entrée par l'utilisateur

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



// let meteoDate = getData().current_condition.date;

const today = document.getElementById('date-du-jour');
let date = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); // "Jul 2021 Friday"
today.innerText = date;

//element bouton mis en const
//déclenclement de l'événement au clic sur le bouton
const submitButton = document.getElementById("submit");

submitButton.addEventListener('click', async function (e) {

  e.preventDefault();

  //regroupe toutes les données venant de l'API dans une variable data
  const data = await getData();

  //etape1 recupération de l'element HTML par son id
  //etape2 modification de l'élément HTML avec les données de l'API
  //etape3 affichage de la ville dans le DOM
  const city = document.getElementById('cityResult');
  city.innerText = data.city_info.name;

  // const today = document.getElementById('date-du-jour');
  // today.innerText = data.current_condition.date;


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




// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const today = new Date();
// const formattedDate = today.toLocaleDateString("fr-FR", options);
// console.log(formattedDate);