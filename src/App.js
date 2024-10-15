import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Snake from './components/Snake';
import Food from './components/Food';
import Controls from './components/Controls';
import { useGameEngine } from './game/useGameEngine';

export default function App() {
  const { snake, food, isGameOver, setDirection } = useGameEngine();

  return (
    <SafeAreaView style={styles.container}>
      {isGameOver && <Text style={styles.gameOver}>Game Over</Text>}
      <View style={styles.grid}>
        <Snake segments={snake} />
        <Food position={food} />
      </View>
      <Controls onPress={setDirection} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  grid: {
    width: 300,
    height: 300,
    backgroundColor: '#e0e0e0',
    position: 'relative',
  },
  gameOver: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    top: '50%',
    textAlign: 'center',
  },
});
