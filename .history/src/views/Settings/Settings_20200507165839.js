import React from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight } from "react-native";

export const Settings = ({ navigation }) => (
  <View>
    <Text>Settings</Text>
    <TouchableHighlight
      style={{width: '100%', height:60}}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert('Pressed!')}
    >
      <Text>Hello</Text>
    </TouchableHighlight>
  </View>
);