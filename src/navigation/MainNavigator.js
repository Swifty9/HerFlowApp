import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
