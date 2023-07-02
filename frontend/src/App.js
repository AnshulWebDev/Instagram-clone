import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./component/Header";
import Preloader from "./component/Preloader";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      {/* <Preloader/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Home/>
      
    </Router>
  );
}

export default App;
