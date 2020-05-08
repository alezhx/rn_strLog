import React, {useState} from "react";
import { View, Text, TouchableHighlight } from "react-native";

export const HighlightButton = ({ 
  children, 
  navigation, 
  backgroundColor, 
  underlayBackgroundColor, 
  fontColor,
  underlayFontColor,
  fontSize,
  fontWeight,
  activeOpacity,
  style,
  onPress, 
  label,
  ...props
}) => {
  const [isHighlight, setIsHighlight] = useState(false)

  return (
    <TouchableHighlight
      style={{
        height:60,
        width: '100%',
        backgroundColor,
        ...style,
      }}
      activeOpacity={activeOpacity}
      underlayColor={underlayBackgroundColor}
      onPress={() => onPress()}
      onShowUnderlay={()=>setIsHighlight(true)}
      onHideUnderlay={()=>setIsHighlight(false)}
      {...props}
    >
      <Text style={{
        color: isHighlight ? underlayFontColor : fontColor,
        fontSize,
        fontWeight,
      }}>
        {label}
      </Text>
    </TouchableHighlight>
)};