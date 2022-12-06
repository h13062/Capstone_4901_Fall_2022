import * as React from "react";
import { Appbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const STHeader = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.Header}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate("Activity")}
        // onPress={() => navigation.navigate("BabyInfo")}
      >
        <Text style={styles.backText}>BACK</Text>
      </TouchableOpacity>

      <Appbar.Content
        title="Timer"
        style={{
          alignItems: "flex-start",
          // alignContent: "center",
          flex: 1,
          // justifyContent: "center",
          alignSelf: "center",
          marginLeft: 60,
        }}
        titleStyle={{
          fontWeight: "bold",
          fontSize: 30,
          padding: 0,
          margin: 0,
          // alignItems: "center",
          // alignSelf: "center",
          // alignContent: "center",
          // textAlign: "center",
          // flex: 1,
          flexDirection: "column",
        }}
      />
      <TouchableOpacity
        style={styles.customBtn}
        onPress={() => navigation.navigate("DateTimePicker")}
      >
        <Text style={styles.customText}>CUSTOM</Text>
      </TouchableOpacity>
    </Appbar.Header>
  );
};
export default STHeader;
const styles = StyleSheet.create({
  Header: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: {
    // flex: 0.8,
    width: 100,
    borderRadius: 10,
    height: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    alignSelf: "flex-start",
    marginTop: 0,
    backgroundColor: "#00bfff",
    marginTop: 0,
    paddingTop: 0,
  },
  backText: {
    flex: 1,
    color: "white",
    fontSize: 15,
  },
  customBtn: {
    // flex: 0.8,
    width: 100,
    borderRadius: 10,
    height: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    alignSelf: "flex-start",
    marginTop: 0,
    backgroundColor: "#00bfff",
    marginTop: 0,
    paddingTop: 0,
  },
  customText: {
    flex: 1,
    color: "white",
    fontSize: 15,
  },
});
