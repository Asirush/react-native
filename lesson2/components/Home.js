import { View, Text, Pressable, FlatList } from "react-native";
import { useEffect } from "react";

const Home = ({ navigation }) => {
  const cities = ["Astana", "Almaty", "Shymkent"];

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.navigate("CityWeather", { city: "Astana" });
          }}
        >
          <Text>Погода в Алматы</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="py-2 rounded border-solid border-2 border-black hover:border-sky-500">
        Home
      </Text>
      <FlatList
        data={cities}
        renderItem={({ item }) => {
          return (
            <Pressable
              className="py-2 rounded border-solid border-2 border-black hover:border-sky-500"
              onPress={() => {
                navigation.navigate("CityWeather", { city: item });
              }}
            >
              <Text>{item}</Text>
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default Home;
