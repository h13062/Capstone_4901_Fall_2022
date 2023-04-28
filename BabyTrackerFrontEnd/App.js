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
import Datetime1 from "./page/Datetime1";
import { useEffect, useState } from "react";

import Welcome from "./page/Welcome";
import DateTime1 from "./page/Datetime1";

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

  const [navItems, setNavItems] = useState([true, false, false, false]);
  useEffect(() => {
    console.log("navItem: ", navItems);
  }, [navItems]);

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Welcome"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
          component={Welcome}
        />
        <Screen
          name="Login"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
        >
          {() => <Login isDarkGlobal={isDarkGlobal} />}
        </Screen>
        <Screen
          name="Register"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
        >
          {() => <Register isDarkGlobal={isDarkGlobal} />}
        </Screen>
        <Screen
          name="BabyInfo"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
        >
          {() => (
            <BabyInfo isDarkGlobal={isDarkGlobal} isUnitMetric={isUnitMetric} />
          )}
        </Screen>
        <Screen
          name="Activity"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
        >
          {() => (
            <Activity
              isDarkGlobal={isDarkGlobal}
              setNavItems={setNavItems}
              navItems={navItems}
            />
          )}
        </Screen>
        <Screen
          name="Chart"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
        >
          {() => (
            <Chart
              isDarkGlobal={isDarkGlobal}
              setNavItems={setNavItems}
              navItems={navItems}
            />
          )}
        </Screen>
        <Screen
          name="BabyProfiles"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
        >
          {() => (
            <BabyProfiles
              isDarkGlobal={isDarkGlobal}
              setNavItems={setNavItems}
              navItems={navItems}
            />
          )}
        </Screen>
        <Screen
          name="Stopwatch"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
        >
          {() => <StopWatch isDarkGlobal={isDarkGlobal} />}
        </Screen>
        <Screen
          name="ActivityForm"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
          component={ActivityForm}
        />
        <Screen
          name="DateTimePicker"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
          }}
        >
          {() => <DateTime1 isDarkGlobal={isDarkGlobal} />}
        </Screen>
        <Screen
          name="Setting"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 150,
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
              setNavItems={setNavItems}
              navItems={navItems}
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
