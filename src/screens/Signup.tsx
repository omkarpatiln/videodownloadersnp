import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Textinput from '../Components/Textinput';
import Button from '../Components/Button';
const Signup = () => {
  const [typedText, setTypedText] = useState('');
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const [typedText3, setTypedText3] = useState('');

  return (
    <View>
      <Textinput
        value={typedText}
        label="name"
        onChangeText={t => {
          setTypedText(t);
        }}
      />
      <Textinput
        label="Email"
        onChangeText={tgrghrh => {
          setTypedText1(tgrghrh);
        }}
        value={typedText1}
      />
{typedText1 == ''?
      (<Textinput
        label='password'
        value={typedText2}
        onChangeText={t => {
          setTypedText2(t);
        }}
      />):
      <Textinput
        label="Phone Number"
        onChangeText={t => {
          setTypedText3(t);
        }}
        value={typedText3}
        keyboardType="numeric"
      />
}
      {typedText1 == '' ? (
        <Button
          Label="i need pass"
          OnPress={() => {
            if (typedText === '') {
              Alert.alert('please enter name');
            } else if (typedText1 === '') {
              Alert.alert('please enter email');
            } else if (typedText2 === '') {
              Alert.alert('please enter password');
            } else if (typedText3 === '') {
              Alert.alert('please enter phone number');
            }
            if (
              typedText != '' &&
              typedText1 != '' &&
              typedText2 != '' &&
              typedText3 != ''
            ) {
              Alert.alert('Signup Succesflly');
            } else {
              Alert.alert('Signup Failed');
            }
          }}
          TextStyle={{}}
          ViewStyle={{}}
        />
      ) : (
        <Button
          Label="Sign Up"
          OnPress={() => {
            if (typedText === '') {
              Alert.alert('please enter name');
            } else if (typedText1 === '') {
              Alert.alert('please enter email');
            } else if (typedText2 === '') {
              Alert.alert('please enter password');
            } else if (typedText3 === '') {
              Alert.alert('please enter phone number');
            }
            if (
              typedText != '' &&
              typedText1 != '' &&
              typedText2 != '' &&
              typedText3 != ''
            ) {
              Alert.alert('Signup Succesflly');
            } else {
              Alert.alert('Signup Failed');
            }
          }}
          TextStyle={{}}
          ViewStyle={{}}
        />
      )}
    </View>
  );
};

export default Signup;
