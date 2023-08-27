import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import Settings from '../screens/Settings';
import Details from '../screens/Details';
import Shop from '../screens/Shop';
import Chat from '../screens/Chat';
import Live from '../screens/Live';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shop"
          component={Shop}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Live"
          component={Live}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={UserProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
