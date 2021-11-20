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
import {SafeAreaView, PermissionsAndroid} from 'react-native';

import {styles} from '../styles/styles';
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
          camera={{
            target: {
              latitude: 41.02155220194891,
              longitude: 29.0037998967586,
            },
            zoom: 12,
          }}>
          <HMSMarker
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
        </HMSMap>
      </SafeAreaView>
    );
  }
}
