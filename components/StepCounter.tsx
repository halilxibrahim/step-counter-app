import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Pedometer } from 'expo-sensors';

const StepCounter = () => {
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    const subscription = Pedometer.watchStepCount(result => {
      setStepCount(result.steps);
    });

    // Pedometer'ın kullanılıp kullanılamayacağını kontrol edin
    Pedometer.isAvailableAsync().then(
      result => {
        console.log(result ? "Adım sayar mevcut" : "Adım sayar mevcut değil");
      },
      error => {
        console.log("Adım sayar durumu kontrol edilirken hata oluştu: ", error);
      }
    );

    return () => {
      subscription && subscription.remove();
    };
  }, []);

  return (
    <View>
      <Text>Atılan Adım:1345{stepCount}</Text>
    </View>
  );
};

export default StepCounter;