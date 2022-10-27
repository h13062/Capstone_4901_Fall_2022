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
// export default function App() {
//   const { Navigator, Screen } = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Navigator>
//         <Screen name="Login" options={{headerShown: false}} component={Login}/>
//         <Screen name="Register" options={{headerShown: false}} component={Register}/>
//         <Screen name="BabyInfo" component={BabyInfo}/>
//         {/* <Register /> */}
//         {/* <BabyInfo /> */}
//         </Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Activity"
          options={{ headerShown: false, animationEnabled: false }}
          component={Activity}
        />
        <Screen
          name="Chart"
          options={{ headerShown: false, animationEnabled: false }}
          component={Chart}
        />
        <Screen
          name="BabyProfiles"
          options={{ headerShown: false, animationEnabled: false }}
          component={BabyProfiles}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
