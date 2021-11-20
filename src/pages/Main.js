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
} from 'native-base';
import {View, Text, SafeAreaView, PermissionsAndroid} from 'react-native';
import {Path, G} from 'react-native-svg';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {NativeRouter, Route, Link} from 'react-router-native';
import PlayerView from '../components/PlayerView';
import {Example, Record, Play} from '../components/Icons';

export default class Main extends React.Component {
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
      <SafeAreaView style={{height: '100%', width: '100%'}}>
        <VStack
          space={4}
          alignItems="center"
          style={{position: 'absolute', width: '100%', top: 0, zIndex: 99}}>
          <Link to="/" underlayColor="transparent" style={{width: '100%'}}>
            <Center height="5" bg="#24243b" shadow={3}>
              GIVE UP THE CUTE PET
            </Center>
          </Link>
        </VStack>
        <VStack
          space={4}
          alignItems="center"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 9,
            justifyContent: 'center',
          }}>
          <Box style={{backgroundColor: 'white', height: 60, width: '80%'}}>
            <Flex direction="row">
              <Center h={60} width="50%" bg="#f5e3b8">
                <IconButton
                  icon={<Icon as={Play} />}
                  borderRadius="full"
                  onPress={() => {
                    if (this.state.recording) {
                      this.onStopRecord();
                      this.setState({recording: false});
                    }
                    // if (this.state.playing) {
                    //   this.onStopPlay();
                    //   this.setState({playing: false});
                    // } else {
                    this.onStartPlay();
                    //   this.setState({playing: true});
                    // }
                  }}
                />
              </Center>
              <Center h={60} width="50%" bg="#efd18b">
                <IconButton
                  icon={<Icon as={Record} />}
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
              </Center>
            </Flex>
          </Box>
        </VStack>
        <PlayerView bc="#f9a397" alignSelf="flex-start" onesTurn />
        <PlayerView bc="#845a7e" alignSelf="flex-end" first />
      </SafeAreaView>
    );
  }
}
