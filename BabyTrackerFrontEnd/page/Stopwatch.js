import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const screen = Dimensions.get('window');

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

export default function App({ isDarkGlobal }) {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { hrs, mins, secs } = getRemaining(remainingSecs);
  const [currentDate, setCurrrentDate] = useState(new Date());
  const navigation = useNavigation();

  const route = useRoute();
  const activityURL = route.params;

  toggle = () => {
    setIsActive(!isActive);
  };

  reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  };

  useEffect(() => {
    console.log('activityURL: ', activityURL);
    console.log(currentDate);
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

  const container = isDarkGlobal
    ? styles.container_light
    : styles.container_dark;

  const timerText = isDarkGlobal
    ? styles.timerText_light
    : styles.timerText_dark;

  const handleOnSubmit = () => {
    console.log(remainingSecs);
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
      <Text style={timerText}>{`${hrs}:${mins}:${secs}`}</Text>
      <TouchableOpacity
        disabled={!isActive}
        onPress={this.toggle}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {isActive ? 'Stop' : 'Start'}
          {console.log('isActive: ', isActive)}
        </Text>
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
          onPress={() => navigation.navigate('Activity')}
        >
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customBtn}
          onPress={() => navigation.navigate('DateTimePicker', activityURL)}
        >
          <Text style={styles.customText}>CUSTOM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customBtn} onPress={handleOnSubmit}>
          <Text style={styles.customText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controller: {
    // flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  backBtn: {
    width: 100,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#6082B6',
    // marginTop: 10,
    paddingTop: 0,
    // marginLeft
  },
  backText: {
    color: 'white',
    fontSize: 20,
  },
  customBtn: {
    width: 100,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#6082B6',
    // marginTop: 10,
    paddingTop: 0,
  },
  customText: {
    color: 'white',
    fontSize: 20,
  },
  container_light: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_dark: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 10,
    borderColor: '#B9AAFF',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 45,
    color: '#B9AAFF',
  },
  timerText_light: {
    fontSize: 90,
    marginBottom: 20,
  },
  timerText_dark: {
    fontSize: 90,
    marginBottom: 20,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  buttonReset: {
    marginTop: 20,
    borderColor: '#FF851B',
  },
  buttonTextReset: {
    color: '#FF851B',
  },
  ManualBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#00bfff',
    // marginTop: 0,
    paddingTop: 0,
  },
  ManualText: {
    color: 'white',
    fontSize: 20,
  },
});
