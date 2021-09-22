import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import "./styles/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Audio from "./pages/Audio";
import Boshqaruv from "./pages/Boshqaruv";

function App() {
  return (
    <Router className="c">
      <Header />
      {/* <Route exact={true} path="/">
        <Login />
      </Route>
      <Route path="/about">
        <Header />
        <About />
        <Footer />
      </Route>
      <Route path="/audio">
        <Header />
        <Audio />
        <Footer />
      </Route>
      <Route path="/boshqaruv">
        <Header />
        <Boshqaruv />
        <Footer />
      </Route> */}
    </Router>
  );
}

export default App;
