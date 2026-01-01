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
  Number: number;
  Isnumberneeded?: boolean;
  Press?: () => void;
}
const Test: React.FC<Props> = ({
  text,
  style,
  TextStyle,
  Number,
  Isnumberneeded,
  Press,
}) => {
  return (
    <View>
      <View style={{ width: 3 }} />
      <View
        style={{
          backgroundColor: 'skyblue',
          padding: 2,
          alignItems: 'center',
          borderRadius: 5,
          margin: 2,
          ...style,
        }}
      >
        <Text style={{ fontSize: 10, ...TextStyle }}>{text}</Text>
      </View>

      {Isnumberneeded ? null : (
        <TouchableOpacity>
          <Text
            onPress={Press}
            style={{ textAlign: 'center', backgroundColor: 'white', margin: 2 }}
          >
            {Number}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Test;
