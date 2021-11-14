import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import MyOrder from './Pages/User/MyOrder/MyOrder';
import NotFound from './Pages/NotFound/NotFound';
import Property from './Pages/Property/Property/Property'
import ManageAllOrders from './Pages/User/ManageAllOrders/ManageAllOrders';
import AddNewService from './Pages/User/AddNewService/AddNewService';
import PropertyDetails from './Pages/Property/PropertyDetails/PropertyDetails';
import Review from './Pages/Home/Review/Review';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import ManageProperty from './Pages/User/ManageProperty/ManageProperty';


function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/property">
             <Property></Property>
            </Route>
            <Route  path="/login">
              <LogIn></LogIn>
            </Route>
            <Route  path="/register">
              <Register></Register>
            </Route>
            <Route  path="/about">
              <About></About>
            </Route>
            <PrivateRoute  path="/properties/:serviceId">
              <PropertyDetails></PropertyDetails>
            </PrivateRoute>
            <PrivateRoute  path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
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
