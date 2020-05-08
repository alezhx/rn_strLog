import React from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight } from "react-native";
import palette from "src/styles/palette";

export const Settings = ({ navigation }) => (
  <View>
    <Text>Settings</Text>
    <TouchableHighlight
      style={{width: '100%', height:60}}
      activeOpacity={0.6}
      underlayColor={palette.newBlue}
      onPress={() => alert('Pressed!')}
    >
      <Text style={{fontSize:30}}>Hello</Text>
    </TouchableHighlight>
  </View>
);