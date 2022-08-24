import { Header, Main, Footer } from "./components/pages";
import {Routes, Route} from 'react-router-dom'

export default function Router() {
    return(
      <Routes>
        <Route path="Header" element={<Header/>}/>
        <Route path="Main" element={<Main/>}/>
        <Route path="Footer" element={<Footer/>}/>
      </Routes>
    )
  }

