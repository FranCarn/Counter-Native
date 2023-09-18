import React from 'react';
import { CounterScreen } from './src/screens';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CounterScreen />
    </SafeAreaView>
  );
};

export default App;
