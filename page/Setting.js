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
} from 'react-native';
import React, { useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import CheckBox from 'expo-checkbox';

export default function Setting() {
  const { colors } = useTheme();

  // const handleDarkMode = () => {
  //   setIsDark(!isDark);
  // };
  return (
    // <>
    //   <View
    //     style={
    //       isDark ? styles.settingWrapper_light : styles.settingWrapper_dark
    //     }
    //   >
    //     <View>
    //       <Text
    //         style={isDark ? styles.headerText_light : styles.headerText_dark}
    //       >
    //         Setting
    //       </Text>
    //     </View>
    //     <View style={styles.tabStyle}>
    //       <Text style={isDark ? { color: '#000' } : { color: '#fff' }}>
    //         Dark mode
    //       </Text>
    //       <CheckBox
    //         style={styles.CheckBox}
    //         value={!isDark}
    //         onValueChange={handleDarkMode}
    //         color={isDark ? '#4630EB' : undefined}
    //       />
    //     </View>
    //   </View>
    //   <Navbar />
    // </>
    <TouchableOpacity style={{ backgroundColor: colors.card }}>
      <Text style={{ color: colors.text }}>Button!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  settingWrapper_light: {
    width: '100%',
    height: '100%',
    padding: 25,
    paddingTop: 40,
    flex: 10,
    backgroundColor: '#fff',
  },
  settingWrapper_dark: {
    width: '100%',
    height: '100%',
    padding: 25,
    paddingTop: 40,
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
  },
});
