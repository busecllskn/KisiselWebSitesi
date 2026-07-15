import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";  

function App() {
  return (
    <div className="bg-white min-h-screen text-black">
      <Switch>  
        <Route exact path="/">
          <Redirect to="/home" /> 
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
