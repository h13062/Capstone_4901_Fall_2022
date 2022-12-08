import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigation = useNavigation();

  const url = "http://localhost:5290";

  const registerOnSubmitHandler = (e) => {
    // console.log("On submit object:", {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: password,
    //   confirmPassword: confirmPassword,
    // });
    e.preventDefault();

    // executeCreateUser(firstName, lastName, email, password, confirmPassword)
    //   .then((res) => {
    //     console.log("response from POST:", res);
    //   })
    //   .catch((err) => {
    //     console.log("error:", err);
    //   });
    console.log("button clicked");

    // fetch("https://localhost:7290/api/Baby", {
    //   method: "GET",
    // })
    //   .then((res) => console.log("res status:", res.status))
    //   .catch((err) => console.log("error:", err));

    return fetch(`${url}/api/Baby`)
      .then((response) => response.json())
      .then((json) => {
        console.log("baby", json);
      })
      .catch((error) => {
        console.error(error);
      });
    // navigation.navigate("BabyInfo");
  };

  const executeCreateUser = (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    const UserInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    // return fetch("https://localhost:7290/api/Account/signup", {
    //   headers: { "Content-Type": "application/json" },
    //   medthod: "POST",
    //   credential: "include",
    // });

    console.log("UserInfo", { UserInfo });

    return fetch("api/Account/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // credentials: "include",
      body: JSON.stringify(UserInfo),
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/sleep_baby.jpg")}
      />

      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>Register</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter your first name"
          onChangeText={(e) => {
            setFirstName(e);
          }}
          value={firstName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter your last name"
          onChangeText={(e) => {
            setLastName(e);
          }}
          value={lastName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter your email"
          onChangeText={(e) => {
            setEmail(e);
          }}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter your password"
          onChangeText={(e) => {
            setPassword(e);
          }}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please confirm your password"
          onChangeText={(e) => {
            setConfirmPassword(e);
          }}
          value={confirmPassword}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.text}>
          I have read and agreed with the terms and conditions
        </Text>
      </View>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={registerOnSubmitHandler}
      >
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.backText}>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Register;
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "0.5",
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 0,
    marginBottom: 0,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 0.6,
    width: 600,
    height: 800,
    resizeMode: "contain",
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
    marginTop: 0,
  },
  registerText: {
    color: "#00bfff",
    fontSize: 20,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
    paddingLeft: 5,
    width: 300,
    marginTop: 0,
    paddingTop: 0,
  },
  text: {
    lineHeight: 20,
    marginLeft: 5,
    paddingRight: 0,
    marginTop: 0,
  },
  backBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
    borderColor: "#00bfff",
    borderWidth: 2,
    paddingVertical: 0,
    marginTop: 15,
  },
  backText: {
    color: "#00bfff",
    fontSize: 20,
  },
});
