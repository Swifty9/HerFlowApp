import React, { useEffect } from 'react';  // ✅ Import useEffect
import { View, Text } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import { supabase } from './.env/supabase.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
    return (
    <MainNavigator />  
  );
}
