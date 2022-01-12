import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import GetStarted from '../../pages/GetStarted';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Profile from '../../pages/Profile/index';
import EditProfile from '../../pages/Profile/edit-profile';
import Reserve from '../../pages/Reserve/index';
import ViewRestaurant from '../../pages/Reserve/viewRestaurant';
import Menu from '../../pages/Menu/index';



const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
                <Stack.Screen name="Reserve" component={Reserve} options={{ headerShown: false }} />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name="ViewRestaurant" component={ViewRestaurant} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;