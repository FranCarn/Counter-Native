import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Counter: {counter}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => setCounter((prev) => prev + 1)}>
          <View style={styles.button}>
            <Text>Increment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCounter((prev) => prev - 1)}>
          <View style={styles.button}>
            <Text>Decrement</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -15,
  },
  buttonsContainer: { display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10 },
  button: { backgroundColor: '#eaeaea', borderRadius: 100, padding: 10 },
});
