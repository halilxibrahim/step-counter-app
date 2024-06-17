import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import StepCounter from '@/components/StepCounter';
import LottieView from 'lottie-react-native';
import CircleProgressBar from '@/components/CircleProgressBar';


function home() {
  const progressPercentage = 85; 

  return (
    <View style={styles.container}>
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
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Halil İbrahim. Tüm hakları saklıdır.</Text>
      </View>
    </View>

  )
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
    stepCircle: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: '#3498db',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      position: 'absolute',
    },
    stepText: {
      fontSize: 36,
      color: '#fff',
      fontWeight: 'bold',
    },
    stepLabel: {
      fontSize: 16,
      color: '#333',
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
    footer: {
      backgroundColor: '#2e4e6e',
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerText: {
      color: '#fff',
      fontSize: 12,
      padding: 10,
    },
  });
  
  
export default home;