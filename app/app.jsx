import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../src/screens/HomeScreen';
import WorkoutListScreen from '../src/screens/WorkoutListScreen';
import WorkoutDetailScreen from '../src/screens/WorkoutDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
      <Stack.Screen name="WorkoutDetailScreen" component={WorkoutDetailScreen} />
    </Stack.Navigator>
  );
}