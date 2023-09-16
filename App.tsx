import React from 'react';
import { CounterScreen, BoxObjectModelScreen, TestScreen } from './src/screens';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      {/* <TestScreen /> */}
      {/* <CounterScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

export default App;
