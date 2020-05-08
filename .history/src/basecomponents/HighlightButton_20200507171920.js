import React, {useState} from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import palette from "src/styles/palette";

export const Settings = ({ children, navigation }) => {
  const [isHighlight, setIsHighlight] = useState(false)

  return (
      <TouchableHighlight
        style={isHighlight ? styles.buttonHighlight : styles.button}
        // activeOpacity={0.6}
        underlayColor={palette.newBlue}
        onPress={() => alert('Pressed!')}
        onShowUnderlay={()=>setIsHighlight(true)}
        onHideUnderlay={()=>setIsHighlight(false)}
      >
        <View style={{color: isHighlight ? palette.white : palette.black,}}>
          {children}
        </View>
      </TouchableHighlight>
)};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    backgroundColor: palette.white,
  },
  buttonHighlight: {
    width: '100%',
    height: 60,
    // backgroundColor: palette.yellow,
  }
});