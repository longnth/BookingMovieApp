import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Auth from "./Components/Auth/Auth";
import LoginAdmin from "./Components/Dashboard/LoginAdmin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Auth path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginAdmin} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
