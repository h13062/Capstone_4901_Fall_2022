import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BabyBox = ({ name, dateOfBirth, weight, gender }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <TouchableOpacity style={styles.boxWrapper} onPress={handlePress}>
        {/* <View style={styles.imgWrapper}></View> */}
        <View style={{ flex: 6, marginLeft: 25 }}>
          <Text style={styles.text}>{name}</Text>
          {expanded && (
            <>
              <Text style={styles.subtext}>
                Date of birth: {dateOfBirth.split('T')[0]}
              </Text>
              <Text style={styles.subtext}>Weight: {weight}</Text>
              <Text style={styles.subtext}>Gender: {gender}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
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
    opacity: 0.87,
  },
  subtext: {
    color: '#fff',
    fontSize: 15,
    opacity: 0.87,
  },
  arrow: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.87,
  },
});

export default BabyBox;
