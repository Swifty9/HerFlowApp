import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Step4 = ({ formData, navigation, prevStep }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Thank you, {formData.name}!</Text>
      <Button title="Back" onPress={prevStep} />
      <Button title="Finish" onPress={() => navigation.navigate('Home')} /> {/* Navigate to Home */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { fontSize: 20, marginBottom: 20 },
});

export default Step4;
