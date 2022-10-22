import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BabyBox = (props) => {
  return (
    <>
      <View style={styles.boxWrapper}>
        <View style={styles.imgWrapper}></View>
        <View style={{ marginLeft: 25 }}>
          <Text style={styles.text}>{props.text}</Text>
          <Text style={styles.subtext}>Date Here</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    backgroundColor: '#1f1e33',
    width: '100%',
    padding: 25,
    borderRadius: 15,
    flexDirection: 'row',
  },
  imgWrapper: {
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  subtext: {
    color: '#fff',
    fontSize: 15,
  },
});

export default BabyBox;
