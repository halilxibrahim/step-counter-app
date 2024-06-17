// src/components/CircleProgressBar.tsx
import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircleProgressBarProps {
  percentage: number; // Yüzdelik ilerleme oranı girdim
  radius?: number; // Yarıçap girdim
  strokeWidth?: number; // Çizgi kalınlığı
  color?: string; // Renk 
}

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({
  percentage,
  radius = 60,
  strokeWidth = 10,
  color = '#3498db',
}) => {
  const size = radius * 2;
  const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
  const progressOffset = circumference - (circumference * percentage) / 100;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        {/* Arka plan çemberi */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* İlerleme çemberi */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={progressOffset}
        />
      </Svg>
    </View>
  );
};

export default CircleProgressBar;