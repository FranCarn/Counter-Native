import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Counter: {counter}</Text>

      <TouchableOpacity onPress={() => setCounter((prev) => prev + 1)} style={styles.fabLocationBR}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCounter((prev) => prev - 1)} style={styles.fabLocationBL}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
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
  fabLocationBR: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  fabLocationBL: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
