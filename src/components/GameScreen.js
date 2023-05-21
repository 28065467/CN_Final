import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const GameScreen = ({ onEndGame }) => {
    return (
      <View>
        <Text>InGame</Text>
        <Button title="EndGame" onPress={onEndGame} />
      </View>
    );
  };
  export default GameScreen