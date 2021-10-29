import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Guides from './Pages/Guides/Guides';
import Contact from './Pages/Contact/Contact';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Tours from './Pages/Tours/Tours';
import AddService from './Pages/AddService/AddService';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/tours">
              <Tours></Tours>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/guides">
              <Guides></Guides>
            </Route>
            <Route path="/addservice">
              <AddService></AddService>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
