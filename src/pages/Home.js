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
  TouchableHighlight,
} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import {NativeBaseProvider, VStack, Center, Heading} from 'native-base';
import BasicMap from '../screens/BasicMap';
import CameraControl from '../screens/CameraControl';
import Gestures from '../screens/Gestures';
import Location from '../screens/Location';
import MapLayers from '../screens/MapLayers';
import MapStyle from '../screens/MapStyle';
import Markers from '../screens/Markers';
import AdvancedMap from '../screens/AdvancedMap';
import {styles} from '../styles/styles';

const buttons = [
  {
    title: 'Basic Map',
    component: BasicMap,
    description: 'The most basic map component to show.',
  },
  {
    title: 'Camera Controls',
    component: CameraControl,
    description:
      'Manipulate the camera via move, zoom, tilt, bearing. Animate the camera and stop the animation.',
  },
  {
    title: 'Gestures and UI',
    component: Gestures,
    description:
      'Control zoom, rotate, scroll, tilt gestures and show/hide zoom/compass.',
  },
  {
    title: 'Location',
    component: Location,
    description: 'Show your location on the map and show/hide location button.',
  },
  {
    title: 'Markers',
    component: Markers,
    description:
      'Show markers with default, colored and customized options. Show/hide default and customized info windows, animate markers, apply clustering. Add markers via long click and remove them via long click on ino window.',
  },
  {
    title: 'Map Layers',
    component: MapLayers,
    description:
      'Show basic and customized circles, polylines, polygons and ground overlays.',
  },
  {
    title: 'Map Styles',
    component: MapStyle,
    description:
      'Show different ways how to style a map via mapType, mapStyle and tile overlay',
  },
  {
    title: 'Advanced Map',
    component: AdvancedMap,
    description: 'More advanced settings',
  },
];

export default class Home extends React.Component {
  state = {
    currentScreen: buttons[0],
  };

  renderButtons() {
    return buttons.map((b) => (
      <View
        key={b.title}
        style={[
          styles.p4,
          styles.m2,
          this.state.currentScreen == b ? customStyle.buttonBorder : null,
        ]}>
        <TouchableHighlight
          onPress={() => {
            this.setState({currentScreen: b});
          }}>
          <Text>{b.title}</Text>
        </TouchableHighlight>
      </View>
    ));
  }

  renderScreen() {
    const Map = this.state.currentScreen.component;
    return <Map />;
  }
  render() {
    return (
      <SafeAreaView>
        {this.renderScreen()}
        <VStack
          space={4}
          alignItems="center"
          style={{position: 'absolute', width: '100%', bottom: '5%'}}>
          <Heading
            textAlign="center"
            mb="5"
            size="2xl"
            color="#41416b"
            italic
            fontWeight="black">
            Creature Quest
          </Heading>
          <Link to="/pets" underlayColor="transparent">
            <View>
              <Center w="64" h="16" bg="#845a7e" rounded="md" shadow={3}>
                <Text style={{color: 'white', fontSize: 20}}>My Creatures</Text>
              </Center>
            </View>
          </Link>
          <Link to="/main" underlayColor="transparent">
            <View>
              <Center w="64" h="16" bg="#de7482" rounded="md" shadow={3}>
                <Text style={{color: 'white', fontSize: 20}}>Explore</Text>
              </Center>
            </View>
          </Link>
        </VStack>
      </SafeAreaView>
    );
  }
}

const customStyle = StyleSheet.create({
  lineStyle: {
    marginTop: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  buttonBorder: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});
