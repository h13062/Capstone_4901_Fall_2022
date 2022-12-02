import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BabyBox = (props) => {
  return (
    <>
      <View style={styles.boxWrapper}>
        <View style={styles.imgWrapper}></View>
        <View style={{ flex: 6, marginLeft: 25 }}>
          <Text style={styles.text}>{props.text}</Text>
          <Text style={styles.subtext}>Date Here</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>
            &#10095;
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    backgroundColor: '#6082B6',
    width: '100%',
    padding: 25,
    borderRadius: 15,
    flexDirection: 'row',
    flex: 1,
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
