import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import StepCounter from '@/components/StepCounter';
import LottieView from 'lottie-react-native';
import CircleProgressBar from '@/components/CircleProgressBar';

function home() {
  const progressPercentage = 85;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Adım Sayıcı Uygulaması</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.stepContainer}>
          <CircleProgressBar percentage={progressPercentage} />
          <StepCounter />
        </View>
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            style={styles.animation}
            source={require('/Users/halil/Desktop/step-counter-app/assets/Animation.json')}
          />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  stepContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  animationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  animation: {
    width: 200,
    height: 200,
    backgroundColor: '#eee',
  },
  
});

export default home;