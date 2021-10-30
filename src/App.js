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
import Getservices from './Pages/GetServices/Getservices';
import MyOrder from './Pages/User/MyOrder/MyOrder';
import NotFound from './Pages/NotFound/NotFound';
import ManageAllOrders from './Pages/User/ManageAllOrders/ManageAllOrders';
import AddNewService from './Pages/User/AddNewService/AddNewService';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/tours">
              <Tours></Tours>
            </Route>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/guides">
              <Guides></Guides>
            </Route>
            <PrivateRoute exact path="/getservices/:serviceId">
              <Getservices></Getservices>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/allOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addnew">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <Route exact path="/addservice">
              <AddService></AddService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
