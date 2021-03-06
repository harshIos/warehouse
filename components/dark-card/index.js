import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DarkCard = ({ title, value }) => {
    return (
        <View style={styles.textView} >
            <Text style={styles.baseText}>{title}</Text>
            <View style={styles.textInputView} >
                <TextInput
                    editable={false}
                    value={value}
                    keyboardType="numeric"
                    style={styles.input}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textView: {
        backgroundColor: '#2099e7',
        borderWidth: 1,
        padding: hp('2%'),
        borderRadius: 20,
        borderColor: '#fff',
        width: '46%',
        marginHorizontal: 6 
    },
    baseText: {
        color: '#fff',
        fontSize: hp('2%'),
        marginBottom: '1%'
    },
    textInputView :{
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    input: {
        marginTop: 6,
        color: '#fff',
        fontSize: hp('1.5%'),
        fontWeight: 'bold'
    },
});


export default DarkCard