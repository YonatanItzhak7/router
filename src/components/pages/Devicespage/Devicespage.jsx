import "./Devicespage.css";
import {useContext} from "react";
import DevicesCard from "../../featurs/Devices-card/Devices.card";
import {devicesContext} from '../../../context/devices.context/Devices'

function Devicespage() {
  const {devices,setDevices} = useContext(devicesContext)
  return (
    <div className="devicespage">
      {devices?.map(deviceItem =>
         <DevicesCard devices ={deviceItem}/>
      )}
    </div>
  );
};

export default Devicespage;
