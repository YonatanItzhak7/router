import {
  Home,
  About,
  ContactUs,
  PageNotFound,
  Devices,
  Movies
} from "./components/pages";
import { Routes, Route } from "react-router-dom";
import DevicesProvider from "./context/devices.context/Devices";
import MoviesProvider from './context/movies-context/movies.context';

export default function Router() {
  return (
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="About" element={<About />} />
        <Route
          path="Devices"
          element={
            <DevicesProvider>
              <Devices />
            </DevicesProvider>
          }
        />
        <Route
          path="Movies"
          element={
            <MoviesProvider>
              <Movies />
            </MoviesProvider>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
}
