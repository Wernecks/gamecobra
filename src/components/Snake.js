import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CELL_SIZE } from '../game/constants';

const Snake = ({ segments }) => {
  return (
    <>
      {segments.map((segment, index) => (
        <View key={index} style={[styles.snake, { left: segment.x * CELL_SIZE, top: segment.y * CELL_SIZE }]} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  snake: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: 'green',
    position: 'absolute',
  },
});

export default Snake;
