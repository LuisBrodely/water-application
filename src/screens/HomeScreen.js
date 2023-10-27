import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Information from "../components/Information/Information";
import Wave from "../components/Wave";
import { SelectList } from "react-native-dropdown-select-list";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/Context";
import Header from "../components/Header";
import Tabs from "../components/tabs/Tabs";
import About from "../components/about/About";
import Specifics from "../components/specifics/Specifics";
import InformationCard from "../components/Information/InformationCard";

const tabs = ["Cuidado", "Naturaleza", "Mas informacion"];

const categories = [
  { key: "1", value: "2030", pollution: 100 },
  { key: "2", value: "2029", pollution: 95 },
  { key: "3", value: "2028", pollution: 90 },
  { key: "4", value: "2027", pollution: 85 },
  { key: "5", value: "2026", pollution: 80 },
  { key: "6", value: "2025", pollution: 75 },
  { key: "7", value: "2024", pollution: 70 },
  { key: "8", value: "2023", pollution: 65 },
  { key: "9", value: "2022", pollution: 60 },
  { key: "10", value: "2021", pollution: 55 },
  { key: "11", value: "2020", pollution: 50 },
  { key: "12", value: "2019", pollution: 45 },
  { key: "13", value: "2018", pollution: 40 },
  { key: "14", value: "2017", pollution: 35 },
  { key: "15", value: "2016", pollution: 30 },
  { key: "16", value: "2015", pollution: 10 },
];

const water = [
  { key: "1", value: "Rios" },
  { key: "2", value: "Lagos" },
  { key: "3", value: "Arroyo" },
  { key: "4", value: "Laguna" },
  { key: "5", value: "Manantial" },
  { key: "6", value: "Pozo" },
  { key: "7", value: "Puente" },
];

export default function HomeScreen({ navigation }) {
  const { selected, setSelected, selected2, setSelected2 } =
    useContext(AppContext);

  const [porcentain, setPorcentain] = useState(0);

  const [color, setColor] = useState("#0459C6");

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [data, setData] = useState([

  ]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Cuidado":
        return (
          <Information/>
        );

      case "Naturaleza":
        return (
          <Information/>
        );

      case "Mas informacion":
        return (
          <Information/>
        );

      default:
        return null;
    }
  };

  function getPollutionColor(pollution) {
    if (pollution >= 75) {
      return "#533304";
    } else if (pollution >= 50) {
      return "#3D6A04";
    } else if (pollution >= 25) {
      return "#0459C6";
    } else {
      return "#3ECEAB";
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Header></Header>
        <View style={{ ...styles.margins }}>
          <Text style={{ fontSize: 20, color: "#444262" }}>Bienvenido</Text>
          <Text style={{ fontSize: 24, color: "#312651", fontWeight: "bold" }}>
            Estado del agua en Chiapas
          </Text>
        </View>
        <Text></Text>
        <View style={{ ...styles.margins, marginVertical: 10 }}>
          <SelectList
            setSelected={(val) => {
              setSelected(val);
              const selectedCategory = categories.find(
                (category) => category.value === val
              );
              if (selectedCategory) {
                const selectedPollution = selectedCategory.pollution;
                // Utiliza el valor de la contaminación seleccionada como desees
                console.log("Nivel de contaminación:", selectedPollution);
                setPorcentain(selectedPollution);
                setColor(getPollutionColor(selectedPollution));
              }
            }}
            data={categories}
            save="value"
            search={true}
            searchPlaceholder="Ingresa un año"
            placeholder="Selecciona un año"
          />
        </View>
        <View style={styles.margins}>
          <Text style={{ fontSize: 16, color: "#444262", marginTop: 4 }}>Pocentaje de contaminación</Text>
          <Text style={{ fontSize: 32, color: "#312651", fontWeight: 'bold' }}>{porcentain + '%'}</Text>
        </View>
        <View style={{ marginBottom: 98, marginTop: 80 }}>
          <Wave color={color} porcentain={porcentain} />
        </View>

        <View style={{...styles.margins}}>
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
        {displayTabContent()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  margins: {
    marginHorizontal: 20,
  },
  texts: {
    fontSize: 24,
    fontWeight: "700",
    color: "#444262",
  },
});
