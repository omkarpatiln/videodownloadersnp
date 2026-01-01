import { View, Text, ViewStyle, TextInput, KeyboardTypeOptions } from 'react-native';
import React from 'react';

interface Props {
  label: string;
  style?: ViewStyle;
  value: string;
  keyboardType?:KeyboardTypeOptions ;
  onChangeText: (text: string) => void;
}

const Textinput: React.FC<Props> = ({
  label,
  style,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <View style={{marginVertical:5}}>
      
        <Text style={{ marginHorizontal: 10,margin:5}}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={t => {
            onChangeText(t);
          }}
          style={{
            height: 55,
            borderWidth: 0.5,
            marginVertical: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            elevation: 5,
            backgroundColor: 'white',
          }}
          keyboardType={keyboardType}
        />
      </View>
  
  );
};

export default Textinput;
