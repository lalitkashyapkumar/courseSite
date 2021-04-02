import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./components/header";
import { NavContainer } from "./components/nav-component";
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <NavContainer/>
      </div>
    </Router>
  );
}

export default App;
