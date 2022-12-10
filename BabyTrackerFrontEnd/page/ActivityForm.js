import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Alert,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function ActivityForm({ route }) {
  const { taskItems, setTaskItems } = route.params;
  const navigation = useNavigation();
  const [activityName, setAcivityName] = useState('');

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, activityName]);
    setAcivityName('');
  };
  return (
    <>
      <View style={styles.modalWrapper}>
        <Text style={styles.headerText}>Enter name of the new activity:</Text>
        <TextInput
          style={styles.inputField}
          value={activityName}
          onChangeText={(text) => setAcivityName(text)}
        />
        <TouchableOpacity
          style={styles.modalEnter}
          onPress={() => {
            handleAddTask();
            navigation.navigate('Activity');
          }}
        >
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
});
