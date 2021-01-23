import * as React from 'react';

import ApiContainer from './App/Screen/ApiContainer';
import Details from './App/Screen/Details';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const navOptionHandler = ()=>(
  {
    headerShown: false
  }
)

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="ApiContainer">
          <Stack.Screen name="ApiContainer" component={ApiContainer} options={navOptionHandler}/>
          <Stack.Screen name="Details" component={Details} options={navOptionHandler}/>
          
        </Stack.Navigator>
    </NavigationContainer>
  );
}