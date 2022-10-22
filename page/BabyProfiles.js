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
import BabyBox from '../components/BabyBox';

export default function BabyProfiles() {
  const scrollViewRef = useRef();
  const [taskItems, setTaskItems] = useState([]);

  // Add a task by appending it to taskItems
  //   const handleAddTask = (text) => {
  //     if (text != '') {
  //       Keyboard.dismiss();
  //       setTaskItems([...taskItems, text]);
  //     }
  //   };

  // Complete a task by removing an element at a specific index
  //   const handleClearTask = (index) => {
  //     let itemsCopy = [...taskItems];
  //     itemsCopy.splice(index, 1);
  //     setTaskItems(itemsCopy);
  //   };

  // Complete all tasks by setting taskItems to empty array
  //   const handleClearAllTasks = () => {
  //     setTaskItems([]);
  //   };

  // Alert UI for a prompt to add a task
  //   const alertAddTask = () => {
  //     prompt(
  //       'Add an activity',
  //       'Enter the name of new activity',
  //       [
  //         {
  //           text: 'Add',
  //           onPress: (text) => handleAddTask(text),
  //           style: 'default',
  //         },
  //         {
  //           text: 'Cancel',
  //           style: 'cancel',
  //         },
  //       ],
  //       {
  //         defaultValue: '',
  //       }
  //     );
  //   };

  return (
    <>
      {/* Acitivity header */}
      <View style={styles.activityWrapper}>
        <View>
          <Text style={styles.headerText}>Baby Profile</Text>
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
            {/* This is where the baby profiles will go */}
            <BabyBox text="HUY BUI" />
            {taskItems.map((item, index) => {
              return (
                // Task component
                <TouchableOpacity key={index} style={{ marginBottom: 25 }}>
                  <BabyBox text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.buttonsWrapper}>
          {/* Add activity button */}
          <TouchableOpacity style={styles.addButton}>
            <View>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  activityWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    padding: 25,
    paddingTop: 45,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
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
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
});
