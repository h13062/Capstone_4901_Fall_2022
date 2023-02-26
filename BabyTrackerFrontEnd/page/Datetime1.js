import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

export default function DateTime1() {
  const navigation = useNavigation();

  // for First Date Time Picker=======================================
  const [date1, setDate1] = useState(new Date());
  const [time1, setTime1] = useState(new Date(Date.now()));
  const [datePicker1, setDatePicker1] = useState(false);
  const [timePicker1, setTimePicker1] = useState(false);

  // for Second Date Time Picker=======================================
  const [date2, setDate2] = useState(new Date(date1.getTime() + 5 * 86400000));
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
  //========================================================================
  return Platform.OS === 'ios' ? (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <View style={{ width: '100%', height: '100%' }}>
        <View style={{ paddingLeft: 25, paddingTop: 25 }}>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('Stopwatch')}
          >
            <Text style={{}}>Back</Text>
          </TouchableOpacity>
        </View>
        {/* First Date Time Picker ====================================================*/}
        <View style={[styleSheet.MainContainer, { padding: 25 }]}>
          {/* <Text style={styleSheet.text}>Date = {date1.toDateString()}</Text>

          <Text style={styleSheet.text}>
            Time = {time1.toLocaleTimeString('en-US')}
          </Text> */}

          <View style={{ alignItems: 'flex-start' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'red' }}>Start Date:</Text>
              <DateTimePicker
                value={date1}
                mode={'date'}
                display={'default'}
                is24Hour={true}
                onChange={onDateSelected1}
                style={[styleSheet.datePicker]}
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'red' }}>Start Time:</Text>
              <DateTimePicker
                value={time1}
                mode={'time'}
                display={'default'}
                is24Hour={false}
                onChange={onTimeSelected1}
                style={[styleSheet.datePicker]}
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

          <View style={{ alignItems: 'flex-start' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'red' }}>End Date:</Text>
              <DateTimePicker
                value={date2}
                mode={'date'}
                display={'default'}
                placeholder={toString(
                  new Date(date1.getTime() + 10 * 24 * 60 * 60 * 1000)
                )}
                is24Hour={true}
                onChange={onDateSelected2}
                style={[styleSheet.datePicker]}
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'red' }}>End Time:</Text>
              <DateTimePicker
                value={time2}
                mode={'time'}
                display={'default'}
                is24Hour={false}
                onChange={onTimeSelected2}
                style={[styleSheet.datePicker]}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <View style={{ width: '100%', height: '100%' }}>
        <View style={{ paddingLeft: 25, paddingTop: 25 }}>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('Stopwatch')}
          >
            <Text style={{}}>Back</Text>
          </TouchableOpacity>
        </View>
        {/* First Date Time Picker ====================================================*/}
        <View style={[styleSheet.MainContainer, { padding: 25 }]}>
          <Text style={styleSheet.text}>Date = {date1.toDateString()}</Text>

          <Text style={styleSheet.text}>
            Time = {time1.toLocaleTimeString('en-US')}
          </Text>

          {datePicker1 && (
            <DateTimePicker
              value={date1}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelected1}
              style={styleSheet.datePicker1}
            />
          )}

          {timePicker1 && (
            <DateTimePicker
              value={time1}
              mode={'time'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
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
        <View style={[styleSheet.MainContainer, { padding: 25 }]}>
          <Text style={styleSheet.text}>Date = {date2.toDateString()}</Text>

          <Text style={styleSheet.text}>
            Time = {time2.toLocaleTimeString('en-US')}
          </Text>

          {datePicker2 && (
            <DateTimePicker
              value={date2}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelected2}
              style={styleSheet.datePicker2}
            />
          )}
          {timePicker2 && (
            <DateTimePicker
              value={time2}
              mode={'time'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
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
      </View>
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    // flex: 8,
    alignItems: 'flex-start',
    // backgroundColor: 'white',
  },
  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
  },
  datePicker1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
    textAlign: 'center',
  },
  datePicker2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
});
