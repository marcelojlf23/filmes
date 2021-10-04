import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Movies from '../pages/Movies';
import StackRoutes from './stackRoutes';

const Drawer = createDrawerNavigator();

function Routes() {
    return ( 
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#090a0e',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#e72f49',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff',
            }}
        >
            <Drawer.Screen 
                name="HomeDrawer"
                component={StackRoutes} 
            /> 
            
            <Drawer.Screen 
                name="Movies"
                component={Movies} 
                options={{
                    title: 'Home'
                }}
            />  
        </Drawer.Navigator>    
    )
}
 
export default Routes;