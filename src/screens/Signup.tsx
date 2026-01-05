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
  const [hidePass, setHidePass] = useState(false);

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
      <Textinput
        label="Phone Number"
        onChangeText={t => {
          setTypedText3(t);
        }}
        value={typedText3}
        keyboardType="numeric"
      />
      {hidePass ? (
        <Textinput
          label="password"
          value={typedText2}
          onChangeText={t => {
            setTypedText2(t);
          }}
        />
      ) : null}

      {typedText == 'Omkar' ? (
        <Text
          style={{
            backgroundColor: 'red',
            textAlign: 'center',
            marginHorizontal: 50,
          }}
        >
          Omkar
        </Text>
      ) : (
        <Text
          style={{
            backgroundColor: 'pink',
            textAlign: 'center',
            marginHorizontal: 50,
          }}
        >
          Ashwini
        </Text>
      )}
      <Button
        Label="Sign Up"
        TextStyle={{}}
        ViewStyle={{}}
        OnPress={() => {
          setHidePass(true);
        }}
      ></Button>
    </View>
  );
};

export default Signup;
