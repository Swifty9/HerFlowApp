import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const OnboardingScreen = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({}); // Stores user input

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data })); // Save data from each step
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <View style={styles.container}>
      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Step4 formData={formData} navigation={navigation} prevStep={prevStep} />}
      <Text style={styles.progressText}>Step {step} of 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  progressText: { textAlign: 'center', marginTop: 10, fontSize: 16, color: 'gray' },
});

export default OnboardingScreen;
