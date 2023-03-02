import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Register({ isDarkGlobal }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigation = useNavigation();

  const url = 'https://capstone54.azurewebsites.net/';

  const registerOnSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        url + '/api/Account/signup',
        {
          firstName: firstName,
          lastName: lastName,
          emailId: email,
          password: password,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log('response:', response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDarkGlobal);
  }, [isDarkGlobal]);

  const container = isDarkGlobal
    ? styles.container_light
    : styles.container_dark;
  const title = isDarkGlobal ? styles.title_light : styles.title_dark;
  const TextInp = isDarkGlobal ? styles.TextInput_light : styles.TextInput_dark;
  const text = isDarkGlobal ? styles.text_light : styles.text_dark;
  const backBtn = isDarkGlobal ? styles.backBtn_light : styles.backBtn_dark;

  return (
    <SafeAreaView style={container}>
      <Image
        style={styles.image}
        source={require('../assets/sleep_baby.jpg')}
      />

      <StatusBar barStyle={isDarkGlobal ? 'dark-content' : 'light-content'} />
      <View>
        <Text style={title}>Register</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={TextInp}
          placeholder="Please enter your first name"
          placeholderTextColor={
            isDarkGlobal ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.5)'
          }
          onChangeText={(e) => {
            setFirstName(e);
          }}
          value={firstName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={TextInp}
          placeholder="Please enter your last name"
          placeholderTextColor={
            isDarkGlobal ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.5)'
          }
          onChangeText={(e) => {
            setLastName(e);
          }}
          value={lastName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={TextInp}
          placeholder="Please enter your email"
          placeholderTextColor={
            isDarkGlobal ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.5)'
          }
          onChangeText={(e) => {
            setEmail(e);
          }}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={TextInp}
          placeholder="Please enter your password"
          placeholderTextColor={
            isDarkGlobal ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.5)'
          }
          onChangeText={(e) => {
            setPassword(e);
          }}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={TextInp}
          placeholder="Please confirm your password"
          placeholderTextColor={
            isDarkGlobal ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.5)'
          }
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
          color={'#6082B6'}
        />
        <Text style={text}>
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
        style={backBtn}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.backText}>BACK</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title_light: {
    fontSize: 40,
    fontWeight: '0.5',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 0,
    marginBottom: 0,
  },
  title_dark: {
    fontSize: 40,
    fontWeight: '0.5',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 0,
    marginBottom: 0,
    color: 'rgba(255, 255, 255, 0.87)',
  },

  container_light: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.87)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_dark: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 0.6,
    width: 600,
    height: 800,
    resizeMode: 'contain',
  },

  inputView: {
    borderRadius: 10,
    width: '100%',
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput_light: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    borderColor: '#121212',
    borderWidth: 2,
  },
  TextInput_dark: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    borderColor: 'rgba(255, 255, 255, 0.87)',
    borderWidth: 2,
  },

  registerBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#6082B6',
    borderColor: '#6082B6',
    borderWidth: 2,
    marginTop: 0,
  },
  registerText: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 20,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 15,
    paddingLeft: 5,
    width: 300,
    marginTop: 0,
    paddingTop: 0,
  },
  text_light: {
    lineHeight: 20,
    marginLeft: 5,
    paddingRight: 0,
    marginTop: 0,
  },
  text_dark: {
    lineHeight: 20,
    marginLeft: 5,
    paddingRight: 0,
    marginTop: 0,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  backBtn_light: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.87)',
    borderColor: '#6082B6',
    borderWidth: 2,
    paddingVertical: 0,
    marginTop: 15,
  },
  backBtn_dark: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#121212',
    borderColor: '#6082B6',
    borderWidth: 2,
    paddingVertical: 0,
    marginTop: 15,
  },
  backText: {
    color: '#6082B6',
    fontSize: 20,
  },
});
