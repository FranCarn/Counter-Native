import React from 'react';
import { CounterScreen, BoxObjectModelScreen, TestScreen, DimensionsScreen } from './src/screens';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TestScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionsScreen />
    </SafeAreaView>
  );
};

export default App;
