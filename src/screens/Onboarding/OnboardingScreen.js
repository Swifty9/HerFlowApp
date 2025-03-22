import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../screens/constants/theme';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to HerFlow!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background },
  text: { color: COLORS.primary, fontSize: 20 },
});

export default OnboardingScreen;
