/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import HMSMap, {
  HMSInfoWindow,
  HMSMarker,
  Hue,
  MapTypes,
  FillMode,
  RepeatMode,
  Interpolator,
} from '@hmscore/react-native-hms-map';
import React from 'react';
import {SafeAreaView, PermissionsAndroid, Image} from 'react-native';

import {styles} from '../styles/styles';
import mapStyleJson from '../mapStyle.json';

let planeRef;

export default class BasicMap extends React.Component {
  static options = {
    topBar: {
      title: {
        text: 'Basic Map',
      },
    },
  };

  state = {
    myLocationEnabled: false,
    myLocationButtonEnabled: true,
  };

  componentDidMount = () => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then((res) => {
      res
        ? this.setState({myLocationEnabled: true})
        : PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then(
            (granted) =>
              PermissionsAndroid.RESULTS.GRANTED === granted &&
              this.setState({myLocationEnabled: true}),
          );
    });
  };

  render() {
    return (
      <SafeAreaView>
        <HMSMap
          style={styles.fullHeight}
          mapType={MapTypes.NORMAL}
          myLocationButtonEnabled={this.state.myLocationButtonEnabled}
          // markerClusterTextColor="transparent"
          zoomControlsEnabled={false}
          mapStyle={JSON.stringify(mapStyleJson)}
          camera={{
            target: {
              latitude: 41.02155220194891,
              longitude: 29.0037998967586,
            },
            zoom: 12,
          }}>
          {/* <HMSMarker
            title="Maiden's Tower"
            snippet="This is a default marker"
            rotation={this.state.rotation}
            draggable
            onClick={() => {
              this.setState((state) => ({
                rotation: (state.rotation + 30) % 360,
              }));
            }}
            defaultActionOnClick={this.state.defaultActionOnClick}
            coordinate={{
              latitude: 41.02155220194891,
              longitude: 29.0037998967586,
            }}
          />
          <HMSMarker
            icon={{hue: Hue.ORANGE}}
            title="Ayasofia"
            snippet="This is a colored default marker"
            clusterable
            coordinate={{
              latitude: 41.008699470240245,
              longitude: 28.98015976031702,
            }}
          />
          <HMSMarker
            icon={{hue: Hue.MAGENTA}}
            title="Sultan Ahmet"
            snippet="This is a colored default marker"
            clusterable
            coordinate={{
              latitude: 41.00542331543524,
              longitude: 28.97691153026857,
            }}
          />
          <HMSMarker
            icon={{hue: Hue.AZURE}}
            title="Topkapı Museum"
            snippet="This is a colored default marker"
            clusterable
            coordinate={{
              latitude: 41.01223774385668,
              longitude: 28.983498212850378,
            }}
          />
          <HMSMarker
            icon={{hue: Hue.ROSE}}
            title="Column of Constantine"
            snippet="This is a colored default marker"
            clusterable
            coordinate={{
              latitude: 41.0087711,
              longitude: 28.97133142052397,
            }}
          /> *}
          
          {/* <HMSMarker
            icon={{
              uri: Image.resolveAssetSource(
                require("../assets/galata-tower.png")
              ).uri,
              width: 140,
              height: 150,
            }}
            coordinate={{
              latitude: 41.02564844393837,
              longitude: 28.974169719709817,
            }}
          >
            {this.CustomInfoWindow()}
          </HMSMarker> */}
          <HMSMarker
            icon={{
              uri: Image.resolveAssetSource(
                require('../assets/Monster1-02-01.png'),
              ).uri,
              height: 437,
              width: 332,
            }}
            title="Gülhane Parkı"
            coordinate={{
              latitude: 41.01358808151719,
              longitude: 28.98213804657346,
            }}
          />

          <HMSMarker
            icon={{
              uri: Image.resolveAssetSource(
                require('../assets/Monster1-03-01.png'),
              ).uri,
              height: 389,
              width: 323,
            }}
            title="Gülhane Parksı"
            coordinate={{
              latitude: 41.07664844393837,
              longitude: 28.954169719709817,
            }}
          />
          <HMSMarker
            icon={{
              uri: Image.resolveAssetSource(
                require('../assets/Monster1-04-01.png'),
              ).uri,
              height: 389,
              width: 323,
            }}
            title="Gülhane Parksı"
            coordinate={{
              latitude: 41.05664844393837,
              longitude: 28.904169719709817,
            }}
          />
          <HMSMarker
            icon={{
              uri: Image.resolveAssetSource(
                require('../assets/Monster1-05-02.png'),
              ).uri,
              height: 389,
              width: 323,
            }}
            title="Gülhane Parksı"
            coordinate={{
              latitude: 41.06432234547145,
              longitude: 29.096580953343877,
            }}
          />
          <HMSMarker
            title="Validebağ Korusu"
            snippet="This is custom icon from url."
            icon={{
              uri: Image.resolveAssetSource(
                require('../assets/Monster1-01.png'),
              ).uri,
              height: 355,
              width: 333,
            }}
            coordinate={{
              latitude: 41.01432234547145,
              longitude: 29.046580953343877,
            }}
          />
          {/* <HMSMarker
            ref={(e) => {
              planeRef = e;
            }}
            onAnimationStart={(e) =>
              console.log(`Animation ${e.nativeEvent.type} Started`)
            }
            onAnimationEnd={(e) =>
              console.log(
                `Animation ${e.nativeEvent.type} Ended in ${e.nativeEvent.duration} ms`,
              )
            }
            icon={{
              asset: 'plane.png',
            }}
            coordinate={{
              latitude: 41.02664844393837,
              longitude: 28.984169719709817,
            }}
          /> */}
        </HMSMap>
      </SafeAreaView>
    );
  }
}
