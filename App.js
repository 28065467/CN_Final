import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import StartMenu from './src/components/StartMenu';
import GameScreen from './src/components/GameScreen';
import JoinScreen from './src/components/JoinGame';

const App = () => {
  const [isGameStarted, setGameStarted] = useState(false);
  const [isJoinGame , setJoinGame] = useState(false);
  const handleStartGame = () => {
    setGameStarted(true);
    setJoinGame(false);
  };
  const handleJoinGame = () => {
    setJoinGame(true);
  }
  const handleEndGame = () => {
    setGameStarted(false);
    setJoinGame(false);
  };

  if(isGameStarted){
    return<GameScreen onEndGame={handleEndGame}/>
  }
  if(isJoinGame){
    return<JoinScreen onStartGame={handleStartGame}/>
  }
  if(!isGameStarted){
    return<StartMenu onStartGame={handleStartGame} onJoinGame={handleJoinGame}/>
  }
};

export default App;
