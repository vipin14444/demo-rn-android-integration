import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import HelloWorldInner from './src/components/HelloWorld';

const HelloWorld = () => {
  return (
    <HelloWorldInner />
  );
};

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => HelloWorld,
);