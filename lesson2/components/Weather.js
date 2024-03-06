import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import '../assets/css/tailwind.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../redux/citySlice';

const Weather = () => {
    const [inputData, setInputData] = useState('')

    const dispatch = useDispatch()

    const weatherData = useSelector(state => state.city.weatherData)

    return (
        <View className="flex-1 items-center justify-center">
            <TextInput onChange={(e) => { setInputData(e.target.value) }}></TextInput>
            <Pressable onPress={() => { dispatch(getWeatherData(inputData)) }}><Text>Find</Text></Pressable>

            <View>
                <Text>{weatherData.name}</Text>
                <Text>10 C*</Text>
            </View>

            <View>
                <View>
                    <Text>Sunrise</Text>
                    <Text>8:12</Text>
                </View>
                <View>
                    <Text>Sunset</Text>
                    <Text>18:12</Text>
                </View>
            </View>
        </View>
    );
}

export default Weather