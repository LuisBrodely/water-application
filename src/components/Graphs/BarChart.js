import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Rect } from 'react-native-svg';

const BarChart = ({ percentage }) => {
  // Asegurarse de que el porcentaje no sea mayor que 100
  const validPercentage = Math.min(Math.max(percentage, 0), 100);

  const barWidth = 280; // Ancho de la barra fija
  const barHeight = 30; // Altura de la barra
  const barColor = '#312651';

  // Calcula la anchura de la barra en función del porcentaje
  const calculatedWidth = (validPercentage / 100) * barWidth;

  return (
    <View style={styles.container}>
      <Svg height={barHeight} width={barWidth}>
        <Rect width={calculatedWidth} height={barHeight} fill={barColor} />
      </Svg>
      <Text style={styles.label}>{validPercentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default BarChart;
