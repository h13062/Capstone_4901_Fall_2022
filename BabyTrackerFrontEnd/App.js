import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./page/login";
import Register from "./page/register";
import BabyInfo from "./page/babyinfo";
import Chart from "./page/Chart";
import Activity from "./page/Activity";
import Navbar from "./components/Navbar";
import BabyProfiles from "./page/BabyProfiles";
import ActivityForm from "./page/ActivityForm";
import Setting from "./page/Setting";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StopWatch from "./page/Stopwatch";
import StopWatch2 from "./page/BtimerPrototype";
import Datetime1 from "./page/Datetime1";
import { useEffect, useState } from "react";

import Welcome from "./page/Welcome";

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  const [isDarkGlobal, setIsDarkGlobal] = useState(true);
  useEffect(() => {
    console.log("isDarkGlobal: ", isDarkGlobal);
  }, [isDarkGlobal]);

  const [isUnitMetric, setIsUnitMetric] = useState(true);
  useEffect(() => {
    console.log("isUnitMetrtic: ", isUnitMetric);
  }, [isUnitMetric]);

  const [isTempMetric, setIsTempMetric] = useState(true);
  useEffect(() => {
    console.log("isTempMetrtic: ", isTempMetric);
  }, [isTempMetric]);

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Screen
          name="Register"
          options={{ headerShown: false }}
          component={Register}
        />
        <Screen
          name="BabyInfo"
          options={{ headerShown: false }}
          component={BabyInfo}
        />
        <Screen
          name="Activity"
          options={{ headerShown: false, animationEnabled: false }}
        >
          {() => <Activity isDarkGlobal={isDarkGlobal} />}
        </Screen>
        <Screen
          name="Chart"
          options={{ headerShown: false, animationEnabled: false }}
        >
          {() => <Chart isDarkGlobal={isDarkGlobal} />}
        </Screen>
        <Screen
          name="BabyProfiles"
          options={{ headerShown: false, animationEnabled: false }}
        >
          {() => <BabyProfiles isDarkGlobal={isDarkGlobal} />}
        </Screen>
        <Screen
          name="Stopwatch"
          options={{ headerShown: false, animationEnabled: false }}
          component={StopWatch}
        />
        <Screen
          name="ActivityForm"
          options={{ headerShown: false, animationEnabled: false }}
          component={ActivityForm}
        />
        <Screen
          name="DateTimePicker"
          options={{ headerShown: false, animationEnabled: false }}
          component={Datetime1}
        />
        <Screen
          name="Setting"
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        >
          {() => (
            <Setting
              setIsDarkGlobal={setIsDarkGlobal}
              isDarkGlobal={isDarkGlobal}
              setIsUnitMetric={setIsUnitMetric}
              isUnitMetric={isUnitMetric}
              setIsTempMetric={setIsTempMetric}
              isTempMetric={isTempMetric}
            />
          )}
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StopWatch2 />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
