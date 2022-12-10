import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

const BabyInfo = () => {
  const [BaByFullname, setBaByFullname] = useState("");
  const [Gender, setGender] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [Weight, setWeight] = useState("");
  const navigation = useNavigation();

  const babyInfoOnPressHandler = () => {
    console.log("On submit object:", {
      fullname: BaByFullname,
      Gender: Gender,
      DateOfBirth: DateOfBirth,
      Weight: Weight,
    });

    navigation.navigate("Activity");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>Baby Information</Text>
        <Text style={styles.sup_title}>
          Provide us basic information of your child
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter the baby's fullname"
          onChangeText={(e) => {
            setBaByFullname(e);
          }}
          value={BaByFullname}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter the baby's gender"
          onChangeText={(e) => {
            setGender(e);
          }}
          value={Gender}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter the baby's date of birth"
          onChangeText={(e) => {
            setDateOfBirth(e);
          }}
          keyboardType="numeric"
          value={DateOfBirth}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter the baby's weight (ib)"
          onChangeText={(e) => {
            setWeight(e);
          }}
          keyboardType="numeric"
          value={Weight}
        />
      </View>
      <TouchableOpacity style={styles.NextBtn} onPress={babyInfoOnPressHandler}>
        <Text style={styles.NextText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BabyInfo;
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "0.5",
    textAlign: "center",
  },
  sup_title: {
    alignSelf: "center",
    textAlign: "center",
    width: 300,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    borderRadius: 10,
    width: "100%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  NextBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#ff7f50",
  },
  NextText: {
    color: "white",
    fontSize: 20,
  },
});
