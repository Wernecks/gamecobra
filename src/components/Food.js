import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CELL_SIZE } from '../game/constants';

const Food = ({ position }) => {
  return <View style={[styles.food, { left: position.x * CELL_SIZE, top: position.y * CELL_SIZE }]} />;
};

const styles = StyleSheet.create({
  food: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default Food;
