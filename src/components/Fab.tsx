import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  position?: 'br' | 'bl';
  title: string;
  onPress: () => void;
}

export const Fab = ({ position, title, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}
    >
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabLocationBR: {
    bottom: 10,
    position: 'absolute',
    right: 10,
  },
  fabLocationBL: {
    bottom: 10,
    left: 10,
    position: 'absolute',
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
