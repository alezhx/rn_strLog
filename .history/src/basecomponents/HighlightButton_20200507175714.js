import React, {useState} from "react";
import { View, Text, TouchableHighlight } from "react-native";

export default () => ({ 
  children, 
  navigation, 
  backgroundColor, 
  underlayBackgroundColor, 
  fontColor,
  underlayFontColor,
  fontSize,
  fontWeight,
  activeOpacity,
  onPress, 
}) => {
  const [isHighlight, setIsHighlight] = useState(false)

  return (
    <TouchableHighlight
      style={{
        width: '100%',
        backgroundColor,
      }}
      activeOpacity={activeOpacity}
      underlayColor={underlayBackgroundColor}
      onPress={() => onPress()}
      onShowUnderlay={()=>setIsHighlight(true)}
      onHideUnderlay={()=>setIsHighlight(false)}
    >
      <Text style={{
        color: isHighlight ? underlayFontColor : fontColor,
        fontSize,
        fontWeight,
      }}>
        {children}
      </Text>
    </TouchableHighlight>
)};