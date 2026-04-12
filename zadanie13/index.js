async function getWeather(latitude = 50.29, longitude = 19.1) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Nie udało się pobrać danych pogodowych.");
    }

    const data = await response.json();

    const temperature = data.current.temperature_2m;
    const windSpeed = data.current.wind_speed_10m;

    console.log("POGODA");
    console.log(`Szerokość geograficzna: ${latitude}`);
    console.log(`Długość geograficzna: ${longitude}`);
    console.log(`Temperatura: ${temperature}°C`);
    console.log(`Prędkość wiatru: ${windSpeed} km/h`);
  } catch (error) {
    console.log("Wystąpił błąd podczas pobierania pogody.");
    console.log(error.message);
  }
}

getWeather();
