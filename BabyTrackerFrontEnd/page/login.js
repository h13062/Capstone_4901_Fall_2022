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
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Register from './register';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ isDarkGlobal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigation = useNavigation();

  const loginOnPressHandler = () => {
    console.log('On submit object:', {
      email: email,
      password: password,
    });

    navigation.navigate('BabyInfo');
  };

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDarkGlobal);
  }, [isDarkGlobal]);

  const container = isDarkGlobal
    ? styles.container_light
    : styles.container_dark;

  const title = isDarkGlobal ? styles.title_light : styles.title_dark;

  const sup_title = isDarkGlobal
    ? styles.sup_title_light
    : styles.sup_title_dark;

  const TextInp = isDarkGlobal ? styles.TextInput_light : styles.TextInput_dark;
  const text = isDarkGlobal ? styles.text_light : styles.text_dark;
  const registerBtn = isDarkGlobal
    ? styles.registerBtn_light
    : styles.registerBtn_dark;
  return (
    <SafeAreaView
      style={[
        container,
        {
          backgroundColor: isDarkGlobal
            ? 'rgba(255, 255, 255, 0.87)'
            : '#121212',
        },
      ]}
    >
      {/* <View style={container}> */}
      <StatusBar barStyle={isDarkGlobal ? 'dark-content' : 'light-content'} />
      <Image
        style={styles.image}
        source={require('../assets/sleep_baby.jpg')}
      />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <View>
          <Text style={title}>Welcome</Text>
          <Text style={sup_title}>
            By signing in you are agreeing to our Term and privacy policy
          </Text>
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
        <View style={styles.wrapper}>
          <CheckBox
            // style={styles.CheckBox}
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={'#6082B6'}
          />
          <Text style={text}>Remember me</Text>
          <TouchableOpacity style={styles.fgBtn}>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={loginOnPressHandler}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={registerBtn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title_light: {
    fontSize: 40,
    fontWeight: '0.5',
    textAlign: 'center',
  },
  title_dark: {
    fontSize: 40,
    fontWeight: '0.5',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.87)',
  },
  sup_title_light: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 300,
    paddingBottom: 30,
  },
  sup_title_dark: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 300,
    paddingBottom: 30,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  container_light: {
    flex: 1,
    alignItems: 'center',
  },
  container_dark: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },

  image: {
    flex: 0.5,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  fgBtn: {
    width: 300,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    paddingLeft: 70,
    color: '#6082B6',
  },

  loginBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#6082B6',
    marginTop: 0,
    paddingTop: 0,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
  registerBtn_light: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.87)',
    borderColor: '#6082B6',
    borderWidth: 2,
    padding: 0,
    marginTop: 20,
  },
  registerBtn_dark: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#121212',
    borderColor: '#6082B6',
    borderWidth: 2,
    padding: 0,
    marginTop: 20,
  },
  registerText: {
    color: '#6082B6',
    fontSize: 20,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 0,
    paddingLeft: 5,
    width: 300,
    marginBottom: 0,
    paddingBottom: 0,
  },
  text_light: {
    lineHeight: 20,
    marginLeft: 5,
    marginTop: 0,
  },
  text_dark: {
    lineHeight: 20,
    marginLeft: 5,
    marginTop: 0,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  CheckBox: {
    alignSelf: 'flex-start',
  },
});
