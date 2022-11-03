import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  //   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/welcome_baby.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableOpacity
          style={styles.loginBtn}
          // onPress={() => navigation.navigate("BabyInfo")}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerBtn}
          // onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 350,
    // height: 1000,
    // padding: 0,
    // margin: 0,
    // paddingLeft: 0,
    alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    // width: 350,
    // height: undefined,
    padding: 0,
    margin: 0,
    justifyContent: "center",
    alignContent: "center",
  },
  loginBtn: {
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
  loginText: {
    color: "white",
    fontSize: 20,
  },
  registerBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
    borderColor: "#00bfff",
    borderWidth: 2,
    padding: 0,
    marginTop: 20,
  },
  registerText: {
    color: "#00bfff",
    fontSize: 20,
  },
});
