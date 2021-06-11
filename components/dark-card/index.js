import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DarkCard = ({ title, value }) => {
    return (
        <View style={styles.textView} >
            <Text style={styles.baseText}>{title}</Text>
            <TextInput
                editable
                maxLength={40}
                value={value}
                keyboardType="numeric"
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textView: {
        backgroundColor: '#2099e7',
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        borderColor: '#fff',
        width: '45%',
        margin: 6
    },
    baseText: {
        color: '#fff',
        fontSize: hp('2%'),
        marginBottom: '1%'
    },
    input: {
        marginTop: 6,
        color: '#fff',
        fontSize: hp('2%'),
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: '50%',
        fontWeight: 'bold'
    },
});


export default DarkCard