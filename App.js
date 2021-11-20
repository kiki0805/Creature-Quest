/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {HmsPushInstanceId} from '@hmscore/react-native-hms-push';
import HMSAvailability, {
  ErrorCode,
} from '@hmscore/react-native-hms-availability';
import {NativeBaseProvider, VStack, Center, Heading} from 'native-base';
import {NativeRouter, Route, Link, Routes} from 'react-router-native';
import Home from './src/pages/Home';
import Pets from './src/pages/Pets';
import Main from './src/pages/Main';

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <NativeBaseProvider>
        <SafeAreaView>
          {/* <Button onPress={() => checkHMS()} title="Check HMS status" /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pets" element={<Pets />} />
            <Route exact path="/main" element={<Main />} />
          </Routes>
        </SafeAreaView>
      </NativeBaseProvider>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

function checkHMS() {
  testHmsCorePresence()
    .then((hmsCoreOk) => testAccountByRequestingPushNotificationsToken())
    .then((pushTokenRetrieved) =>
      Alert.alert('SUCCESS', 'All good. Start hacking!'),
    )
    .catch((anyError) => Alert.alert('FAIL', '' + anyError));
}

function testAccountByRequestingPushNotificationsToken() {
  return HmsPushInstanceId.getToken('').then((pushTokenAsJsonObject) => {
    var pushToken;
    try {
      pushToken = pushTokenAsJsonObject.result;
    } catch (err) {
      return Promise.reject(
        new Error('Push notifications token retrieved but malformated.'),
      );
    }
    console.log('HMS Push token: ' + pushToken);
    if (pushToken.isEmpty) {
      return Promise.reject(
        new Error(
          'Push notifications token retrieved, but empty. Clear app data and try again.',
        ),
      );
    } else {
      return Promise.resolve('PushToken:' + pushToken);
    }
  });
}

function testHmsCorePresence() {
  return HMSAvailability.isHuaweiMobileServicesAvailable().then(
    (checkResult) => {
      if (checkResult == ErrorCode.HMS_CORE_APK_AVAILABLE) {
        return Promise.resolve('HMS Core available');
      } else {
        return HMSAvailability.getErrorString(checkResult).then(
          (errorExplained) =>
            Promise.reject('HMS Core not available because: ' + errorExplained),
        );
      }
    },
  );
}

export default App;
