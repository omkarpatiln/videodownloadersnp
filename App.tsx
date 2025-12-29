import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Test from './src/Components/Test';
import Block from './src/Components/component1';
import Square from './src/Components/Square';

const App = () => {
  const [number, setNumber] = useState(1);
  const [number1, setNumber1] = useState(2);
  const [number2, setNumber2] = useState(3);
  const [number3, setNumber3] = useState(4);
  const [color, setColor] = useState('skyblue');
  const [color1, setColor1] = useState('skyblue');
  const [color2, setColor2] = useState('skyblue');
  const [color3, setColor3] = useState('skyblue');
  const [size, setSize] = useState(12);
  const [size1, setSize1] = useState(12);
  const [size2, setSize2] = useState(12);
  const [size3, setSize3] = useState(12);
  const [No, setNo] = useState(5);
  const [No1, setNo1] = useState(6);
  const [No2, setNo2] = useState(7);
  const [No3, setNo3] = useState(8);
  const [colors, setColors] = useState('red');
  const [colors1, setColors1] = useState('red');
  const [colors2, setColors2] = useState('red');
  const [colors3, setColors3] = useState('red');
  const [sizes, setSizes] = useState(12);
  const [sizes1, setSizes1] = useState(12);
  const [sizes2, setSizes2] = useState(12);
  const [sizes3, setSizes3] = useState(12);
  const [text, setText] = useState('Square1');
  const [text1, setText1] = useState('Square2');
  const [text2, setText2] = useState('Square3');
  const [text3, setText3] = useState('Square4');
  const [textt, settextt] = useState('Box1');
  const [clicked, setClicked] = useState(true);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
    } else {
      setText(textt);
      settextt(text);
    }
  }, [clicked]);

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontWeight: 500, paddingTop: 20 }}>Algo Trading AI</Text>
      <Text style={{ fontWeight: 300 }}>Not Subscribed</Text>
      <Text style={{ fontWeight: 400 }}>Created At: 23 Nov 2025</Text>
      <Text style={{ fontWeight: 400 }}>Last Opened: 22 days ago</Text>
      <Text style={{ textAlign: 'right' }}>Last Updated: Invalid Date</Text>
      <View
        style={{ height: 0.5, backgroundColor: 'black', marginVertical: 5 }}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <Block
            text={textt}
            style={{ backgroundColor: color }}
            Number={number}
            TextStyle={{ fontSize: size }}
            ColorStyle={{ color: 'yellow' }}
            onPress={() => {
              setClicked(!clicked);
            }}
            TextPress={() => {
              setSize(size + 1);
            }}
          />
          <View style={{ width: 10 }} />
          <Block
            text={'Box2'}
            style={{ backgroundColor: color1 }}
            Number={number1}
            TextStyle={{ fontSize: size1 }}
            ColorStyle={{ color: 'magenta' }}
            onPress={() => {
              setNumber1(number1 + 1);
              setColor1('purple');
            }}
            TextPress={() => {
              setSize1(size1 + 1);
            }}
          />
        </View>
        <View style={{ height: 10 }}></View>

        <View style={{ flexDirection: 'row' }}>
          <Block
            TextStyle={{ fontSize: size2 }}
            text={'Box3'}
            style={{ backgroundColor: color2 }}
            Number={number2}
            ColorStyle={{ color: 'pink' }}
            onPress={() => {
              setNumber2(number2 + 1);
              setColor2('yellow');
            }}
            TextPress={() => {
              setSize2(size2 + 1);
            }}
          />
          <View style={{ width: 10 }}></View>
          <Block
            text={'Box4'}
            Number={number3}
            TextStyle={{ fontSize: size3 }}
            style={{ backgroundColor: color3 }}
            ColorStyle={{ color: 'green' }}
            onPress={() => {
              setNumber3(number3 + 1);
              setColor3('orange');
            }}
            TextPress={() => {
              setSize3(size3 + 1);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <View style={{ width: 10 }} />
        </View>
      </View>
      <View style={{ height: 20 }}></View>

      <TouchableOpacity
        onPress={() => {
          setNumber(number + 1);
          setNumber1(number1 + 1);
          setNumber2(number2 + 1);
          setNumber3(number3 + 1);
          setColor('skyblue');
          setColor1('skyblue');
          setColor2('skyblue');
          setColor3('skyblue');
          setSize(12);
          setSize1(12);
          setSize2(12);
          setSize3(12);
        }}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          alignItems: 'center',
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'white' }}>View Full Details</Text>
      </TouchableOpacity>
      <View style={{ height: 20 }}></View>
      <View
        style={{
          backgroundColor: 'purple',
          padding: 10,

          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 500 }}>B B Testing</Text>
        <Text style={{ color: 'white', fontWeight: 500 }}>B B Testing</Text>
        <View>
          <Text style={{ color: 'white', fontWeight: 200 }}>STOCK . Swing</Text>
        </View>
        <View
          style={{ height: 0.5, backgroundColor: 'white', marginVertical: 5 }}
        />

        <View style={{ height: 10 }}></View>
        <View style={{ flexDirection: 'row' }}>
          <Test
            style={{
              backgroundColor: 'red',
            }}
            text={'Paper Mode'}
            Number={2}
          />
          <Test text={'1 Indicator'} Number={3} Isnumberneeded={true} />
          <Test text={'Expiry:WEEKLY'} Number={4} />
          <Test text={'Lot:25'} Number={5} />
          <Test text={'15 Days Expiry'} Number={6} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Square
          text={text}
          style={{ backgroundColor: colors }}
          No={No}
          TextStyle={{ fontSize: size }}
          ColorStyle={{ color: 'yellow' }}
          onPress={() => {
            setClicked(!clicked);
          }}
        />

        <Square
          text={'Square2'}
          style={{ backgroundColor: colors1 }}
          No={No1}
          TextStyle={{ fontSize: sizes }}
          ColorStyle={{ color: 'yellow' }}
          onPress={() => {
            setNo1(No1 - 1);
            setColors1('red');
          }}
        />

        <Square
          text={'Square3'}
          style={{ backgroundColor: colors2 }}
          No={No2}
          TextStyle={{ fontSize: sizes }}
          ColorStyle={{ color: 'yellow' }}
          onPress={() => {
            setNo2(No2 - 1);
            setColors2('red');
          }}
        />

        <Square
          text={'Square4'}
          style={{ backgroundColor: colors3 }}
          No={No3}
          TextStyle={{ fontSize: size }}
          ColorStyle={{ color: 'yellow' }}
          onPress={() => {
            setNo3(No3 - 1);
            setColors3('red');
          }}
        />
      </View>
    </View>
  );
};

export default App;
