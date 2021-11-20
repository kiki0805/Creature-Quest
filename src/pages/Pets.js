import React from 'react';
import {
  Flex,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
  Box,
  Button,
  NativeBaseProvider,
} from 'native-base';
import {View} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';

export default () => {
  return (
    <Box>
      <Link to="/" underlayColor="transparent">
        <View>
          <Center h="10" bg="secondary.500" shadow={3}>
            Go back
          </Center>
        </View>
      </Link>
      <ScrollView>
        <VStack space={2.5} w="100%" px="3">
          {/* flexDirection -> row */}
          <Heading size="md">row</Heading>
          <Flex
            direction="row"
            mb="2.5"
            mt="1.5"
            _text={{
              color: 'coolGray.800',
            }}>
            <Center size="16" bg="primary.100">
              100
            </Center>
            <Center size="16" bg="primary.200">
              200
            </Center>
            <Center bg="primary.300" size="16">
              300
            </Center>
            <Center size="16" bg="primary.400">
              400
            </Center>
          </Flex>
          <Divider />
        </VStack>
      </ScrollView>
    </Box>
  );
};
