import './assets/css/tailwind.css'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import Weather from './components/Weather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import CityWeather from './components/CityWeather';

/*25c495dfff01ff23dd42721de5b638bd*/

const Stack = createNativeStackNavigator();

/*https://reactnavigation.org/docs/headers/

Доки по изменению заголовка скрина */

export default function App() {
return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen name='Home' component={Home} options={{headerShown: true, title: "Weather in your city"}}/>
          <Stack.Screen name='Weather' component={Weather}/>
          <Stack.Screen name='CityWeather' component={CityWeather}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
