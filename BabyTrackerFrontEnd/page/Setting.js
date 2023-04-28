import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  Alert,
  Modal,
  TextInput,
  Button,
  Appearance,
} from "react-native";
import React, { useRef } from "react";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import Navbar from "../components/Navbar";
import CheckBox from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import ToggleButton from "react-native-toggle-button";
import { useNavigation } from "@react-navigation/native";

export default function Setting({
  setIsDarkGlobal,
  isDarkGlobal,
  setIsUnitMetric,
  isUnitMetric,
  setIsTempMetric,
  isTempMetric,
  setNavItems,
  navItems,
}) {
  const navigation = useNavigation();
  const handleDarkMode = () => {
    setIsDarkGlobal(!isDarkGlobal);
  };

  const handleUnitMetric = () => {
    setIsUnitMetric(!isUnitMetric);
  };

  const handleTempMetric = () => {
    setIsTempMetric(!isTempMetric);
  };

  const settingWrapper = isDarkGlobal
    ? styles.settingWrapper_light
    : styles.settingWrapper_dark;

  const headerText = isDarkGlobal
    ? styles.headerText_light
    : styles.headerText_dark;

  const toggleStyle = isDarkGlobal
    ? styles.toggleStyle_light
    : styles.toggleStyle_dark;

  const tabText = isDarkGlobal ? styles.tabText_light : styles.tabText_dark;

  const toggleActive = isDarkGlobal
    ? styles.toggleActive_light
    : styles.toggleActive_dark;

  const toggleTextActive = isDarkGlobal
    ? styles.toggleTextActive_light
    : styles.toggleTextActive_dark;

  return (
    <>
      <SafeAreaView
        style={[
          styles.allSettingWrapper,
          {
            backgroundColor: isDarkGlobal
              ? "rgba(255, 255, 255, 0.87)"
              : "#121212",
          },
        ]}
      >
        <StatusBar barStyle={isDarkGlobal ? "dark-content" : "light-content"} />
        <View style={settingWrapper}>
          <View>
            <Text style={headerText}>Setting</Text>
          </View>
          <View style={styles.tabStyle}>
            <Text style={tabText}>Dark mode</Text>
            <CheckBox
              value={!isDarkGlobal}
              onValueChange={handleDarkMode}
              color={"#6082B6"}
            />
          </View>
          <View style={styles.tabStyle}>
            <Text style={tabText}>Unit</Text>
            <ToggleButton
              primaryText="cm/kg/ml"
              secondaryText="inch/lb/oz"
              activeButtonStyle={toggleActive}
              activeTextStyle={toggleTextActive}
              style={toggleStyle}
              onPress={handleUnitMetric}
            />
          </View>
          <View style={styles.tabStyle}>
            <Text style={tabText}>Temperature</Text>
            <ToggleButton
              primaryText="C°"
              secondaryText="F°"
              activeButtonStyle={toggleActive}
              activeTextStyle={toggleTextActive}
              style={toggleStyle}
              onPress={handleTempMetric}
            />
          </View>
          <View style={styles.tabStyle}>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={[tabText, { color: "#ff0000" }]}>Add account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Navbar
          isDarkGlobal={isDarkGlobal}
          setNavItems={setNavItems}
          navItems={navItems}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  allSettingWrapper: {
    width: "100%",
    height: "100%",
  },
  settingWrapper_light: {
    width: "100%",
    height: "100%",
    paddingTop: 25,
    paddingHorizontal: 25,
    // marginBottom: 25,
    flex: 10,
  },
  settingWrapper_dark: {
    width: "100%",
    height: "100%",
    paddingTop: 25,
    paddingHorizontal: 25,
    // marginBottom: 25,
    flex: 10,
    backgroundColor: "#121212",
  },
  headerText_light: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 25,
  },
  headerText_dark: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 25,
    color: "#fff",
    opacity: 0.87,
  },
  tabStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    alignItems: "center",
  },
  tabText_light: {
    color: "#000",
    fontSize: 18,
  },
  tabText_dark: {
    color: "#fff",
    fontSize: 18,
  },
  toggleStyle_light: {
    backgroundColor: "#e0dcdc",
  },
  toggleStyle_dark: {
    backgroundColor: "#3b3939",
  },
  toggleInactive: {
    borderWidth: 0,
  },
  toggleActive_light: {
    backgroundColor: "#b4cbed",
    borderWidth: 0,
  },
  toggleActive_dark: {
    backgroundColor: "#6082B6",
    borderWidth: 0,
  },
  toggleTextActive_light: {
    color: "#355382",
  },
  toggleTextActive_dark: {
    color: "#fff",
    opacity: 0.87,
  },
});
