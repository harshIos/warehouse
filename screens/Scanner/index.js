/**
 * Sample React Native Scanner
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useRef} from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

import Button from '../../components/button';

const Scanner = ({navigation}) => {
  const cameraRef = useRef();

  const onBarCodeRead = e => {
    console.log('data', e.data);
    if (e.data) {
      navigation.navigate('Home', {scannedInfo: e.data});
    }
  };
  /* const capture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  }; */

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        style={styles.scanner}
        onBarCodeRead={onBarCodeRead}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />

      <View style={styles.bottomBtnContainer}>
        <Button
          onPress={() => navigation.goBack()}
          title="Go Back"
          type="light"
        />
        {/* <Button onPress={() => capture()} title="Capture" width={"48%"}/> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  scanner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomBtnContainer: {
    height: '16%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '2%',
  },
});

export default Scanner;
