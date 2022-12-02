import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Alert,
  Modal,
  TextInput,
  Button,
  Appearance,
} from 'react-native';
import React, { useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import CheckBox from 'expo-checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToggleButton from 'react-native-toggle-button';

export default function Setting({
  setIsDarkGlobal,
  isDarkGlobal,
  setIsUnitMetric,
  isUnitMetric,
  setIsTempMetric,
  isTempMetric,
}) {
  // const [isDark, setIsDark] = useState(true);
  const handleDarkMode = () => {
    setIsDarkGlobal(!isDarkGlobal);
  };

  const handleUnitMetric = () => {
    setIsUnitMetric(!isUnitMetric);
  };

  const handleTempMetric = () => {
    setIsTempMetric(!isTempMetric);
  };
  return (
    <>
      <SafeAreaView style={styles.allSettingWrapper}>
        <View
          style={
            isDarkGlobal
              ? styles.settingWrapper_light
              : styles.settingWrapper_dark
          }
        >
          <View>
            <Text
              style={
                isDarkGlobal ? styles.headerText_light : styles.headerText_dark
              }
            >
              Setting
            </Text>
          </View>
          <View style={styles.tabStyle}>
            <Text
              style={isDarkGlobal ? styles.tabText_light : styles.tabText_dark}
            >
              Dark mode
            </Text>
            <CheckBox
              style={styles.CheckBox}
              value={!isDarkGlobal}
              onValueChange={handleDarkMode}
              color={isDarkGlobal ? '#6082B6' : undefined}
            />
          </View>
          <View style={styles.tabStyle}>
            <Text
              style={isDarkGlobal ? styles.tabText_light : styles.tabText_dark}
            >
              Unit
            </Text>
            <ToggleButton
              primaryText="cm/kg/ml"
              secondaryText="inch/lb/oz"
              activeButtonStyle={styles.toggleActive}
              activeTextStyle={styles.toggleTextActive}
              style={
                isDarkGlobal
                  ? styles.toggleStyle_light
                  : styles.toggleStyle_dark
              }
              onPress={handleUnitMetric}
            />
          </View>
          <View style={styles.tabStyle}>
            <Text
              style={isDarkGlobal ? styles.tabText_light : styles.tabText_dark}
            >
              Temperature
            </Text>
            <ToggleButton
              primaryText="C°"
              secondaryText="F°"
              activeButtonStyle={styles.toggleActive}
              activeTextStyle={styles.toggleTextActive}
              style={
                isDarkGlobal
                  ? styles.toggleStyle_light
                  : styles.toggleStyle_dark
              }
              onPress={handleTempMetric}
            />
          </View>
        </View>
        <Navbar isDarkGlobal={isDarkGlobal} />
      </SafeAreaView>
    </>
    // <TouchableOpacity style={{ backgroundColor: colors.card }}>
    //   <Text style={{ color: colors.text }}>Button!</Text>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  allSettingWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingHorizontal: 0,
  },
  settingWrapper_light: {
    width: '100%',
    height: '100%',
    paddingTop: 25,
    paddingHorizontal: 25,
    // marginBottom: 25,
    flex: 10,
  },
  settingWrapper_dark: {
    width: '100%',
    height: '100%',
    paddingTop: 25,
    paddingHorizontal: 25,
    // marginBottom: 25,
    flex: 10,
    backgroundColor: '#000',
  },
  headerText_light: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 25,
  },
  headerText_dark: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 25,
    color: '#fff',
  },
  tabStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  tabText_light: {
    color: '#000',
    fontSize: 18,
  },
  tabText_dark: {
    color: '#fff',
    fontSize: 18,
  },
  toggleStyle_light: {
    backgroundColor: '#e0dcdc',
  },
  toggleStyle_dark: {
    backgroundColor: '#3b3939',
  },
  toggleInactive: {
    borderWidth: 0,
  },
  toggleActive: {
    backgroundColor: '#6082B6',
    borderWidth: 0,
  },
  toggleTextActive: {
    color: '#fff',
  },
});
