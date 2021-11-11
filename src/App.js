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
            <Route exact path="/property">
             <Property></Property>
            </Route>
            <Route exact path="/review">
             <Review></Review>
            </Route>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/properties/:serviceId">
              <PropertyDetails></PropertyDetails>
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
