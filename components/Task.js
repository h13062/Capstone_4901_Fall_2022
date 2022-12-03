import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import preprocess from 'react-native-web/dist/cjs/exports/StyleSheet/preprocess';

const Task = (props) => {
  return (
    <View style={props.isDarkGlobal ? styles.item_light : styles.item_dark}>
      <Text style={props.isDarkGlobal ? styles.text_light : styles.text_dark}>
        {props.text}
      </Text>
      <Ionicons
        name={props.icon}
        size={80}
        color={props.isDarkGlobal ? '#355382' : '#rgba(180, 203, 237, 0.5)'}
      ></Ionicons>
    </View>
  );
};

const styles = StyleSheet.create({
  item_light: {
    backgroundColor: '#b4cbed',
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item_dark: {
    backgroundColor: '#6082B6',
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_light: {
    color: '#355382',
    fontSize: 30,
  },
  text_dark: {
    color: '#fff',
    fontSize: 30,
    opacity: 0.87,
  },
});

export default Task;
