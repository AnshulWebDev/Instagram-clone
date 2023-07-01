import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./component/Header";
import Preloader from "./component/Preloader";
import Login from "./component/Login";

function App() {
  return (
    <Router>
      {/* <Preloader/> */}
      <Header/>
      {/* <Login/> */}
    </Router>
  );
}

export default App;
