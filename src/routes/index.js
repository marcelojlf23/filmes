import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Movies from '../pages/Movies';
import StackRoutes from './stackRoutes';

const Drawer = createDrawerNavigator();

function Routes() {
    return ( 
        <Drawer.Navigator>
            <Drawer.Screen 
                name="HomeDrawer"
                component={StackRoutes} 
            /> 
            
            <Drawer.Screen 
                name="Movies"
                component={Movies} 
            />  
        </Drawer.Navigator>    
    )
}
 
export default Routes;