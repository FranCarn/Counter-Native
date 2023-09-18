import React from 'react';
import {
  CounterScreen,
  BoxObjectModelScreen,
  TestScreen,
  DimensionsScreen,
  PositionScreen,
} from './src/screens';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TestScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
