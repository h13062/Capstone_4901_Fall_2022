import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import prompt from 'react-native-prompt-android';
import BabyBox from '../components/BabyBox';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import BabyInfo from './babyinfo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BabyProfiles({ isDarkGlobal }) {
  const scrollViewRef = useRef();
  const [taskItems, setTaskItems] = useState([]);
  const navigation = useNavigation();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDarkGlobal);
  }, [isDarkGlobal]);

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

  const profileWrapper = isDarkGlobal
    ? styles.profileWrapper_light
    : styles.profileWrapper_dark;

  const headerText = isDarkGlobal
    ? styles.headerText_light
    : styles.headerText_dark;
  return (
    <>
      <SafeAreaView style={styles.allProfileWrapper}>
        {/* Acitivity header */}
        <View style={profileWrapper}>
          <View>
            <Text style={headerText}>Baby Profile</Text>
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
              <TouchableOpacity style={{ marginBottom: 25 }}>
                <BabyBox text="HUY BUI" />
              </TouchableOpacity>
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
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('BabyInfo')}
            >
              <View>
                <Text style={styles.buttonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Navbar isDarkGlobal={isDarkGlobal} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  allProfileWrapper: {
    width: '100%',
    height: '100%',
  },
  profileWrapper_light: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingTop: 25,
    paddingHorizontal: 25,
    flex: 10,
    paddingBottom: 25,
  },
  profileWrapper_dark: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingTop: 25,
    paddingHorizontal: 25,
    flex: 10,
    backgroundColor: '#121212',
    paddingBottom: 25,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
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
    backgroundColor: '#cca558',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 25,
    marginLeft: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    opacity: 0.87,
  },
});
