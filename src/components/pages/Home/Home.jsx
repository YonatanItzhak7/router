import "./Home.css";
import {devicesContext} from "../../../context/devices.context/Devices";
import {useContext} from 'react';

function Home() {
  const obj = useContext(devicesContext)
  return (
    <div className="Home">
      <h1>Home</h1>
      {console.log(obj)}
    </div>
  );
};

export default Home;
