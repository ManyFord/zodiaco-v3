import Home from '../pages/Home'
import Timeline from '../pages/Timeline'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginRoutes from './LoginRoutes'
import React from 'react'

const { Screen, Navigator } = createDrawerNavigator()

const MainRoutes = () => {
    return (
        <Navigator initialRouteName="home" screenOptions={{ swipeEnabled: false }}>
            <Screen options={{ drawerLabel: "Início" }} name="home" component={Home} />
            <Screen options={{ drawerLabel: "Cronograma" }} name="timeline" component={Timeline} />
            <Screen options={{ drawerLabel: ''}}  name="loginstack" component={LoginRoutes} />
        </Navigator>
    )
}

export default MainRoutes