import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { map, text } from "d3";
import { ScrollView } from "@motify/components";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function InformationStack({navigation}) {
  const {
    params: { title, imgUrl, description },
  } = useRoute();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
    >
      <StatusBar style="light" />
      <Image source={{ uri: imgUrl }} style={{ width: "100%", height: 200 }} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Icon color={'white'} size={25} name="arrow-back"/>
      </TouchableOpacity>
      <Text style={styles.title__img}>Informacion</Text>
      {description.map((texts, index) => (
        <View style={styles.cardBox} key={index}>
          <View style={styles.content}>
            <Text style={styles.title}>{texts.title} </Text>
            <Text style={styles.description}>{texts.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
  },
  box: {
    bottom: 10,
  },
  description: {
    color: "white",
    fontSize: 12,
    fontWeight: "400",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#888",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#2380FB",
    borderRadius: 100,
    position: "absolute",
    marginTop: 50,
    marginLeft: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title__img: {
    marginHorizontal: 15,
    fontSize: 32,
    fontWeight: "800",
    position: "absolute",
    marginTop: 140,
    color: "white",
  },
  cardBox: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    padding: 20,
    marginBottom: 10,
  },
});
