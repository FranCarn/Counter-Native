import React from 'react';
import {
  CounterScreen,
  BoxObjectModelScreen,
  TestScreen,
  DimensionsScreen,
  PositionScreen,
  FlexScreen,
} from './src/screens';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TestScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
