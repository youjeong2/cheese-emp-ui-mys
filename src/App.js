import React, { useState } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
// import { Nav } from './components'
import { Header, Footer } from './components/cmm'
import {Home, User, Cheese, Survey, Review} from './templates'
import {Login, Signup, UserDetail, UserInfo } from './containers/usr/user'
// import { Cart } from "./containers/cop/cart";
// import { Cart } from "./templates/Cart";

// import { HelmetProvider } from 'react-helmet-async';
// import ProductsContextProvider from './containers/cop/cart_1/contexts/ProductsContextProvider';
// import CartContextProvider from './containers/cop/cart_1/contexts/CartContextProvider';

export default function App(){
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>
        <BrowserRouter>
                {/* <Header /> */}
                <Header isAuth = {loggedIn}/>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Redirect from = {'/home'} to={'/'}/> 
                    <Route path='/login' component={Login}></Route>
                    <Route path='/signup' component={Signup}></Route>
                    <Route path='/user-detail' component={ UserDetail }/>
                    <Route path='/user-info' component={UserInfo}/>
                    {/* <Route path='/modifying-user-info' component={ UserModify }/>
                    <Route path='/membership-withdrawal' component={ UserWithdrawal }/>
                    <Route path='/userlist' component={ UserList }/> */}

                    <Route path='/survey' component={Survey}></Route>
                    <Route path='/cheese' component={Cheese}></Route>
                    <Route path='/review' component={Review}></Route>

                    {/* <Route path='/cart' component={Cart}></Route> */}
                    {/* <HelmetProvider>
                        <ProductsContextProvider>
                            <CartContextProvider>
                            <Route path="/cart" component={Cart} />
                            </CartContextProvider>
                        </ProductsContextProvider>
                    </HelmetProvider> */}

                    {/* <Route path="/cart" component={Cart} /> */}

                 </Switch>
                 <Footer />
        </BrowserRouter>

</>)}