import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ListItem = ({ productType, pickList, quantity }) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemWrapper}>
                <Text style={styles.title}>{productType}</Text>
            </View>
            <View style={styles.itemWrapper}>
                <Text style={styles.title}>{pickList}</Text>
            </View>
            <View style={styles.itemWrapper}>
                <Text style={styles.title}>{quantity}</Text>
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
    itemWrapper: {
        width: '36%'
    },
})

export default ListItem