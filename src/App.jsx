import WeatherApp from "./components/WeatherApp"
import celsius from "./assets/celsius.svg"
import FooterWeather from "./components/FooterWeather"
const App = () => {

  return (
    <div className="app">
      <h1>WeatherApp City<img src={celsius} alt="icon" /></h1>
      <WeatherApp />
      <FooterWeather />
    </div>
  )
}

export default App
