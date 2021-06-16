/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView, View, Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Button from '../../components/button'
import Card from "../../components/card"
import DarkCard from "../../components/dark-card"

const Home = ({ navigation, route }) => {
    const  scannedInfo  = route?.params?.scannedInfo;
    
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#2099e7' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
            <View style={styles.scanner} >
                <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
                    <Image source={require('../../assets/qrscanner.png')} style={styles.scannerImage} />
                </TouchableOpacity>
                <View style={styles.textContainer} >
                    <DarkCard title="Tracking Number" value={scannedInfo || 'xxxxxxxxxxxxxxxxxxx'} />
                    <DarkCard title="Reference Number" value={scannedInfo || 'xxxxxxxxxxxxxxxxxxx'} />
                </View>
            </View>
            <View style={styles.info}>
                <View style={styles.subInfo}>
                    <Card title="Customer Information" value="Reference Number" />
                    <Card title="Contact Information" value="Reference Number" />
                    <Card title="Account Name" value="Reference Number" />
                    <Card title="Address" value="Reference Number" addedClasses={styles.addressInfoContainer}/>
                </View>
                <Button onPress={() => navigation.navigate('AddProduct')} title="NEXT"/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    scanner: {
        flex: 1,
        backgroundColor: '#2099e7',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    scannerImage: {
        height: hp('10%'),
        width: wp('14%')
    },
    info: {
        flex: 3,
        backgroundColor: '#fafdff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: hp('1%')
    },
    subInfo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '4%',
        marginBottom: '16%'
    },
    addressInfoContainer: {
        height: '26%',
    }
});

export default Home;
