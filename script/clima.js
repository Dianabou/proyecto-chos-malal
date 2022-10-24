fetch ('https://api.openweathermap.org/data/2.5/weather?lat=-37.38&lon=-70.27&appid=ad9f36461d6a4b8604f136bb4e28d6f9')
 .then(response => response.json())
 .then(clima => mostrarClima(clima))
 .catch(error=> console.log ("Ocurrió un error", error))
const mostrarClima =(clima) => {
  console.log (clima)
  let tabla = ''
  for (let i=0; i< clima.length; i++)
  {
    tabla += `
    <tr>
    <td>${clima[i].coord} </td>
    <td>${clima[i].main} </td>
    <td>${clima[i].weather} </td>
    </tr>
    `
  }
  document.getElementById("climaChosmalal").innerHTML= tabla
} 
