import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./component/Header";
import Preloader from "./component/Preloader";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <Router>
      {/* <Preloader/> */}
      {/* <Header/> */}
      {/* <Login/> */}
      <Signup/>
    </Router>
  );
}

export default App;
