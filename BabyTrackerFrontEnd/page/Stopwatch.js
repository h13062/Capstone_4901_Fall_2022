import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const screen = Dimensions.get("window");

const formatNumber = (number) => `0${number}`.slice(-2);

const getRemaining = (time) => {
  const hrs = Math.floor(time / 3600);
  const mins = Math.floor(time / 60) % 60;
  const secs = time - mins * 60;
  return {
    hrs: formatNumber(hrs),
    mins: formatNumber(mins),
    secs: formatNumber(secs),
  };
};

export default function App() {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { hrs, mins, secs } = getRemaining(remainingSecs);
  const navigation = useNavigation();

  toggle = () => {
    setIsActive(!isActive);
  };

  reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs((remainingSecs) => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        style={styles.ManualBtn}
        onPress={() => navigation.navigate("DateTimePicker")}
      >
        <Text style={styles.ManualText}>Enter Time Manually</Text>
      </TouchableOpacity>
      <Text style={styles.timerText}>{`${hrs}:${mins}:${secs}`}</Text>
      <TouchableOpacity onPress={this.toggle} style={styles.button}>
        <Text style={styles.buttonText}>{isActive ? "Pause" : "Start"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={this.reset}
        style={[styles.button, styles.buttonReset]}
      >
        <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
      </TouchableOpacity>
      <View style={styles.controller}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Activity")}
        >
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customBtn}
          onPress={() => navigation.navigate("DateTimePicker")}
        >
          <Text style={styles.customText}>CUSTOM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controller: {
    // flex: 1,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  backBtn: {
    width: 100,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00bfff",
    marginTop: 10,
    paddingTop: 0,
    // marginLeft
  },
  backText: {
    color: "white",
    fontSize: 20,
  },
  customBtn: {
    width: 100,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00bfff",
    marginTop: 10,
    paddingTop: 0,
  },
  customText: {
    color: "white",
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 10,
    borderColor: "#B9AAFF",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 45,
    color: "#B9AAFF",
  },
  timerText: {
    color: "#fff",
    fontSize: 90,
    marginBottom: 20,
  },
  buttonReset: {
    marginTop: 20,
    borderColor: "#FF851B",
  },
  buttonTextReset: {
    color: "#FF851B",
  },
  ManualBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00bfff",
    marginTop: 0,
    paddingTop: 0,
  },
  ManualText: {
    color: "white",
    fontSize: 20,
  },
});
