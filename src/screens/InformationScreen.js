import { View, Text } from "react-native";
import React from "react";
import TodoItem from "../components/TodoItem";
import { ScrollView } from "@motify/components";

export default function InformationScreen() {
  const retos = [
    {
      titulo: "Reto de ducha más corta",
      descripcion:
        "Redúcela duración de tus duchas en un minuto. De esta manera, estarás ahorrando agua y reduciendo la cantidad de agua residual que se genera.",
    },
    {
      titulo: "Reto de reparación de fugas",
      descripcion:
        "Verifica si tienes alguna fuga de agua en tu hogar, como un grifo goteando o un inodoro con fugas. Repara estas fugas lo antes posible para evitar el desperdicio innecesario de agua.",
    },
    {
      titulo: "Reto de recolección de agua de lluvia",
      descripcion:
        "Coloca un contenedor o barril en tu jardín para recolectar agua de lluvia. Utiliza esta agua para regar tus plantas en lugar de utilizar agua potable, lo cual ayudará a conservar este recurso.",
    },
    {
      titulo: "Reto de riego eficiente",
      descripcion:
        "Ajusta la frecuencia y duración de riego de tus plantas de manera que solo se les proporcione la cantidad de agua necesaria. Evita el riego excesivo, ya que puede llevar a un desperdicio innecesario.",
    },
    {
      titulo: "Reto de lavado de vehículos",
      descripcion:
        "Lava tu vehículo utilizando un cubo y una esponja en lugar de una manguera. Esto reducirá significativamente el consumo de agua durante el lavado.",
    },
    {
      titulo: "Reto de reutilización de agua",
      descripcion:
        "Reutiliza el agua que utilizas para lavar frutas y verduras, o el agua que se acumula mientras esperas a que salga caliente. Utilízala para regar tus plantas en lugar de desecharla.",
    },
    {
      titulo: "Reto de educación y difusión",
      descripcion:
        "Comparte información sobre la importancia de cuidar el agua con tus amigos, familiares y en tus redes sociales. Al aumentar la conciencia sobre este tema, puedes inspirar a otros a tomar medidas para preservar y proteger el agua.",
    },
    {
      titulo: "Reto de vajilla consciente",
      descripcion:
        "Lava los platos a mano en lugar de utilizar el lavavajillas, siempre que sea posible. Utiliza un recipiente con agua para enjuagarlos en lugar de dejar el grifo abierto continuamente.",
    },
    {
      titulo: "Reto de cierre de grifos",
      descripcion:
        "Asegúrate de cerrar completamente los grifos mientras te cepillas los dientes, te enjabonas las manos o lavas los platos. Evita dejarlos goteando innecesariamente.",
    },
    {
      titulo: "Reto de carga completa",
      descripcion:
        "Utiliza la lavadora y el lavavajillas solo cuando estén completamente cargados. De esta manera, optimizarás el uso del agua y reducirás la cantidad de ciclos de lavado.",
    },
    {
      titulo: "Reto de jardinería consciente",
      descripcion:
        "Riega tus plantas temprano en la mañana o tarde en la noche para evitar la evaporación rápida del agua. Además, coloca una capa de mantillo alrededor de tus plantas para ayudar a retener la humedad del suelo.",
    },
    {
      titulo: "Reto de reducción de desechos",
      descripcion:
        "Minimiza la cantidad de productos químicos que utilizas en el hogar, como pesticidas y herbicidas, que pueden terminar contaminando el agua. Opta por alternativas naturales y amigables con el medio ambiente.",
    },
    {
      titulo: "Reto de recolección de agua en la cocina",
      descripcion:
        "Coloca un recipiente debajo del grifo mientras esperas a que salga agua caliente. Utiliza esta agua para regar tus plantas o para otras tareas domésticas que no requieran agua potable.",
    },
    {
      titulo: "Reto de inodoro eficiente",
      descripcion:
        "Coloca una botella llena de agua en el tanque del inodoro para reducir la cantidad de agua utilizada en cada descarga. Esto ayudará a ahorrar agua sin comprometer la funcionalidad del inodoro.",
    },
  ];

  return (
    <ScrollView
      style={{ backgroundColor: "FFFFFF" }}
      showsVerticalScrollIndicator={false}
    >
      <Text
        style={{
          marginHorizontal: 20,
          fontSize: 24,
          fontWeight: "800",
          marginTop: 30,
        }}
      >
        Retos Acuaticos
      </Text>
      <View
        style={{
          height: 4,
          width: 120,
          backgroundColor: "#3ECEAB",
          borderRadius: 20,
          marginHorizontal: 20,
          marginVertical: 5,
        }}
      />

      {retos.map((reto, index) => (
        <TodoItem
          title={reto.titulo}
          description={reto.descripcion}
          key={index}
        />
      ))}
    </ScrollView>
  );
}
