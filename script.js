document.getElementById("obtener-clima").addEventListener("click", () => {
    const city = document.getElementById("ciudad-input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f5a506a3c26bfa382d44b52016d0037`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("info-clima");
            const temperature = Math.round(data.main.temp - 273.15); // Convierte a Celsius
            const description = data.weather[0].description;
            const {weather:[arr]} = data
            weatherInfo.innerHTML = `
            <p>El clima en ${city} es de: ${temperature}°C</p>
            <img src= "https://openweathermap.org/img/wn/${arr.icon}@2x.png">
            `;
        })
        .catch(error => {
            alert("No se encontró la ciudad")
        });
});

const cityInput = document.getElementById("ciudad-input");

cityInput.addEventListener("change", function() {
    
    let cityName = cityInput.value;

    // Formatea el nombre de la ciudad para que la primera letra esté en mayúscula
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

    // Asigna el nombre de la ciudad formateado de nuevo al campo de entrada
    cityInput.value = cityName;
});

// obtener info al darle enter
const ingresoCiudad = document.getElementById("ciudad-input");
const botonObtenerClima = document.getElementById("obtener-clima");

// Agregar un oyente de eventos al campo de entrada para detectar la tecla "Enter"
ingresoCiudad.addEventListener("keyup", function(event) {
    // Verificar si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {
        // Simular un clic en el botón
        botonObtenerClima.click();
    }
});

