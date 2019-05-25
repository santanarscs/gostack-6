import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
