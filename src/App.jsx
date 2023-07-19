import WeatherApp from "./components/WeatherApp"
import celsius from "./assets/celsius.svg"
const App = () => {

  return (
    <div className="app">
      <h1>WeatherApp City<img src={celsius} alt="icon" /></h1>
      <WeatherApp />
    </div>
  )
}

export default App
