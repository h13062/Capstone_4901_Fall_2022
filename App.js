import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './page/login';
import Register from './page/register';
import BabyInfo from './page/babyinfo';
import Chart from './page/Chart';
import Activity from './page/Activity';
import Navbar from './components/Navbar';
import BabyProfiles from './page/BabyProfiles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      <Navigator>
        <Screen name="Login" options={{headerShown: false}} component={Login}/>
        <Screen name="Register" options={{headerShown: false}} component={Register}/>
        <Screen name="BabyProfiles" component={BabyProfiles}/>
        {/* <Register /> */}
        {/* <BabyInfo /> */}
        </Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <>
//       <View style={{ width: '100%', height: '100%' }}>
//         <View style={{ flex: 10 }}>
//           <Activity />
//           {/* <Chart /> */}
//           {/* <BabyProfiles /> */}
//         </View>
//         <View style={{ flex: 1 }}>
//           <Navbar />
//         </View>
//       </View>
//     </>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
