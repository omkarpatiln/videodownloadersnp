import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
interface Props {
  text: string;
  style?: ViewStyle;
  TextStyle?: TextStyle;
  ColorStyle: TextStyle;
  Number: string;
  onPress: () => void;
  TextPress: () => void;
}
const Block: React.FC<Props> = ({
  text,
  Number,
  style,
  TextStyle,
  ColorStyle,
  onPress,
  TextPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'skyblue',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        ...style,
      }}
    >
      <Text style={{ ...ColorStyle }}>{text}</Text>
      <Text onPress={TextPress} style={{ ...TextStyle }}>
        {Number}
      </Text>
    </TouchableOpacity>
  );
};
export default Block;
