import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ListItem = ({ label, value }) => {
    return (
        <View style={styles.item}>
            <View style={styles.label}>
                <Text style={styles.title}>{label}</Text>
            </View>
            <View style={styles.value}>
                <Text style={styles.title}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginTop: '1%',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: hp('2%'),
        marginLeft: '1%',
        marginRight: '20%',
        color: '#aaaaaa',
        /* textTransform: 'capitalize' */
    },
    label: {
        width: '80%'
    },
    value: {
        width: '20%'
    }
})

export default ListItem