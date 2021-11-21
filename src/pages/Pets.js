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
  FlatList,
  Image,
} from 'native-base';
import {
  View,
  Text,
  SafeAreaView,
  PermissionsAndroid,
  NativeModules,
} from 'react-native';
import {Path, G} from 'react-native-svg';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {NativeRouter, Route, Link} from 'react-router-native';
import PlayerView from '../components/PlayerView';
import {Example, Record, Play, Microphone} from '../components/Icons';

const {AudioHandler} = NativeModules;

export default class Pets extends React.Component {
  audioRecorderPlayer = new AudioRecorderPlayer();

  state = {recording: false, playing: false};

  onStartRecord = async () => {
    const result = await this.audioRecorderPlayer.startRecorder();
    this.audioRecorderPlayer.addRecordBackListener((e) => {
      this.setState({
        recordSecs: e.currentPosition,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
      });
      return;
    });
    console.log(result);
  };

  onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
    });
    console.log(result);
  };

  onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await this.audioRecorderPlayer.startPlayer();
    console.log(msg);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
      return;
    });
  };

  onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer();
  };

  onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  };

  componentDidMount = async () => {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);

      console.log('write external stroage', grants);

      if (
        grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissions granted');
      } else {
        console.log('All required permissions not granted');
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  };
  render() {
    return (
      <SafeAreaView
        style={{height: '100%', width: '100%', backgroundColor: '#f5e3b8'}}>
        <VStack
          space={4}
          alignItems="center"
          style={{position: 'absolute', width: '100%', top: 0, zIndex: 8}}>
          <Link to="/" underlayColor="transparent" style={{width: '100%'}}>
            <Center height="5" bg="#24243b" shadow={3}>
              EXPLORE MORE
            </Center>
          </Link>
          <Center
            height="12"
            w="60%"
            bg="#efd18b"
            shadow={3}
            style={{borderRadius: 25}}>
            NAME OF MAIN CREATURE
          </Center>
        </VStack>
        <VStack
          space={4}
          alignItems="center"
          style={{
            position: 'absolute',
            width: 60,
            zIndex: 9,
            justifyContent: 'center',
            top: 35,
            right: 0,
          }}>
          <IconButton
            icon={<Icon as={Microphone} />}
            borderRadius="full"
            onPress={() => {
              if (this.state.recording) {
                this.onStopRecord();
                this.setState({recording: false});
              } else {
                this.onStartRecord();
                this.setState({recording: true});
              }
            }}
          />
        </VStack>
        <VStack h="100%" style={{marginTop: 90}} alignItems="center">
          <Center
            style={{backgroundColor: '#a981a4', width: '80%', height: '20%', margin: 5, borderRadius: 10}}>
            <Image
              resizeMode="contain"
              source={require('../assets/Monster1-01.png')}
              style={{width: '30%'}}
              alt="monter 1"
            />
          </Center>
          <Center
            style={{backgroundColor: '#f9a397', width: '80%', height: '20%', margin: 5, borderRadius: 10}}>
            <Image
              resizeMode="contain"
              source={require('../assets/Monster1-02-01.png')}
              style={{width: '30%'}}
              alt="monter 1"
            />
          </Center>
          <Center
            style={{backgroundColor: '#845a7e', width: '80%', height: '20%', margin: 5, borderRadius: 10}}>
            <Image
              resizeMode="contain"
              source={require('../assets/Monster1-03-01.png')}
              style={{width: '30%'}}
              alt="monter 1"
            />
          </Center>
          <Center
            style={{backgroundColor: '#de7482', width: '80%', height: '20%', margin: 5, borderRadius: 10}}>
            <Image
              resizeMode="contain"
              source={require('../assets/Monster1-04-01.png')}
              style={{width: '30%'}}
              alt="monter 1"
            />
          </Center>
        </VStack>
      </SafeAreaView>
    );
  }
}
