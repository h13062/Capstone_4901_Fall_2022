import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
export default function DateTime1() {
  // for First Date Time Picker=======================================
  const [datePicker1, setDatePicker1] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [timePicker1, setTimePicker1] = useState(false);
  const [time1, setTime1] = useState(new Date(Date.now()));

  // for Second Date Time Picker=======================================
  const [datePicker2, setDatePicker2] = useState(false);
  const [date2, setDate2] = useState(new Date());
  const [timePicker2, setTimePicker2] = useState(false);
  const [time2, setTime2] = useState(new Date(Date.now()));

  // Function for First Date Time Picker================================
  function showDatePicker1() {
    setDatePicker1(true);
  }
  function showTimePicker1() {
    setTimePicker1(true);
  }
  function onDateSelected1(event, value) {
    setDate1(value);
    setDatePicker1(false);
  }
  function onTimeSelected1(event, value) {
    setTime1(value);
    setTimePicker1(false);
  }
  // Function for Second Date Time Picker==================================
  function showDatePicker2() {
    setDatePicker2(true);
  }
  function showTimePicker2() {
    setTimePicker2(true);
  }
  function onDateSelected2(event, value) {
    setDate2(value);
    setDatePicker2(false);
  }
  function onTimeSelected2(event, value) {
    setTime2(value);
    setTimePicker2(false);
  }
  //========================================================================
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* First Date Time Picker ====================================================*/}
      <View style={styleSheet.MainContainer}>
        <Text style={styleSheet.text}>Date = {date1.toDateString()}</Text>

        <Text style={styleSheet.text}>
          Time = {time1.toLocaleTimeString("en-US")}
        </Text>

        {datePicker1 && (
          <DateTimePicker
            value={date1}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateSelected1}
            style={styleSheet.datePicker1}
          />
        )}

        {timePicker1 && (
          <DateTimePicker
            value={time1}
            mode={"time"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onTimeSelected1}
            style={styleSheet.datePicker1}
          />
        )}

        {!datePicker1 && (
          <View style={{ margin: 10 }}>
            <Button
              title="Show Date Picker"
              color="green"
              onPress={showDatePicker1}
            />
          </View>
        )}

        {!timePicker1 && (
          <View style={{ margin: 10 }}>
            <Button
              title="Show Time Picker"
              color="green"
              onPress={showTimePicker1}
            />
          </View>
        )}
      </View>

      {/* Second Date Time Picker ====================================================*/}
      <View style={styleSheet.MainContainer}>
        <Text style={styleSheet.text}>Date = {date2.toDateString()}</Text>

        <Text style={styleSheet.text}>
          Time = {time2.toLocaleTimeString("en-US")}
        </Text>

        {datePicker2 && (
          <DateTimePicker
            value={date2}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateSelected2}
            style={styleSheet.datePicker2}
          />
        )}

        {timePicker2 && (
          <DateTimePicker
            value={time2}
            mode={"time"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onTimeSelected2}
            style={styleSheet.datePicker2}
          />
        )}

        {!datePicker2 && (
          <View style={{ margin: 10 }}>
            <Button
              title="Show Date Picker"
              color="green"
              onPress={showDatePicker2}
            />
          </View>
        )}

        {!timePicker2 && (
          <View style={{ margin: 10 }}>
            <Button
              title="Show Time Picker"
              color="green"
              onPress={showTimePicker2}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 6,
    marginTop: 100,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
  },

  text: {
    fontSize: 25,
    color: "red",
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },
  datePicker1: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 320,
    height: 260,
    display: "flex",
  },
  datePicker2: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 320,
    height: 260,
    display: "flex",
  },
});
