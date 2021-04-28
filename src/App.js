import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Provider } from "react-redux";
import Header from "./components/header";
import Footer from "./components/footer";
import { NavContainer } from "./components/nav-component";
import store  from "./redux/store";
function App() {
  return (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Header/>
        <NavContainer/>
        <Footer/>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
