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
import {NativeRouter, Route, Link} from 'react-router-native';

import {NativeBaseProvider, VStack, Center, Heading} from 'native-base';

export default (props) => {
  console.log(props);
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10">
        Pet Hunter
      </Heading>
      <Link to="/pets" underlayColor="transparent">
        <View>
          <Center w="64" h="20" bg="secondary.500" rounded="md" shadow={3} />
        </View>
      </Link>
      <Link to="/pets" underlayColor="transparent">
        <Center w="64" h="20" bg="secondary.500" rounded="md" shadow={3} />
      </Link>
      <Link to="/pets" underlayColor="transparent">
        <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
      </Link>
    </VStack>
  );
};
