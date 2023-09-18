import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#28c4d9',
    alignItems: 'flex-start',
  },
  box1: {
    alignSelf: 'flex-start',
    borderColor: '#fff',
    borderWidth: 2,
    fontSize: 20,
    padding: 10,
  },
  box2: {
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    fontSize: 20,
    padding: 10,
  },
  box3: {
    alignSelf: 'flex-end',
    borderColor: '#fff',
    borderWidth: 2,
    fontSize: 20,
    padding: 10,
  },
});
