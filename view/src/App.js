import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import "./styles/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Audio from "./pages/Audio";
import Boshqaruv from "./pages/Boshqaruv";
import Darslik from "./pages/Darslik";
import TodoList from "./components/Menu";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />

      <Route exact path="/darsliklar" component={Darslik} />
      <Route path="/dars/:id" component={Lessons} />
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
      <Footer />
    </Router>
  );
}

export default App;
