import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function InformationCard({ title, imgUrl, description }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("InformationStack", {
          title,
          imgUrl,
          description,
        })
      }
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.img}
      />
      <View style={styles.box}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>Hola a</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 244,
    marginRight: 12,
    backgroundColor: "white",
    borderRadius: 8,
  },
  img: {
    width: 244,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
    height: 144,
  },
  box: {
    marginTop: 12,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  title: {
    color: "#444262",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#444262",
    fontSize: 14,
    fontWeight: "400",
  },
});
