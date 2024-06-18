import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Link } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const App: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            loop
            style={styles.animation}
            source={require('/Users/halil/Desktop/step-counter-app/assets/Animation.json')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Giriş Yap"
            onPress={() => router.push('/home')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 10,
  },
  animationContainer: {
    alignItems: 'center',
    marginBottom:70,
  },
  animation: {
    width: 600,
    height: 600,
    backgroundColor: '#eee',
    borderRadius:999,
  },
  buttonContainer: {
    position: 'absolute', // Butonun sabit bir konumda kalmasını sağlar
    bottom: 0, // Butonun ekranın altından 20 birim yukarıda olmasını sağlar
    left: 0,
    right: 0,
    padding:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;