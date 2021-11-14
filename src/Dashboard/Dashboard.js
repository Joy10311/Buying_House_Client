import React from 'react';
import { Switch, Route, Link, useRouteMatch  } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth/UseAuth';
import Review from '../Pages/Home/Review/Review';
import AddNewService from '../Pages/User/AddNewService/AddNewService';
import MakeAdmin from '../Pages/User/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../Pages/User/ManageAllOrders/ManageAllOrders';
import ManageProperty from '../Pages/User/ManageProperty/ManageProperty';
import MyOrder from '../Pages/User/MyOrder/MyOrder';
import Payment from '../Pages/User/Payment/Payment';
import AdminRoute from './AdminRoute/AdminRoute';
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin,logOut} = useAuth();
    return (
        <div>
            <div className="dashboard">
        <div className=" -mt-10 left-0 text-xl   font-medium ">
            <div className=" bg-green-600 text-white background">
               
               
                {
                    admin ? <div>
                        <ul ><Link className="lg:mx-10 mx-3 my-10 block" to={`${url}/allOrders`}>Manage All Orders</Link></ul>
               <ul ><Link className="lg:mx-10 mx-3 my-10 block" to={`${url}/addNew`}>Add Property</Link></ul>
                 
                  <ul><Link className="lg:mx-10 mx-3 my-10 block" to={`${url}/manageProperty`}>Manage Property</Link></ul>
                 
                  <ul><Link className="lg:mx-10 mx-3 my-10 block" to={`${url}/makeAdmin`}>Make Admin</Link></ul>
                    </div> : 
                    <div>
               <ul><Link className=" lg:mx-10 mx-3  my-10 block" to={`${url}/myOrder`}>My Order</Link></ul>
                <ul><Link className="lg:mx-10 mx-3 my-10 block" to={`${url}/pay`}>Payment</Link></ul> 
                <ul><Link className="lg:mx-10 mx-3 my-10 block" to={`${url}/review`}>Rate Us</Link></ul>
                    </div>
                }
                
                <ul> <button onClick={logOut} className="bg-blue-300 text-base mx-3 rounded px-1 py-1 mr-2">Log Out</button></ul>
            </div>
            
        </div>
        <div className="route">
                <Switch>
                    <Route exact path={`${path}/pay`}>
                    <Payment></Payment>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                    <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                    <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/allOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addNew`}>
                    <AddNewService></AddNewService>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProperty`}>
                    <ManageProperty></ManageProperty>
                    </AdminRoute>
                   <AdminRoute path={`${path}/makeAdmin`}>
                       <MakeAdmin></MakeAdmin>
                   </AdminRoute>
                </Switch>
            </div>
    </div>
        </div>
    );
};

export default Dashboard;