import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

const Step3 = ({ nextStep, prevStep }) => {
  const [hasPCOS, setHasPCOS] = useState(false);
  const [pregnant, setPregnant] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Do you have PCOS or PCOD?</Text>
      <Switch value={hasPCOS} onValueChange={setHasPCOS} />

      <Text style={styles.label}>Are you currently pregnant?</Text>
      <Switch value={pregnant} onValueChange={setPregnant} />

      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={() => nextStep({ hasPCOS, pregnant })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { fontSize: 18, marginBottom: 5 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default Step3;
