import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
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

  //Notes==========================================
  const [password, setPassword] = useState("");

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
      {/* First Date Time Picker ====================================================*/}
      <View style={styles.MainContainer}>
        <Text style={styles.text}>Date = {date1.toDateString()}</Text>

        <Text style={styles.text}>
          Time = {time1.toLocaleTimeString("en-US")}
        </Text>

        {datePicker1 && (
          <DateTimePicker
            value={date1}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateSelected1}
            style={styles.datePicker1}
          />
        )}

        {timePicker1 && (
          <DateTimePicker
            value={time1}
            mode={"time"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onTimeSelected1}
            style={styles.datePicker1}
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
        {/* Second Date Time Picker ====================================================*/}
        <Text style={styles.text}>Date = {date2.toDateString()}</Text>

        <Text style={styles.text}>
          Time = {time2.toLocaleTimeString("en-US")}
        </Text>

        {datePicker2 && (
          <DateTimePicker
            value={date2}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateSelected2}
            style={styles.datePicker2}
          />
        )}

        {timePicker2 && (
          <DateTimePicker
            value={time2}
            mode={"time"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onTimeSelected2}
            style={styles.datePicker2}
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

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Notes"
          placeholderTextColor="#003f5c"
          onsetPassword={setPassword}
          secureTextEntry={false}
          multiline={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    // flex: 1,
    padding: 0,
    marginTop: 100,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "blue",
  },

  text: {
    fontSize: 20,
    color: "red",
    padding: 3,
    marginBottom: 0,
    textAlign: "center",
  },
  datePicker1: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 150,
    display: "flex",
    margin: 0,
    padding: 0,
  },
  datePicker2: {
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    height: 150,
    display: "flex",
    margin: 0,
    padding: 0,
  },
  inputView: {
    // flex: ,

    // height: 40,

    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  TextInput: {
    maxHeight: 200,
    // height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    borderColor: "black",
    borderWidth: 2,
    maxHeight: 100,
    position: "absolute",
    // overflow: "scroll",
    // flexGrow: 0,
  },
});
