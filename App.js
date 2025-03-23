import React, { useEffect } from 'react';  // ✅ Import useEffect
import { View, Text } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import { supabase } from './src/lib/supabase';

export default function App() {
    return (
    <MainNavigator />  
  );
}
