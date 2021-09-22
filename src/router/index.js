import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../pages';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
