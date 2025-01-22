import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Task4 from "./Tasks/Task4/Task4";
import Counter from "./Tasks/Task5/Task5";
import Debounce from "./Tasks/BonusTask/Debounce";
import Homepage from "./Pages/Homepage";

function App() {
  // const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      {/* <ThemeContext.Provider value={theme}> */}
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />}>
              Homepage
            </Route>
            <Route path="/counter" element={<Counter />}>
              Counter
            </Route>
            <Route path="/weatherApp" element={<Task4 />}>
              Weather App
            </Route>
            <Route path="/debounce" element={<Debounce />}>
              Debounce App
            </Route>
          </Routes>
        </Router>
      {/* </ThemeContext.Provider> */}
    </div>
  );
}

export default App;
