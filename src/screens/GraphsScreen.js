import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Donut from "../components/Graphs/Donut";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "@motify/components";

const data = [
  {
    percentage: 8,
    color: "#3ECEAB",
    max: 100,
    radius: 80,
  },
  {
    percentage: 14,
    color: "#0459C6",
    max: 100,
    radius: 80,
  },
  {
    percentage: 20,
    color: "#056BF0",
    max: 100,
  },
  {
    percentage: 80,
    color: "#58E4C2",
    max: 100,
  },
  {
    percentage: 20,
    color: "#2380FB",
    max: 100,
  },
  {
    percentage: 20,
    color: "#8DEBD4",
    max: 100,
  },
  {
    percentage: 20,
    color: "#D974DB",
    max: 100,
  },
  {
    percentage: 20,
    color: "#6B71C8",
    max: 100,
  },
];

export default function GraphsScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: "#F2F2F2" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text
          style={{
            ...styles.margins,
            fontSize: 24,
            fontWeight: "800",
            width: 310,
            marginBottom: 20,
          }}
        >
          Graficas de los diferentes tipos de cuerpos de agua.
        </Text>

        <Text
          style={{
            ...styles.margins,
            fontSize: 16,
            fontWeight: "800",
            width: 310,
            marginBottom: 10,
            color: "#535353",
          }}
        >
          Graficas de pastel
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          {data.map((p, i) => {
            return (
              <View style={p.radius && { width: "50%" }} key={i}>
                <Donut
                  key={i}
                  percentage={p.percentage}
                  color={p.color}
                  delay={500 + 100 * i}
                  max={p.max}
                  radius={p.radius}
                />
                <Text></Text>
              </View>
            );
          })}
        </View>
        <Text
          style={{
            ...styles.margins,
            fontSize: 16,
            fontWeight: "800",
            width: 310,
            marginBottom: 10,
            color: "#535353",
          }}
        >
          Graficas de barras
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        ></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 40,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  margins: {
    marginHorizontal: 20,
  },
});
