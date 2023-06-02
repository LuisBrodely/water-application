import * as React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const data = [
  "https://www.chiapasparalelo.com/wp-content/uploads/2018/07/image.jpeg",
  "https://media.metrolatam.com/2018/02/19/canonsumidero660x550-1200x800.jpg",
  "https://th.bing.com/th/id/R.323575d7efae6e69148ccf5ef0d9e273?rik=MH0iaBRDQ6y%2bIw&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.31739a02a16f915b5bcfa7e0c6219560?rik=3ck61xqyIFgVsA&riu=http%3a%2f%2friosdelplaneta.com%2fwp-content%2fuploads%2f2017%2f11%2frio-usumacinta-.jpg&ehk=I%2bw3ImjYUzCl4y3diT9n1bd%2f3WKUgibIQQ8ewj5%2bug4%3d&risl=&pid=ImgRaw&r=0",
  "https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2020/11/rio-usumacinta.jpg?w=1080&ssl=1",
  "https://th.bing.com/th/id/R.79df3cb79e8f6ed18dd166e8874a36a7?rik=RAoNEUdYxkiKXg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-iEbFbkQGPQw%2fT4qUQZYncpI%2fAAAAAAAACCE%2fAq6pHXD48U0%2fs1600%2fCA%2525C3%252591ON%2bDEL%2bSUMIDERO.jpg%2bchiapas.jpg&ehk=CL0d3LcZ9FOTrMYD86A7F0W%2bu4e%2bXSH9vBotQOYobow%3d&risl=&pid=ImgRaw&r=0",
];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function WaterScreen() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar hidden />
      <View style={[StyleSheet.absoluteFillObject]}>
        {data.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={index}
              source={{ uri: image }}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              blurRadius={3}
            />
          );
        })}
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={data}
        keyExtractor={(xd, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                justifyContent: "center",
                alignItems: 'center',
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 0 },
                shadowRadius: 20
              }}
            >
              <Image
                source={{ uri: item }}
                style={{
                  width: imageW,
                  height: imageH,
                  resizeMode: "cover",
                  borderRadius: 16,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
