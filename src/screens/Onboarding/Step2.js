import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Step2 = ({ nextStep, prevStep }) => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>When was your last period?</Text>
      <TextInput style={styles.input} value={lastPeriod} onChangeText={setLastPeriod} placeholder="DD-MM-YYYY" />

      <Text style={styles.label}>Average cycle length (in days)</Text>
      <TextInput style={styles.input} value={cycleLength} onChangeText={setCycleLength} keyboardType="numeric" />

      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={() => nextStep({ lastPeriod, cycleLength })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { fontSize: 18, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default Step2;
