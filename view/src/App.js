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
import Maqolalar from "./pages/Maqolalar";
import Maqola from "./pages/Maqola";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/darsliklar" component={Darslik} />
        <Route exact path="/maqola" component={Maqolalar} />
        <Route path="/dars/:id" component={Lessons} />
        <Route exact path="/maqola/:id" component={Maqola} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
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
