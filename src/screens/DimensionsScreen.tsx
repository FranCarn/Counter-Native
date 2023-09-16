import React from 'react';
import { StyleSheet, View, Dimensions, Text, useWindowDimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
export const DimensionsScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{ ...styles.purpleBox, width: width * 0.2 }} />
        <View style={{ ...styles.orangeBox, width: width * 0.2 }} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    backgroundColor: '#3a2afa',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
    height: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
