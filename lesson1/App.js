import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.block}>
      <Text style={styles.block.text}>React Native</Text>
      <Text> </Text>
      <Text style={{color: "yellow"}}>
        React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.
      </Text>
      <Text> </Text>
      <Text style={{color: "yellow"}}>
        React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // max size of a screen, 2 means half of the screen
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'center',
  },
  block: {
    flex: 1, // max size of a screen, 2 means half of the screen
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "darkblue",
    text:{
      color: "orange",
      fontSize: 30
    }
  }
});
