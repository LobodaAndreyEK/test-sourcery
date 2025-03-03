import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getWeatherData() {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
      );
      const data = await response.json();
      setData(data.current_weather);
    }
    getWeatherData();
  }, []);

  return (
    <div>
      <h2 className="page-heading">Home</h2>
      <span>Some lorem ipsum dolor sit amet</span>
      {!!data && (
        <div>
          <h3>Current temperature is {data.temperature} •C</h3>
          <h3>Current wind speed is {data.windspeed} KM/H</h3>
        </div>
      )}
    </div>
  );
}
