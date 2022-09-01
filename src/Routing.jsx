import {
  Home,
  About,
  ContactUs,
  Devices,
  Movies,
} from "./components/pages/index";

function Routing({ root }) {
  switch (root) {
    case "Home":
      return <Home />;
    case "About":
      return <About />;
    case "ContactUs":
      return <ContactUs />;
    case "Devices":
      return <Devices />;
    case "Movies":
      return <Movies />;
    default:
      break;
  }
}

export default Routing;
