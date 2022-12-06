import React, { ustState, useRef, useCallback, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Result from "./stopwatchResult";
import Control from "./stopwatchControl";
import { displayTime } from "./stopwatchUtil";
import STHeader from "./stopwatchheader";
export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);

  const handleleftButtonPress = useCallback(() => {
    if (isRunning) {
      setResults((previousResults) => [time, ...previousResults]);
    } else {
      setResults([]);
      setTime(0);
    }
  }, [isRunning, time]);

  const handlerightButtonPress = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }
    setRunning((previousState) => !previousState);
  }, [isRunning]);

  return (
    <SafeAreaView style={styles.container}>
      <STHeader />
      <StatusBar style="light" />
      <View style={styles.display}>
        <Text style={styles.display}>{displayTime(time)}</Text>
      </View>
      <View style={styles.control}>
        <Control
          isRunning={isRunning}
          handleleftButtonPress={handleleftButtonPress}
          handlerightButtonPress={handlerightButtonPress}
        />
      </View>
      <View style={styles.results}>
        <Result results={results} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
  },
  display: {
    flex: 3 / 5,
    fontSize: 80,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  displayText: {
    color: "#fff",
    fontSize: 70,
    fontWeight: "200",
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
  },
  control: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  result: {
    flex: 2 / 5,
  },
});
