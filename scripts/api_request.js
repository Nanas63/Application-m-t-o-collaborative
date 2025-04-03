async function getData(city) {

  // const url = "http://www.prevision-meteo.ch/services/json/[nom_ville][lat=xx.xxxlng=yy.yyy]";
  const url = "https://www.prevision-meteo.ch/services/json/" + city;

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

// getData("paris").then((el) => console.log(el.current_condition))

document.addEventListener('DOMContentLoaded', async () => {

  const data = await getData('clermont-ferrand');
  console.log(data);

  console.log(data.current_condition.tmp);

  const body = document.querySelector('body');
  const divImage = document.createElement('img');
  divImage.id = 'test';
  divImage.src = data.current_condition.icon;
  body.appendChild(divImage);



})




