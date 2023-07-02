import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./component/Header";
import Preloader from "./component/Preloader";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Cards from "./component/Cards";

function App() {
  return (
    <Router>
      {/* <Preloader/> */}
      {/* <Header/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Home/> */}
      <Cards/>
    </Router>
  );
}

export default App;
