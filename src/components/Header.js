import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from "expo-constants";

export default function Header() {
  return (
    <View
      style={{
        ...styles.container,
        paddingVertical: 12,
        flexDirection: 'row', 
        alignItems: 'center'
      }}
    >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
