/*fetch('https://api.openweathermap.org/data/2.5/weather?lat=-37.38&lon=-70.27&appid=ad9f36461d6a4b8604f136bb4e28d6f9')
  .then(response => response.json())
  .then(weather => mostrarClima(weather))
  .catch(error => console.log("Ocurrió un error", error));

const mostrarClima = (weather) => {
  console.log(weather)
  let tabla = `
  <div class="container mt-4 shadow-lg p3 mb-5 bg-body rouded">
    <table class="table table-border table-striped">
      <thead>
        <tr>
          <th>Coord</th>
          <th>Main</th>
          <th>Weather</th>
        </tr>
      </thead>
      <tbody></tbody>   
    </table>
  </div>`;
  for (let i = 0; i < weather.length; i++) {
    tabla += `
    <tr>
    <td> ${weather[i].coord} </td>
    <td> ${weather[i].main} </td>
    <td> ${weather[i].weather} </td>
    </tr>
    `
  }
  document.getElementById('weather').innerHTML = tabla;
};
let url = 'https://api.openweathermap.org/data/2.5/weather?lat=-37.38&lon=-70.27&appid=ad9f36461d6a4b8604f136bb4e28d6f9'  //variable donde hacemos referencia al origen de los datos
        fetch(url) //solicitud a la url (promesa)
            .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
            .then(data => mostrarData(data)) //llamamos a la fución mostrardata()
            .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch
            
        const mostrarData = (data) => {
            console.log(data)
            let body = ''
            for (let i = 0; i<data.length; i++){
                // body = body + ...
                body += `<tr> 
                    <td>${data[i].main}</td>
                    <td>${data[i].icon}</td>
                    <td>${data[i].description}</td>
                    </tr>`
            }
            
            document.getElementById('data').innerHTML = body
        }*/

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=-37.38&lon=-70.27&appid=ad9f36461d6a4b8604f136bb4e28d6f9&lang=es&units=metric`
)
  .then((response) => response.json())
  .then((clima) => mostrarClima(clima))
  .catch((error) => console.log("Ocurrió un error", error));

const mostrarClima = (clima) => {
  console.log(clima.main.temp);
  let info = clima.main.temp;
  document.getElementById("climaChosmalal").innerHTML = info;
};

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=-37.38&lon=-70.27&appid=ad9f36461d6a4b8604f136bb4e28d6f9&lang=es&units=metric`
)
  .then((response) => response.json())
  .then((clima) => mostrarSenTer(clima))
  .catch((error) => console.log("Ocurrió un error", error));

const mostrarSenTer = (clima) => {
  console.log(clima.main.feels_like);
  let info = clima.main.feels_like;
  document.getElementById("climaChosmalal1").innerHTML = info;
};

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=-37.38&lon=-70.27&appid=ad9f36461d6a4b8604f136bb4e28d6f9&lang=es&units=metric`
)
  .then((response) => response.json())
  .then((clima) => mostrarEstado(clima))
  .catch((error) => console.log("Ocurrió un error", error));

const mostrarEstado = (clima) => {
  console.log(clima.weather[0].description);
  let info = clima.weather[0].description;
  document.getElementById("climaChosmalal2").innerHTML = info;
};
