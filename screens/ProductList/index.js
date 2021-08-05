import * as React from 'react';
import {useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Alert,
  PermissionsAndroid,
  Platform,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {captureRef, captureScreen} from 'react-native-view-shot';
import Pdf from 'react-native-pdf';
import Header from '../../components/header';
import Button from '../../components/button';
import ListItem from '../../components/list-item';

const filterEmptyRows = rows => {
  return rows.filter(item => item.productName !== '' && item.quantity !== '');
};

export default function ProductListScreen({navigation, route}) {
  const {pdfAsDataUri} = route.params;

  /* const {inputList} = route.params;
  const data = filterEmptyRows(inputList);
  const viewRef = useRef();

  const onSubmit = async () => {
    const ImageUri = await captureScreen({
      format: 'jpg',
      quality: 0.8,
    });
    console.log('ImageUri:', ImageUri);
  };

  // get permission on android
  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        '',
        'Your permission is required to save images to your device',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (err) {
      // handle error as you please
      console.log('err', err);
    }
  };

  // download image
  const downloadImage = async () => {
    try {
      // react-native-view-shot caputures component
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });

      if (Platform.OS === 'android') {
        const granted = await getPermissionAndroid();
        if (!granted) {
          return;
        }
      }
      console.log(uri);
      // cameraroll saves image
    } catch (error) {
      console.log('error', error);
    }
  }; */

  return (
    <View style={styles.container}>
      <Pdf
        source={pdfAsDataUri}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link presse: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
