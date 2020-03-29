import React from "react";
import { Switch, Route } from "react-router-dom";

import Loadable from "../util/loadable"

import Loader from "../components/shared/Loader"

//import screens
import Login from "../screens/login";
const Home = Loadable(() => import("../screens/home"), { fallback: Loader })
const Orders = Loadable(() => import("../screens/order"))
const UserProfile = Loadable(() => import("../screens/userprofile"))

export default function () {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/orders" component={Orders} />
            <Route path="/profile" component={UserProfile} />
        </Switch>
    )
}