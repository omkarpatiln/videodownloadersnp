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
  No: number;
  onPress: () => void;
}
const Square: React.FC<Props> = ({
  text,
  No,
  style,
  TextStyle,
  ColorStyle,
  onPress,
}) => {
  return (
    <View
      style={{
        backgroundColor: 'green',
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
      <Text style={{ ...TextStyle }}>{No}</Text>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: 'blue',

          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text style={{ color: 'white' }}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Square;
