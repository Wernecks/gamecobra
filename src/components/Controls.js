import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Controls = ({ onPress }) => {
  return (
    <View style={styles.controls}>
      <TouchableOpacity onPress={() => onPress({ x: 0, y: -1 })}>
        <Text style={styles.button}>↑</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => onPress({ x: -1, y: 0 })}>
          <Text style={styles.button}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress({ x: 1, y: 0 })}>
          <Text style={styles.button}>→</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => onPress({ x: 0, y: 1 })}>
        <Text style={styles.button}>↓</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 30,
    textAlign: 'center',
    width: 50,
  },
});

export default Controls;
