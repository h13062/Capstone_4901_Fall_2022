import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
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
import axios from 'axios';
import { TextInput } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';

export default function BabyProfiles({ isDarkGlobal, setNavItems, navItems }) {
  const scrollViewRef = useRef();
  const [taskItems, setTaskItems] = useState([]);
  const navigation = useNavigation();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDarkGlobal);
  }, [isDarkGlobal]);

  const [babyList, setBabyList] = useState([]);
  const [filteredList, setFilteredBabyList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const url = 'https://capstone54.azurewebsites.net/';

  useEffect(() => {
    axios
      .get(url + '/api/Baby', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('response:', response.status);
        setBabyList(response.data);
        setFilteredBabyList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const OnSearchTextChange = (text) => {
    setSearchQuery(text);
    if (text.length === 0) {
      setFilteredBabyList(babyList);
    } else {
      let filtered = babyList.filter((item) => item.name.includes(text));
      setFilteredBabyList(filtered);
    }
  };

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
      <SafeAreaView
        style={[
          styles.allProfileWrapper,
          {
            backgroundColor: isDarkGlobal
              ? 'rgba(255, 255, 255, 0.87)'
              : '#121212',
          },
        ]}
      >
        <StatusBar barStyle={isDarkGlobal ? 'dark-content' : 'light-content'} />
        {/* Acitivity header */}
        <View style={profileWrapper}>
          <View>
            <Text style={headerText}>Baby Profile</Text>
          </View>

          <View>
            <Searchbar
              placeholder="Search"
              onChangeText={OnSearchTextChange}
              value={searchQuery}
            />
          </View>

          {/* Task view */}
          <ScrollView style={styles.scrollWrapper} ref={scrollViewRef}>
            <View style={styles.items}>
              {/* This is where the baby profiles will go */}
              {/* <TouchableOpacity style={{ marginBottom: 25 }}>
                <BabyBox text="HUY BUI" />
              </TouchableOpacity> */}
              {filteredList.map((baby, index) => {
                return (
                  // Task component
                  <View key={index} style={{ marginBottom: 25 }}>
                    <BabyBox
                      name={baby.name}
                      dateOfBirth={baby.dateOfBirth}
                      weight={baby.weight}
                      gender={baby.gender}
                    />
                  </View>
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
