import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';

import Button from '../../components/button';

const SelectCountry = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomBtnContainer}>
        <View style={{marginBottom: '2%', width: '100%'}}>
          <Button
            onPress={() => navigation.navigate('AddProduct')}
            title="Hong Kong"
          />
        </View>
        <Button
          onPress={() => navigation.navigate('AddProduct')}
          title="Miami"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  bottomBtnContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: '2%',
  },
});

export default SelectCountry;
