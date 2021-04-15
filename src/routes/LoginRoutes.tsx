import { createStackNavigator } from "@react-navigation/stack";
import Appointment from "../pages/Appointment";
import Branchs from "../pages/Branchs";
import Detail from "../pages/Home";
import Login from "../pages/Login";
import Phone from "../pages/Phone";
import Timeline from "../pages/Timeline";
import React from 'react'

const LoginRoutes = () => {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator initialRouteName="login">
            <Screen options={{ headerShown: false }} name="login" component={Login} />
            <Screen options={{ headerShown: false }} name="phone" component={Phone} />
            <Screen options={{ headerShown: false }} name="group" component={Timeline} />
            <Screen options={{ headerShown: false }} name="appointment" component={Appointment} />
            <Screen options={{ headerShown: false }} name="branch" component={Branchs} />
        </Navigator>
    )
}

export default LoginRoutes