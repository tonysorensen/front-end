// Import Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import PrivateRoute from "../utilities/PrivateRoute";

// Import Assets
import "./App.css";

// Import Components
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Listings from "./components/Listings";

// Import Assets
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/listings">
          <Listings />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </div>
    </Router>
  );
}

export default App;
