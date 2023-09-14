import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Counter: {counter}</Text>

      <Fab setCounter={setCounter} title="+1" position="left" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    top: -15,
  },
});
