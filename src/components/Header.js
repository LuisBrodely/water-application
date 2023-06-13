import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from "expo-constants";

export default function Header() {
  return (
    <View
      style={{
        ...styles.container,
        paddingVertical: 20,
        backgroundColor: "white",
        flexDirection: 'row', 
        alignItems: 'center'
      }}
    >
      <Icon name={"water"} size={35} color={"#0459C6"} />
      <Text style={{fontSize: 24, fontWeight: '600'}}>ConcienciaAzul</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
