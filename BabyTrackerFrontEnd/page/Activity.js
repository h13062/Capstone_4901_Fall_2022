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
} from 'react-native';
import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import prompt from 'react-native-prompt-android';
import Task from '../components/Task';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

export default function Activity({
  isDarkGlobal,
  setNavItems,
  navItems,
  sleepURL,
  eatURL,
  playURL,
}) {
  const scrollViewRef = useRef();
  const [taskItems, setTaskItems] = useState([]); // Problem here
  const navigation = useNavigation();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDarkGlobal);
  }, [isDarkGlobal]);

  const url = 'https://capstone54.azurewebsites.net/';

  const registerOnSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .get(url + '/api/Account/signup', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('response:', response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(url + '/api/EatActivity', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('response:', response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(url + '/api/PlayActivityControllercs', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('response:', response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(url + '/api/SleepActivity', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('response:', response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Complete a task by removing an element at a specific index
  //   const handleClearTask = (index) => {
  //     let itemsCopy = [...taskItems];
  //     itemsCopy.splice(index, 1);
  //     setTaskItems(itemsCopy);
  //   };

  // Complete all tasks by setting taskItems to empty array
  const handleClearAllTasks = () => {
    setTaskItems([]);
  };

  // Alert UI for a prompt to add a task
  const alertAddTask = () => {
    prompt(
      'Add an activity',
      'Enter the name of new activity',
      [
        {
          text: 'Add',
          onPress: (text) => handleAddTask(text),
          style: 'default',
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {
        defaultValue: '',
      }
    );
  };

  // Alert UI for completing all tasks
  const alertClearTasks = () => {
    Alert.alert('Alert', 'Are you sure you want to clear all activities?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => handleClearAllTasks(),
        style: 'destructive',
      },
    ]);
  };

  const activityWrapper = isDarkGlobal
    ? styles.activityWrapper_light
    : styles.activityWrapper_dark;

  const headerText = isDarkGlobal
    ? styles.headerText_light
    : styles.headerText_dark;
  return (
    <>
      <SafeAreaView
        style={[
          styles.allAcivityWrapper,
          {
            backgroundColor: isDarkGlobal
              ? 'rgba(255, 255, 255, 0.87)'
              : '#121212',
          },
        ]}
      >
        <StatusBar barStyle={isDarkGlobal ? 'dark-content' : 'light-content'} />
        {/* Acitivity header */}
        <View style={activityWrapper}>
          <View>
            <Text style={headerText}>Activity Tracking</Text>
          </View>

          {/* Task view */}
          <ScrollView
            style={styles.scrollWrapper}
            ref={scrollViewRef}
            onContentSizeChange={() => {
              scrollViewRef.current.scrollToEnd({ animated: true });
            }}
          >
            <View>
              {/* This is where the activities will go */}
              <TouchableOpacity
                style={{ marginBottom: 25 }}
                onPress={() => {
                  navigation.navigate('Stopwatch', '/api/SleepActivity');
                }}
              >
                <Task
                  text="Sleeping"
                  isDarkGlobal={isDarkGlobal}
                  icon="moon-outline"
                  bg="#6082B6"
                  iconColor="#233c63"
                  iconColorDark="#d3e0f5"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: 25 }}
                onPress={() => {
                  navigation.navigate('Stopwatch', '/api/EatActivity');
                }}
              >
                <Task
                  text="Eating"
                  isDarkGlobal={isDarkGlobal}
                  icon="nutrition-outline"
                  bg="#e0a370"
                  iconColor="#7d502a"
                  iconColorDark="#f5e2d3"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginBottom: 25 }}
                onPress={() => {
                  navigation.navigate(
                    'Stopwatch',
                    '/api/PlayActivityControllercs'
                  );
                }}
              >
                <Task
                  text="Playing"
                  isDarkGlobal={isDarkGlobal}
                  icon="tennisball-outline"
                  bg="#60c689"
                  iconColor="#21693e"
                  iconColorDark="#c5edd5"
                />
              </TouchableOpacity>
              {taskItems.map((item, index) => {
                return (
                  // Task component
                  <TouchableOpacity key={index} style={{ marginBottom: 25 }}>
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* <View style={styles.buttonsWrapper}>
            <TouchableOpacity
              disabled={taskItems.length === 0}
              onPress={() => alertClearTasks()}
              style={
                taskItems.length === 0
                  ? { display: 'none' }
                  : styles.clearButton
              }
            >
              <View>
                <Text style={styles.buttonText}>x</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() =>
                navigation.navigate('ActivityForm', {
                  taskItems,
                  setTaskItems,
                })
              }
            >
              <View>
                <Text style={styles.buttonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View> */}
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
  allAcivityWrapper: {
    width: '100%',
    height: '100%',
  },
  activityWrapper_light: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    flex: 10,
    paddingTop: 25,
    paddingHorizontal: 25,
  },
  activityWrapper_dark: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    flex: 10,
    paddingTop: 25,
    paddingHorizontal: 25,
    backgroundColor: '#121212',
  },
  backText: {
    fontSize: 15,
    flex: 1,
  },
  headerText_light: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  headerText_dark: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    opacity: 0.87,
  },
  rightSide: {
    flex: 1,
  },
  scrollWrapper: {
    marginTop: 25,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingHorizontal: 25,
  },
  addButton: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 25,
    marginLeft: 25,
  },
  clearButton: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
  modalWrapper: {
    width: '100%',
    height: '100%',
    padding: 25,
    paddingTop: 40,
  },
  inputField: {
    marginTop: 25,
    backgroundColor: 'fff',
    borderColor: '#1f1e33',
    borderWidth: 2,
    borderRadius: 5,
    height: 35,
  },
  modalEnter: {
    marginTop: 25,
    backgroundColor: '#1f1e33',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 10,
  },
});
