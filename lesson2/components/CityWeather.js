import { TextInput, Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../redux/citySlice";

const CityWeather = ({ route, navigation }) => {
  const { city } = route.params;

  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.city.weatherData);

  const [temp, setTemp] = useState(0);
  const [sunrise, setSunrise] = useState(0);

  useEffect(() => {
    dispatch(getWeatherData(city));
  }, []);

  useEffect(() => {
    setTemp(parseInt(weatherData.main.temp - 273.15));
    setSunrise(weatherData.sys.sunrise);
  }, [weatherData]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View>
        <Text>{weatherData.name}</Text>
        <Text>{temp}</Text>
      </View>

      <View>
        <View>
          <Text>Восход</Text>
          <Text>{sunrise}</Text>
        </View>
        <View>
          <Text>Закат</Text>
          <Text>18:12</Text>
        </View>
      </View>
    </View>
  );
};

export default CityWeather;
