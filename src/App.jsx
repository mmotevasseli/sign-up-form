import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
