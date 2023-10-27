import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Donut from "../components/Graphs/Donut";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "@motify/components";
import { useState, useEffect, useContext } from 'react'
import { AppContext } from "../context/Context";
import { SelectList } from "react-native-dropdown-select-list";
import Header from "../components/Header";

import { Rios, Arroyo, Lagos, Manantial, Laguna, Pozo } from "../util/util";

export default function GraphsScreen() {

  const water = [
    { key: "1", value: "Rios" },
    { key: "2", value: "Lagos" },
    { key: "3", value: "Arroyo" },
    { key: "4", value: "Laguna" },
    { key: "5", value: "Manantial" },
    { key: "6", value: "Pozo" },
  ];

  const { selected, setSelected, selected2, setSelected2 } = useContext(AppContext);

  const [arreglo, setArreglo] = useState([])
  
  
  return (
    <ScrollView
      style={{ backgroundColor: "#F2F2F2" }}
      showsVerticalScrollIndicator={false}
    >
      <View>
      <Header></Header>
        <View style={{...styles.margins, marginBottom: 16}}>
          <Text style={{fontSize: 20, color: '#444262'}}>Porcentajes de contaminación en</Text>
          <Text style={{fontSize: 24, color: '#312651', fontWeight: 'bold'}}>Cuerpos de agua en Chiapas</Text>
        </View>
        <View style={{ ...styles.margins, marginVertical: 10 }}>
          <SelectList
            setSelected={(val) => {
              setSelected2(val);
              if(val === 'Rios'){
                setArreglo(Rios)
              } else if (val === 'Arroyo') {
                setArreglo(Arroyo)
              } else if (val === 'Lagos') {
                setArreglo(Lagos)
              } else if (val === 'Pozo') {
                setArreglo(Pozo)
              } else if (val === 'Laguna') {
                setArreglo(Laguna)
              } else if (val === 'Manantial') {
                setArreglo(Manantial)
              } else {
                print('NO')
              }
            }}
            data={water}
            save="value"
            search={false}
            placeholder="Selecciona un tipo"
            searchPlaceholder="Buscar un tipo"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          {arreglo.map((p, i) => {
            return (
              <View style={80 && { width: "50%" }} key={i}>
                <Donut
                  key={i}
                  percentage={p.pollution}
                  color={'#3ECEAB'}
                  delay={500 + 100 * i}
                  max={100}
                  radius={80}
                />
                <Text>{p.value}</Text>
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
          {/*Graficas de barras*/}
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
