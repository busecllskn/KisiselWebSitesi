import { Redirect, Route} from "react-router-dom";
import Home from "./pages/Home";
import React from "react";  

function App() {
  return (
    <div className="bg-white min-h-screen text-black">
      <Route exact path="/">
          <p>Pekooo</p>
        </Route>
      <Route exact path="/home">
          <Home />
      </Route>
    </div>
  )
}

export default App;
