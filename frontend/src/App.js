import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./component/Header";
import Preloader from "./component/Preloader";

function App() {
  return (
    <Router>
      {/* <Preloader/> */}
      <Header/>
    </Router>
  );
}

export default App;
