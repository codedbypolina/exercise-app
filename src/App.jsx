import "./App.css";
// "react-router-dom" allows to create different pages in React
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Duration from "./components/DurationExercise";
import Home from "./components/Home";
import Repetition from "./components/RepetitionExercise";
import Countdown from "./components/Countdown";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/duration">
            <Duration />
          </Route>
          <Route exact path="/repetition">
            <Repetition />
          </Route>
          <Route exact path="/countdown">
            <Countdown />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
