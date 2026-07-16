import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";  
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;