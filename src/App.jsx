import "./App.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current_weather/CurrentWeather";
//event listenet
const handleOnSearchChange = (searchData) => {

  const [lat, lon] = searchData.value.split(" ");
  
  const curentWeatherFetch= fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)
};

function App() {
  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather/>
      </div>
    </>
  );
}

export default App;
