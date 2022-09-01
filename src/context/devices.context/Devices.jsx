
import {createContext,useState,useEffect} from 'react'
import devicesApi from '../../services/devices.api'


export const devicesContext = createContext();

function DevicesProvider({children}) {
  const [devices,setDevices] = useState([])
  useEffect(()=>{
    devicesApi()
    .then((response) => setDevices(response));
    },[])
  return (
    <devicesContext.Provider value={{devices,setDevices}}>
      {children}
      </devicesContext.Provider>
  );
};

export default DevicesProvider;



