import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#1f1e33',
    width: '100%',
    padding: 40,
    borderRadius: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
});

export default Task;
