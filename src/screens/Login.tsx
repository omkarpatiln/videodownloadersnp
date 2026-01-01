import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
const Login = () => {
const [typedText, setTypedText] = useState("");
const [typedText1, setTypedText1] = useState("");

  return (
    <View>
      <Text style={{marginHorizontal:10,marginTop:10}}>Email Address</Text>
       <TextInput
              value={typedText}
              onChangeText={t => {
                setTypedText(t);
              }}
              style={{ height: 55, borderWidth: 1, marginVertical: 10,marginHorizontal:10,borderRadius:10 }}
            />
            <Text style={{marginHorizontal:10,marginTop:5}}>Password</Text>
       <TextInput
              value={typedText1}
              onChangeText={t => {
                setTypedText1(t);
              }}
              style={{ height: 55, borderWidth: 1, marginVertical: 10,marginHorizontal:10,borderRadius:10 }}
            />
            <TouchableOpacity onPress={()=>{
              if(typedText==='ashu@gmail.com' && typedText1==='12345678'){
                Alert.alert('Login Succesflly')
              }else{
                  Alert.alert('Login Failed')
              }
            }}>
              
              <Text style={{borderWidth:1,marginHorizontal:120,padding:10,textAlign:'center',borderRadius:10,backgroundColor:'skyblue'}}>Login</Text>





            </TouchableOpacity>


            
    </View>
  )
}

export default Login