// import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
function Control({ isRunning, handleleftButtonPress, handlerightButtonPress }) {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#333333" : "#1c1c1e" },
        ]}
        onPress={handleleftButtonPress}
        activeOpacity={1}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "#fff" : "#9d9ca2" }}>
            {isRunning ? "Lap" : "Reset"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity
        
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "red" : "#0a2a12" },
        ]}
        onPress={handlerightButtonPress}
      >
        <View style={styles.controlButton}>
          <Text
            style={{
              color: isRunning ? "#ddd" : "#37d05c",
              fontWeight: "bold",
            }}
          >
            {isRunning ? "Stop" : "Start"}
          </Text>
        </View>
      </TouchableOpacity> */}

      {isRunning ? (
        <TouchableOpacity
          style={[styles.controlButtonBorder, { backgroundColor: "red" }]}
          onPress={handlerightButtonPress}
          activeOpacity={1}
        >
          <View style={styles.controlButton}>
            <Text
              style={{
                color: "#ddd",
                fontWeight: "bold",
              }}
            >
              Stop
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.controlButtonBorder, { backgroundColor: "#0a2a12" }]}
          onPress={handlerightButtonPress}
          activeOpacity={1}
        >
          <View style={styles.controlButton}>
            <Text
              style={{
                color: "#37d05c",
                fontWeight: "bold",
              }}
            >
              Start
            </Text>
          </View>
        </TouchableOpacity>
      )}

      {/* {isRunning ? (
        <Button
          title="Start"
          style={styles.buttonStart}
          color="#f194ff"
          onPress={handlerightButtonPress}
        />
      ) : (
        <Button
          title="Stop"
          style={styles.buttonStop}
          onPress={handlerightButtonPress}
        />
      )} */}
    </>
  );
}
const CENTER = {
  justifyContent: "center",
  alignItems: "center",
};
const styles = StyleSheet.create({
  controlButtonBorder: {
    ...CENTER,
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  controlButton: {
    ...CENTER,
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: "#000",
    borderWidth: 1,
  },
  buttonStart: {
    width: 100000,
    height: 70,
    borderRadius: 70,
    color: "#f194ff",
  },
});
export default React.memo(Control);
