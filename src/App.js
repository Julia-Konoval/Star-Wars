import "./App.css";
import Home from "./Home";
import PlanetInfo from "./PlanetInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/planet/:name" component={PlanetInfo} />
      </Switch>
    </Router>
  );
}

export default App;
