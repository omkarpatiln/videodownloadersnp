import { View, Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
interface Props{
  Label:string;
  TextStyle:TextStyle;
  ViewStyle:ViewStyle;
  OnPress:()=>void;

}

const Button:React.FC<Props> = ({Label,OnPress,TextStyle,ViewStyle}) => {
  return (
     <TouchableOpacity style={{...ViewStyle}}
      onPress={OnPress}
      >
        <Text
          style={{
            borderWidth: 1,
            marginHorizontal: 120,
            padding: 10,
            textAlign: 'center',
            borderRadius: 10,
            backgroundColor: 'blue',
            color: 'white',
            fontWeight: 700,
            marginTop: 15,
            fontSize: 16,
            ...TextStyle,
          }}
        >
          {Label}
        </Text>
      </TouchableOpacity>
  )
}

export default Button