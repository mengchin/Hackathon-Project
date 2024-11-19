
const x = document.getElementById("getLocation");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


// Array to store latitude and longitude
let coordinates = [];

// Function to get current location
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Get latitude and longitude
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      
      // Store them in the array
      coordinates = [lat, long];
      
      console.log("Latitude and Longitude:", coordinates);
    }, (error) => {
      console.error("Error getting location:", error);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
getCurrentLocation();


// Call the function
getLocation();

// Function to get current location and fetch weather data
function getWeatherData() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // Get latitude and longitude from the user's current location
            const coords_x = position.coords.latitude.toString();
            const coords_y = position.coords.longitude.toString();

            // Construct the weather and rain URLs
            const weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${coords_x}&longitude=${coords_y}&current=weathercode`;
            const rain_url = `https://api.open-meteo.com/v1/forecast?latitude=${coords_x}&longitude=${coords_y}&current=rain`;

            // Fetch weather data
            $.ajax({
                method: 'GET',
                url: weather_url,
                success: function (data) {
                    // Retrieve the weather code from the API response
                    const weather_labels = data.current.weathercode;

                    // Define WMO code mapping (example values, add more as needed)
                    // Define WMO_code mapping (example)
                     const WMO_code = {
                        '0':'Clear sky',
                        '1':'Mainly clear, partly cloudy, and overcast',
                        '2': 'Mainly clear, partly cloudy, and overcast',
                        '3': 'Mainly clear, partly cloudy, and overcast',
                        '45': 'Fog and depositing rime fog',
                        '48': 'Fog and depositing rime fog',
                        '51': 'Mainly clear, partly cloudy, and overcast',
                        '53': 'Drizzle: Light, moderate, and dense intensity',
                        '55': 'Drizzle: Light, moderate, and dense intensity',
                        '56': 'Freezing Drizzle: Light and dense intensity',
                        '57': 'Freezing Drizzle: Light and dense intensity',
                        '61': 'Rain: Slight, moderate and heavy intensity',
                        '63': 'Rain: Slight, moderate and heavy intensity',
                        '65': 'Rain: Slight, moderate and heavy intensity',
                        '66': 'Freezing Rain: Light and heavy intensity',
                        '67': 'Freezing Rain: Light and heavy intensity',
                        '57': 'Freezing Drizzle: Light and dense intensity',
                        '71': 'Snow fall: Slight, moderate, and heavy intensity',
                        '73': 'Snow fall: Slight, moderate, and heavy intensity',
                        '75': 'Snow fall: Slight, moderate, and heavy intensity',
                        '77': 'Snow grains',
                        '80': 'Rain showers: Slight, moderate, and violent',
                        '81': 'Rain showers: Slight, moderate, and violent',
                        '82': 'Rain showers: Slight, moderate, and violent',
                        '85': 'Snow showers slight and heavy',
                        '86': 'Snow showers slight and heavy',
                        '95*': 'Thunderstorm: Slight or moderate',
                        '96':  'Thunderstorm with slight and heavy hail',
                        '99*': 'Thunderstorm with slight and heavy hail',
                    }
                    // Map the weather code to a description
                    const weatherStatus = WMO_code[weather_labels] 

                    // Create a div to display the weather status
                    const weather = document.createElement('div');
                    weather.innerHTML = `<div>Current weather in your area: ${weatherStatus}</div>`;
                    const weather_stat = document.getElementById("weatherStatus");
                    if (weather_stat) {
                        weather_stat.appendChild(weather);
                    } else {
                        console.error("Element with ID 'weatherStatus' not found.");
                    }
                },
                error: function (error_data) {
                    console.log("Error fetching weather data:", error_data);
                }
            });

            // Fetch temperature data

            // Fetch rain data
            $.ajax({
                method: 'GET',
                url: rain_url,
                success: function (data) {
                    console.log("Rain data:", data);
                    raintatus = data.current.rain 
                    // Create a div to display the  rain status
                    const rain= document.createElement('div');
                    rain.innerHTML =`
                        <div>Rain Sum: ${raintatus} mm </div>
                        `
                    const rain_stat = document.getElementById("weatherStatus")
                    rain_stat.appendChild(rain)      

                },
                error: function (error_data) {
                    console.log("Error fetching rain data:", error_data);
                }
            });

        }, (error) => {
            console.error("Error getting location:", error);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

// Call the function to get weather data based on the user's current location
getWeatherData();
