import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Card = ({ title, value, addedClasses }) => {
    return (
        <View style={[styles.infoContainer, addedClasses]} >
            <Text style={styles.label}>
                <Text style={styles.label}>{title}</Text>
                <Text style={styles.labelStart}>*</Text>
            </Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        borderWidth: 1,
        borderColor: '#ededed',
        borderRadius: 50,
        width: '100%',
        height: '16%',
        backgroundColor: '#fff',
        marginTop: '2%'
    },
    label: {
        color: '#797d82',
        paddingHorizontal: '4%',
        paddingTop: '3%',
        fontSize: hp('1.8%')
    },
    value: {
        color: '#51575c',
        paddingHorizontal: '4%',
        fontSize: hp('2%'),
        paddingTop: '2%',
        fontWeight: 'bold'
    },
    labelStart: {
        color: '#ff0000',
    },
});


export default Card