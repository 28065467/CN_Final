import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const JoinScreen = ({ onStartGame }) => {
    return (
      <View>
        <Text>JoinGame</Text>
        <Button title="EndGame" onPress={onStartGame} />
      </View>
    );
  };
  export default JoinScreen