import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: -15,
      }}
    >
      <Text>Counter: {counter}</Text>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10 }}>
        <TouchableOpacity onPress={() => setCounter((prev) => prev + 1)}>
          <View style={{ backgroundColor: 'black', borderRadius: 100 }}>
            <Text>Increment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCounter((prev) => prev - 1)}>
          <View style={{ backgroundColor: 'black', borderRadius: 100 }}>
            <Text>Decrement</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
