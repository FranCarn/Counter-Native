import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

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
        <Button title="Increment" onPress={() => setCounter((prev) => prev + 1)} />
        <Button title="Decrement" onPress={() => setCounter((prev) => prev - 1)} />
      </View>
    </View>
  );
};
