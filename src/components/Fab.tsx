import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

interface Props {
  position?: 'br' | 'bl';
  title: string;
  onPress: () => void;
}

export const Fab = ({ position, title, onPress }: Props) => {
  return (
    <View style={[styles.fabLocation, position === 'bl' ? styles.left : styles.right]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('28425b', false, 30)}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fabLocation: {
    bottom: 10,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  left: {
    left: 10,
  },
  right: {
    right: 10,
  },
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  fabText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
