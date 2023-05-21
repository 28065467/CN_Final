
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const MainMenu = ({ onStartGame }) => {
  return (
    <View>
      <Text>GameMenu</Text>
      <Button title="GameStart" onPress={onStartGame} />
    </View>
  );
};

const GameScreen = ({ onEndGame }) => {
  return (
    <View>
      <Text>InGame</Text>
      <Button title="EndGame" onPress={onEndGame} />
    </View>
  );
};

const App = () => {
  const [isGameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleEndGame = () => {
    setGameStarted(false);
  };

  return (
    <View>
      {isGameStarted ? (
        <GameScreen onEndGame={handleEndGame} />
      ) : (
        <MainMenu onStartGame={handleStartGame} />
      )}
    </View>
  );
};

export default App;
