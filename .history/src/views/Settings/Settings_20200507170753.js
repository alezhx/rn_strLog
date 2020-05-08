import React, {useState} from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight } from "react-native";
import palette from "src/styles/palette";

export const Settings = ({ navigation }) => {
  const [isHighlight, setIsHighlight] = useState(false)

  return (
    <View>
      <Text>Settings</Text>
      <TouchableHighlight
        style={isHighlight ? styles.buttonHighlight : styles.button}
        activeOpacity={0.6}
        underlayColor={palette.newBlue}
        onPress={() => alert('Pressed!')}
        onShowUnderlay={()=>setIsHighlight(true)}
        onHideUnderlay={()=>setIsHighlight(false)}
      >
        <Text>Hello</Text>
      </TouchableHighlight>
    </View>
)};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    backgroundColor: palette.white,
    color: palette.red,
    fontSize:30
  },
  buttonHighlight: {
    width: '100%',
    height: 60,
    backgroundColor: palette.newBlue,
    color: palette.white,
    fontSize:30  
  }
});