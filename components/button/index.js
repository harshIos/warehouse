import React from 'react';
import { Pressable, Text, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Button = ({onPress, title, width, type}) => {
    let style= [styles.btn]
    let textStyle= [styles.text]
    if(width && width !== "") {
        style.push({width})
    }
    if(type && type !== "") {
        style.push({backgroundColor: '#fff', borderWidth: 1, borderColor: '#2099e7'})
        textStyle.push({color: '#000'})
    }
    
    return (
        <Pressable
            onPress={onPress}
            style={
                style  
            }>
            <Text style={textStyle}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#2099e7',
        padding: 20,
        borderRadius: 20,
        width: '100%',
        marginTop: '10%',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: hp('2%')
    }
});


export default Button