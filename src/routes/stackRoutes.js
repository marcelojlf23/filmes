import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Detail from '../pages/Details';
import Search from '../pages/Search';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return ( 
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home} 
                options={{
                    headerShown: false,
                    title: 'Detalhes'
                }}
            />

            <Stack.Screen
                name="Details"
                component={Detail}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: "Sua busca",
                }}
            />
        </Stack.Navigator>    
    )
}
 
export default StackRoutes;