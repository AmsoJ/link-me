import React, {useState, useEffect} from "react";
import Loading from "./Components/Loading";
import {Route, Routes} from 'react-router-dom';
// the components
import Home from "./Components/Home";
import Header from "./Components/Header";
import Network from "./Components/Network";
import Jobs from "./Components/Jobs";
import Notifications from "./Components/Notifications";
import Messaging from "./Components/Messaging";

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    // get random time
    let time = Math.floor((Math.random() * 3000) + 3000);
    setTimeout(() => {
      setLoading(false);
    }, time);
  }, []);

  return (loading ? <Loading /> : 
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home title="Home was changed" />}  />
      <Route path="/network" element={<Network />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/messaging" element={<Messaging />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  </>)
  
}
export default App;
