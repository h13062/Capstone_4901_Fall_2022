import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import { useState } from 'react';
import React, { useRef } from 'react';
import prompt from 'react-native-prompt-android';
import Task from '../components/Task';
import Navbar from '../components/Navbar';

export default function Activity() {
  const scrollViewRef = useRef();
  const [taskItems, setTaskItems] = useState([]);

  // Add a task by appending it to taskItems
  const handleAddTask = (text) => {
    if (text != '') {
      Keyboard.dismiss();
      setTaskItems([...taskItems, text]);
    }
  };

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

  return (
    <>
      {/* Acitivity header */}
      <View style={styles.activityWrapper}>
        <View>
          <Text style={styles.headerText}>Activity Tracking</Text>
        </View>

        {/* Task view */}
        <ScrollView
          style={styles.scrollWrapper}
          ref={scrollViewRef}
          onContentSizeChange={() => {
            scrollViewRef.current.scrollToEnd({ animated: true });
          }}
        >
          <View style={styles.items}>
            {/* This is where the activities will go */}
            <TouchableOpacity style={{ marginBottom: 25 }}>
              <Task text="Sleeping" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom: 25 }}>
              <Task text="Eating" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom: 25 }}>
              <Task text="Playing" />
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

        <View style={styles.buttonsWrapper}>
          {/* Clear all tasks button */}
          <TouchableOpacity
            disabled={taskItems.length === 0}
            onPress={() => alertClearTasks()}
            style={
              taskItems.length === 0 ? { display: 'none' } : styles.clearButton
            }
          >
            <View>
              <Text style={styles.buttonText}>x</Text>
            </View>
          </TouchableOpacity>

          {/* Add activity button */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => alertAddTask()}
          >
            <View>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Navbar />
    </>
  );
}

const styles = StyleSheet.create({
  activityWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    padding: 25,
    paddingTop: 55,
    flex: 10,
  },
  backText: {
    fontSize: 15,
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
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
});
