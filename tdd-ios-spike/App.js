import React from 'react';
import { View, Text, Linking, TouchableOpacity, Button, StyleSheet } from 'react-native';

const ExternalLinkScreen = () => {
  const handleOpenLink = () => {
    const url = 'https://creative-jalebi-91e3e2.netlify.app';
    Linking.openURL(url);
  };

  return (
    <View style={StyleSheet.create({alignItems: 'center', justifyContent: 'center', height: '100%'})}>
      <Button onPress={handleOpenLink} title="Open External Link"/>
    </View>
  );
};

export default ExternalLinkScreen;
