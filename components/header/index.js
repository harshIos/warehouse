import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = ({ title1, title2, title3, addedClasses }) => {
    return (
        <View style={styles.itemHeader}>
            <View style={styles.itemWrapper}>
                <Text style={styles.headerText}>{title1}</Text>
            </View>
            <View style={styles.itemWrapper}>
                <Text style={[styles.headerText, addedClasses]}>{title2}</Text>
            </View>
            <View style={styles.itemWrapper}>
                <Text style={[styles.headerText, addedClasses]}>{title3}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e8effa',
        /* borderRadius: 10, */
        padding: 20,
        backgroundColor: '#e8effa',
        width: wp('100%')
    },
    headerText: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
    },
    itemWrapper: {
        width: '37%'
    }
});


export default Header