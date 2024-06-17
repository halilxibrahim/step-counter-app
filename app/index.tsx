import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Link } from 'expo-router';
import home from './(tabs)/home';

const App: React.FC = () => {

  return (
    <View style={styles.container}>
      <Link href="/home">Home</Link>
        <Text>Deneme</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
});

export default App;