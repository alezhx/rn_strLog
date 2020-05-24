import React, {useState} from "react";
import { View, Text, TouchableHighlight } from "react-native";
import palette from "src/styles/palette";


const AutoAdjustText = ({
  fontSize, text, style, numberOfLines
}) => {
  const [currentFont, setCurrentFont] = useState(fontSize);

  return (
    <Text
      numberOfLines={ numberOfLines }
      adjustsFontSizeToFit
      style={ [style, { fontSize: currentFont }] }
      onTextLayout={ (e) => {
        const { lines } = e.nativeEvent;
        if (lines.length > numberOfLines) {
          setCurrentFont(currentFont - 1);
        }
      } }
    >
      { text }
    </Text>
  );
};

export default AutoAdjustText