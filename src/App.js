import "./App.css";
import React , { useEffect, useState }from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { auth } from "./firebase";
import Home from "./pages/Home/Home";

function App() {
  const [userName, setUserName] = useState("");
  console.log(userName)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
