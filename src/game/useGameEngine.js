import { useState } from 'react';
import useInterval from '@use-it/interval';
import { GRID_SIZE, INITIAL_SNAKE } from './constants';

export const useGameEngine = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  });
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [isGameOver, setIsGameOver] = useState(false);

  useInterval(() => {
    if (isGameOver) return;

    const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Verifica colisão com parede ou corpo da cobrinha
    if (newHead.x >= GRID_SIZE || newHead.x < 0 || newHead.y >= GRID_SIZE || newHead.y < 0 || snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
      setIsGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];
    
    // Verifica se comeu a comida
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, 200);

  return {
    snake,
    food,
    isGameOver,
    setDirection,
  };
};
