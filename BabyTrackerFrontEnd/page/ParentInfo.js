import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import CheckBox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function ParentInfo() {
  const navigation = useNavigation();

  const url = "https://capstone54.azurewebsites.net/";
  const [parentList, setParentList] = useState([]);
  const infoOnSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .get(url + "/api/Parent", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("response:", response.status);
        setParentList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        {parentList.map((parent, index) => {
          return (
            // Task component
            <View key={index}>
              <Text>name: {parent.name}</Text>
              {/* <Text>baby: {parent.baby}</Text> */}
            </View>
          );
        })}
        <TouchableOpacity style={styles.InfoBtn} onPress={infoOnSubmitHandler}>
          <Text style={styles.InfoText}>Parent Info</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.87)",
    alignItems: "center",
    justifyContent: "center",
  },
  InfoBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6082B6",
    borderColor: "#6082B6",
    borderWidth: 2,
    marginTop: 0,
  },
  InfoText: {
    color: "rgba(255, 255, 255, 0.87)",
    fontSize: 20,
  },
});
