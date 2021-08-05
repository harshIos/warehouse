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
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {captureRef, captureScreen} from 'react-native-view-shot';

import Header from '../../components/header';
import Button from '../../components/button';
import ListItem from '../../components/list-item';

const filterEmptyRows = rows => {
  return rows.filter(item => item.productName !== '' && item.quantity !== '');
};

export default function ProductListScreen({navigation, route}) {
  const {inputList} = route.params;
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <View ref={viewRef}>
        <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
        <FlatList
          showsHorizontalScrollIndicator={false}
          bounces={false}
          data={data}
          ListEmptyComponent={() => (
            <View style={styles.item}>
              <Text style={styles.title}>No Products added</Text>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.listItemSeparator} />
          )}
          ListFooterComponent={() => <View style={styles.listItemSeparator} />}
          renderItem={({item}) => <ListItem {...item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <Header
              title1="Product Type"
              title2="Product Name"
              title3="Quantity"
            />
          }
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.goBack()}
          title="CANCEL"
          width={'48%'}
          type="light"
        />
        <Button onPress={downloadImage} title="SUBMIT" width={'48%'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '2%',
  },
  listItemSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#aaaaaa',
  },
  item: {
    marginTop: '1%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: hp('2%'),
    marginLeft: '1%',
    color: '#aaaaaa',
    marginRight: '10%',
    /* textTransform: 'capitalize' */
  },
});
