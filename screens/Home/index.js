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

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#2099e7' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
            <View style={styles.scanner} >
                <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
                    <Image source={require('../../assets/qrscanner.png')} style={styles.scannerImage} />
                </TouchableOpacity>
                <View style={styles.textContainer} >
                    <DarkCard title="Tracking Number" value="1234567890" />
                    <DarkCard title="Reference Number" value="1234567890" />
                </View>
            </View>
            <View style={styles.info}>
                <Card title="Customer Information" value="Reference Number" />
                <Card title="Contact Information" value="Reference Number" />
                <Card title="Account Name" value="Reference Number" />
                <Card title="Address" value="Reference Number" addedClasses={styles.addressInfoContainer}/>
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
        padding: '2%'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '6%'
    },
    addressInfoContainer: {
        height: '24%',
    }
});

export default Home;
