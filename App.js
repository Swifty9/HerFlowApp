import React, { useEffect } from 'react';  // ✅ Import useEffect
import { View, Text } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import { supabase } from './src/lib/supabase';

export default function App() {
  useEffect(() => {
    const insertTestData = async () => {
      const { data, error } = await supabase
        .from("user")  // 🔄 Replace with your actual table name
        .insert([{ name: "Test User", email: "test@example.com" }]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Inserted Data:", data);
      }
    };

    insertTestData();
  }, []);  // ✅ Runs only once on mount

  return (
    <MainNavigator />  // ✅ Keep this if using navigation, or use the view below.
    
    // If you don't want navigation yet, use this:
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>Supabase Test</Text>
    // </View>
  );
}
