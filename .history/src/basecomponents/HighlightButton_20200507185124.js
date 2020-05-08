import React, {useState} from "react";
import { View, Text, TouchableHighlight } from "react-native";
import palette from "src/styles/palette";

export const HighlightButton = ({ 
  children, 
  navigation, 
  backgroundColor=palette.white, 
  underlayBackgroundColor=palette.newBlue, 
  fontColor=palette.black,
  underlayFontColor=palette.white,
  fontSize=18,
  fontWeight,
  activeOpacity,
  style,
  onPress, onShowUnderlay, onHideUnderlay, 
  title,
  ...props
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
      onShowUnderlay={()=>{
        onShowUnderlay && onShowUnderlay();
        setIsHighlight(true);}}
      onHideUnderlay={()=>{
        onHideUnderlay && onHideUnderlay();
        setIsHighlight(false);}}
      {...props}
    >
      <View style={{...style}}>
        <Text style={{
          color: isHighlight ? underlayFontColor : fontColor,
          fontSize,
          fontWeight,
        }}>
          {title}
        </Text>
      {children}
      </View>
    </TouchableHighlight>
)};