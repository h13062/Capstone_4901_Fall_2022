import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaskedTextInput } from 'react-native-mask-text';
import axios from 'axios';

export default function BabyInfo({ isDarkGlobal, isUnitMetric }) {
  const [BaByFullname, setBaByFullname] = useState('');
  const [Gender, setGender] = useState('');
  const [DateOfBirth, setDateOfBirth] = useState('');
  const [Weight, setWeight] = useState('');
  const navigation = useNavigation();

  const url = 'https://capstone54.azurewebsites.net/';

  const container = isDarkGlobal
    ? styles.container_light
    : styles.container_dark;
  const title = isDarkGlobal ? styles.title_light : styles.title_dark;
  const sup_title = isDarkGlobal
    ? styles.sup_title_light
    : styles.sup_title_dark;
  const TextInp = isDarkGlobal ? styles.TextInput_light : styles.TextInput_dark;
  const NextBtn = isDarkGlobal ? styles.NextBtn_light : styles.NextBtn_dark;
  const NextText = isDarkGlobal ? styles.NextText_light : styles.NextText_dark;

  const babyInfoOnPressHandler = () => {
    console.log('On submit object:', {
      fullname: BaByFullname,
      Gender: Gender,
      DateOfBirth: DateOfBirth,
      Weight: Weight,
    });

    axios
      .post(
        url + '/api/Baby',
        {
          name: BaByFullname,
          gender: Gender,
          dateOfBirth: DateOfBirth,
          weight: Weight,
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

    navigation.navigate('Activity');
  };

  return (
    <View
      style={[
        container,
        {
          backgroundColor: isDarkGlobal
            ? 'rgba(255, 255, 255, 0.87)'
            : '#121212',
        },
      ]}
    >
      <StatusBar barStyle={isDarkGlobal ? 'dark-content' : 'light-content'} />
      <View>
        <Text style={title}>Baby Information</Text>
        <Text style={sup_title}>
          Provide us basic information of your child
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={TextInp}
          placeholder="Please enter the baby's fullname"
          placeholderTextColor={
            isDarkGlobal ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.5)'
          }
          onChangeText={(e) => {
            setBaByFullname(e);
          }}
          value={BaByFullname}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={TextInp}
          placeholder="Please enter the baby's gender"
          placeholderTextColor={
            isDarkGlobal ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.5)'
          }
          onChangeText={(e) => {
            setGender(e);
          }}
          value={Gender}
        />
      </View>
      <View style={styles.inputView}>
        {/* <TextInput
          style={TextInp}
          placeholder="Please enter the baby's date of birth"
          placeholderTextColor={
            isDarkGlobal ? "rgba(0, 0, 0, 0.25)" : "rgba(255, 255, 255, 0.5)"
          }
          onChangeText={(e) => {
            setDateOfBirth(e);
          }}
          format
          keyboardType="numeric"
          value={DateOfBirth}
        /> */}
        <MaskedTextInput
          mask="99-99-9999"
          placeholder="Baby's date of birth in MM-DD-YYYY"
          placeholderTextColor={
            isDarkGlobal ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.5)'
          }
          onChangeText={(e) => {
            setDateOfBirth(e);
          }}
          keyboardType="numeric"
          keyboardAppearance="Dark"
          style={TextInp}
          value={DateOfBirth}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={TextInp}
          placeholder={
            isUnitMetric
              ? "Please enter the baby's weight (kg)"
              : "Please enter the baby's weight (lb)"
          }
          placeholderTextColor={
            isDarkGlobal ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.5)'
          }
          onChangeText={(e) => {
            setWeight(e);
          }}
          keyboardType="numeric"
          value={Weight}
        />
      </View>
      <TouchableOpacity style={NextBtn} onPress={babyInfoOnPressHandler}>
        <Text style={NextText}>NEXT</Text>
      </TouchableOpacity>
    </View>
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
    paddingBottom: 25,
  },
  sup_title_dark: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 300,
    paddingBottom: 25,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  container_light: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_dark: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    borderRadius: 10,
    width: '100%',
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
  NextBtn_light: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#6082B6',
  },
  NextBtn_dark: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#121212',
    borderColor: '#6082B6',
    borderWidth: 2,
  },
  NextText_light: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 20,
  },
  NextText_dark: {
    color: '#6082B6',
    fontSize: 20,
  },
  datePicker1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
