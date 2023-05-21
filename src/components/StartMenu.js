import React, { useState } from 'react';
import { View, Button, Text , StyleSheet, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RNExitApp from 'react-native-exit-app';

const handleQuit = () => {
  RNExitApp.exitApp();
};

const StartMenu = ({ onStartGame, onJoinGame}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.iconContainer}>
        <MaterialCommunityIcons name="lightbulb-on" size={60} color="orange"  style={{ transform: [{ rotate: '-45deg' }] }}/>
        <Text style = {styles.title}>Welcome to YouAskIAns</Text>
        <MaterialCommunityIcons name="lightbulb-on" size={60} color="orange"  style={{ transform: [{ rotate: '45deg' }] }}/>
      </View>  
      <Button title="Start a New Game" onPress={onStartGame} />
      <View style ={styles.blankline}/>
      <Button title="Join an Existing Game" onPress={onJoinGame}/>
      <View style = {styles.blankline}/>
      <Button title="Quit" onPress={handleQuit}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor : 'beige',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  blankline:{
    margin:20,
  }
});
export default StartMenu
