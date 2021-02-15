import "./App.css";
import Covid from "./components/covid";
import Rocket from "./components/rocket";
import Assignments from "./components/assignments";
import Weather from "./components/weather";
import Calendar from "./components/calendar";
import News from "./components/news";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Covid />
        <Rocket />
        <Assignments />
        <Weather />
        <Calendar />
        <News />
      </div>
    </div>
  );
}

export default App;
