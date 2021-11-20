import React from 'react';
import {
  Flex,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
  Box,
  IconButton,
  Icon,
  Container,
  Button,
  NativeBaseProvider,
  HStack,
  Image,
} from 'native-base';
import {View, Text, SafeAreaView, PermissionsAndroid} from 'react-native';
import {Path, G} from 'react-native-svg';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {NativeRouter, Route, Link} from 'react-router-native';
import {Example, Microphone} from './Icons';

export default class PlayerView extends React.Component {
  render() {
    return (
      <Flex
        style={{height: '50%', backgroundColor: this.props.bc}}
        direction="row">
        <HStack
          style={{
            width: '100%',
            height: 50,
            margin: 30,
            alignSelf: this.props.alignSelf,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20, letterSpacing: 1}}>
            10,000/12,000
          </Text>
          {this.props.onesTurn && <Microphone style={{marginLeft: '38%'}} />}
        </HStack>
        <Center
          style={{
            position: 'absolute',
            zIndex: 999,
            width: '100%',
            height: '100%',
          }}>
          <Image
            resizeMode="contain"
            source={
              this.props.first
                ? require('../assets/Monster1-01.png')
                : require('../assets/Monster1-02-01.png')
            }
            style={{width: '50%'}}
            alt="monter 1"
          />
        </Center>
      </Flex>
    );
  }
}
