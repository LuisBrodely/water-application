import * as React from 'react';
import { Text, StatusBar, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Donut from '../components/Graphs/Donut';

const data = [{
  percentage: 8,
  color: 'tomato',
  max: 100, 
  radius: 100
}, {
  percentage: 14,
  color: 'skyblue',
  max: 100
}, {
  percentage: 20,
  color: 'gold',
  max: 100
}, {
  percentage: 20,
  color: '#222',
  max: 100
}]

export default function GraphsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
        {data.map((p, i) => {
          return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} radius={p.radius}/>
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
