import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  StatusBar,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

export default function DateTime1({ isDarkGlobal }) {
  const navigation = useNavigation();
  const route = useRoute();
  const activityURL = route.params;

  console.log("activityURL: ", activityURL);

  const url = "https://capstone54.azurewebsites.net/";

  // for First Date Time Picker=======================================
  const [date1, setDate1] = useState(new Date());
  const [time1, setTime1] = useState(new Date(Date.now()));
  const [datePicker1, setDatePicker1] = useState(false);
  const [timePicker1, setTimePicker1] = useState(false);

  // for Second Date Time Picker=======================================
  const [date2, setDate2] = useState(new Date());
  const [time2, setTime2] = useState(new Date(Date.now()));
  const [datePicker2, setDatePicker2] = useState(false);
  const [timePicker2, setTimePicker2] = useState(false);

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

  const CustomOnSubmitHandler = () => {
    console.log("On submit object:", {
      Date1: date1.toDateString(),
      Time1: time1.toLocaleTimeString("en-US"),
      Date2: date2.toDateString(),
      Time2: time2.toLocaleTimeString("en-US"),
    });

    var tempDate = date1.getDate();
    if (date1.getDate() < 10) {
      tempDate = "".concat("0", date1.getDate());
    }
    var tempMonth = date1.getMonth() + 1;
    if (date1.getMonth() + 1 < 10) {
      tempMonth = "".concat("0", date1.getMonth() + 1);
    }

    console.log(tempMonth, tempDate);
    console.log("".concat(tempMonth, "-", tempDate, "-", date1.getFullYear()));

    if (activityURL === "/api/SleepActivity") {
      axios
        .post(
          url + activityURL,
          {
            day: "".concat(tempMonth, "-", tempDate, "-", date1.getFullYear()),
            sleepStart: time1.toLocaleTimeString("en-US"),
            sleepEnd: time2.toLocaleTimeString("en-US"),
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("response:", response.status);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (activityURL === "/api/EatActivity") {
      axios
        .post(
          url + activityURL,
          {
            day: "".concat(tempMonth, "-", tempDate, "-", date1.getFullYear()),
            eatStart: time1.toLocaleTimeString("en-US"),
            eatEnd: time2.toLocaleTimeString("en-US"),
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("response:", response.status);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (activityURL === "/api/PlayActivityControllercs") {
      axios
        .post(
          url + activityURL,
          {
            day: "".concat(tempMonth, "-", tempDate, "-", date1.getFullYear()),
            playStart: time1.toLocaleTimeString("en-US"),
            playEnd: time2.toLocaleTimeString("en-US"),
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("response:", response.status);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    navigation.navigate("Stopwatch");
  };
  //========================================================================
  return Platform.OS === "ios" ? (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: isDarkGlobal ? "rgba(255, 255, 255, 0.87)" : "#121212",
      }}
    >
      <View style={{ width: "100%", height: "100%" }}>
        <StatusBar barStyle={isDarkGlobal ? "dark-content" : "light-content"} />
        <View style={{ paddingLeft: 25, paddingTop: 25 }}>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate("Stopwatch")}
          >
            <Text
              style={{
                color: "#6082B6",
                fontSize: 20,
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </View>
        {/* First Date Time Picker ====================================================*/}
        <View style={[styleSheet.MainContainer, { padding: 25 }]}>
          {/* <Text style={styleSheet.text}>Date = {date1.toDateString()}</Text>

          <Text style={styleSheet.text}>
            Time = {time1.toLocaleTimeString('en-US')}
          </Text> */}

          <View
            style={{
              alignItems: "flex-start",
              backgroundColor: isDarkGlobal
                ? "rgba(150, 150, 150, 0.1)"
                : "rgba(133, 133, 133, 0.5)",
              padding: 20,
              borderRadius: 10,
              width: "100%",
              paddingBottom: 5,
            }}
          >
            <Text
              style={{
                color: isDarkGlobal ? "#121212" : "rgba(255, 255, 255, 0.87)",
                fontSize: 30,
                marginBottom: 25,
                fontWeight: "bold",
              }}
            >
              Start
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                borderRadius: 10,
                marginBottom: 10,
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: isDarkGlobal ? "#121212" : "rgba(255, 255, 255, 0.87)",
                  fontSize: 20,
                }}
              >
                Start Date:
              </Text>
              <DateTimePicker
                value={date1}
                mode={"date"}
                display={"default"}
                is24Hour={true}
                onChange={onDateSelected1}
                style={[
                  styleSheet.datePicker,
                  {
                    color: isDarkGlobal
                      ? "#121212"
                      : "rgba(255, 255, 255, 0.87)",
                  },
                ]}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                borderRadius: 10,
                marginBottom: 10,
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: isDarkGlobal ? "#121212" : "rgba(255, 255, 255, 0.87)",
                  fontSize: 20,
                }}
              >
                Start Time:
              </Text>
              <DateTimePicker
                value={time1}
                mode={"time"}
                display={"default"}
                is24Hour={false}
                onChange={onTimeSelected1}
                style={[
                  styleSheet.datePicker,
                  {
                    color: isDarkGlobal
                      ? "#121212"
                      : "rgba(255, 255, 255, 0.87)",
                  },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Second Date Time Picker ====================================================*/}
        <View style={[styleSheet.MainContainer, { padding: 25 }]}>
          {/* <Text style={styleSheet.text}>Date = {date2.toDateString()}</Text>

          <Text style={styleSheet.text}>
            Time = {time2.toLocaleTimeString('en-US')}
          </Text> */}

          <View
            style={{
              alignItems: "flex-start",
              backgroundColor: isDarkGlobal
                ? "rgba(150, 150, 150, 0.1)"
                : "rgba(133, 133, 133, 0.5)",
              padding: 20,
              borderRadius: 10,
              width: "100%",
              paddingBottom: 5,
            }}
          >
            <Text
              style={{
                color: isDarkGlobal ? "#121212" : "rgba(255, 255, 255, 0.87)",
                fontSize: 30,
                marginBottom: 25,
                fontWeight: "bold",
              }}
            >
              End
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                borderRadius: 10,
                marginBottom: 10,
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: isDarkGlobal ? "#121212" : "rgba(255, 255, 255, 0.87)",
                  fontSize: 20,
                }}
              >
                End Date:
              </Text>
              <DateTimePicker
                value={date2}
                mode={"date"}
                display={"default"}
                placeholder={toString(
                  new Date(date1.getTime() + 10 * 24 * 60 * 60 * 1000)
                )}
                is24Hour={true}
                onChange={onDateSelected2}
                style={[styleSheet.datePicker]}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                borderRadius: 10,
                marginBottom: 10,
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: isDarkGlobal ? "#121212" : "rgba(255, 255, 255, 0.87)",
                  fontSize: 20,
                }}
              >
                End Time:
              </Text>
              <DateTimePicker
                value={time2}
                mode={"time"}
                display={"default"}
                is24Hour={false}
                onChange={onTimeSelected2}
                style={[styleSheet.datePicker]}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styleSheet.submitBtn}
          onPress={CustomOnSubmitHandler}
        >
          <Text style={styleSheet.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView> // Start of Android section beyond this point==========================
  ) : (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <View style={{ paddingLeft: 25, paddingTop: 25 }}>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate("Stopwatch")}
          >
            <Text style={{}}>Back</Text>
          </TouchableOpacity>
        </View>
        {/* First Date Time Picker ====================================================*/}
        <View style={[styleSheet.MainContainer1, { padding: 25 }]}>
          <Text style={styleSheet.text}>Date: {date1.toDateString()}</Text>

          <Text style={styleSheet.text}>
            Time: {time1.toLocaleTimeString("en-US")}
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
                title="Pick Date"
                color="#6082B6"
                onPress={showDatePicker1}
              />
            </View>
          )}

          {!timePicker1 && (
            <View style={{ margin: 10 }}>
              <Button
                title="Pick Time"
                color="#6082B6"
                onPress={showTimePicker1}
              />
            </View>
          )}
        </View>

        {/* Second Date Time Picker ====================================================*/}
        <View style={[styleSheet.MainContainer2, { padding: 25 }]}>
          <Text style={styleSheet.text}>Date: {date2.toDateString()}</Text>

          <Text style={styleSheet.text}>
            Time: {time2.toLocaleTimeString("en-US")}
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
                title="Pick Date"
                color="#6082B6"
                onPress={showDatePicker2}
              />
            </View>
          )}

          {!timePicker2 && (
            <View style={{ margin: 10 }}>
              <Button
                title="Pick Time"
                color="#6082B6"
                onPress={showTimePicker2}
              />
            </View>
          )}
        </View>
        <TouchableOpacity
          style={styleSheet.submitBtn}
          onPress={CustomOnSubmitHandler}
        >
          <Text style={styleSheet.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.87)",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  MainContainer1: {
    backgroundColor: "rgba(255, 255, 255, 0.87)",
    display: "flex",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  MainContainer2: {
    backgroundColor: "rgba(255, 255, 255, 0.87)",
    display: "flex",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 25,
    color: "red",
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },
  datePicker: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
  },
  datePicker1: {
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    height: 260,
    display: "flex",
    textAlign: "center",
  },
  datePicker2: {
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    height: 260,
    display: "flex",
  },
  submitBtn: {
    width: 300,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#6082B6",
    borderColor: "#6082B6",
    borderWidth: 2,
  },
  submitText: {
    color: "rgba(255, 255, 255, 0.87)",
    fontSize: 20,
  },
});
