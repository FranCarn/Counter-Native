import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#28c4d9' },
  box1: {
    flex: 2,
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 20,
  },
  box2: {
    flex: 4,
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 20,
  },
  box3: {
    flex: 2,
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 20,
  },
});
