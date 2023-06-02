import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const AnimatedBarChart = ({ color, percentage, maxValue }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const barWidth = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', `${percentage}%`],
    extrapolate: 'clamp',
  });

  const animateBar = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: percentage,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.delay(4000),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      animateBar();
    });
  };

  useEffect(() => {
    animateBar();
  }, []);

  return (
    <View style={styles.container}>
      <Svg style={styles.chart}>
        <Rect width="100%" height="100%" fill="#F0F0F0" />
        <AnimatedRect width={barWidth} height="100%" fill={color} />
      </Svg>
    </View>
  );
};

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
  },
  chart: {
    width: '100%',
    height: '100%',
  },
});

export default AnimatedBarChart;
