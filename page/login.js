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
 
const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("")} /> */}
 
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>
          Welcome 
        </Text>
        <Text style={styles.sup_title}>
            By signing in you are agreeing to our Term and privacy policy
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onsetEmail={setEmail}
        
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onsetPassword={setPassword}
          secureTextEntry={true}
        
        />
      </View>
 
      <TouchableOpacity style={styles.fgBtn}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;
const styles = StyleSheet.create({
  title:{
    fontSize:40,
    fontWeight:"0.5",
    textAlign: "center",
  },
  sup_title:{
    alignSelf: "center",
    textAlign: "center",
    width:300,
    paddingBottom:10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
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
    borderColor: 'black',
    borderWidth: 2,
    
  },
  fgBtn:{
    width:300,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    alignSelf:'flex-end'
  },
 
  loginBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: '#00bfff',
    
  },
  loginText: {
    color:'white',
    fontSize:20,
  },
  registerBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor:"white",
    borderColor:"#00bfff",
    borderWidth:2,
    padding:0,
  },
  registerText: {
    color:"#00bfff",
    fontSize:20,
  },
});