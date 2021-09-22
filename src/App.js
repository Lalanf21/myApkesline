import React from 'react';
import {StyleSheet} from 'react-native';
import GetStarted from './pages/GetStarted/index';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    // <GetStarted />
  );
}

const styles = StyleSheet.create({});
