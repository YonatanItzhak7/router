import {Header,Main,Footer} from './components/pages/index'

function Routing({root}) {
  switch (root) {
    case "Header":
      return <Header/>
      case "Main":
      return <Main/>
      case "Footer":
        return <Footer/>
    default:
      break;
  }
};

export default Routing;


