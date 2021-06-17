import * as React from 'react';
import { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, TextInput, Pressable, Image } from 'react-native';;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import uuid from 'react-native-uuid';

import Header from "../../components/header"
import Button from "../../components/button"
import data from "../../data.json"

export default function AddProductScreen({ navigation }) {
  const [inputList, setInputList] = useState([]);

  useEffect(() => {
    const updatedList = []
    Object.keys(data).forEach(productType => {
      data[productType].forEach((item, index) => {
        updatedList.push({ itemNo: index, productType, productName: item.replace(/ /g, "_").toLowerCase(), quantity: "0", id: uuid.v4() })
      })
    })
    setInputList(updatedList)
  }, [])

  const updateItem = (index, key, value) => {
    inputList[index][key] = value
    setInputList(inputList)
  }

  const Item = ({ index, productType, productName, itemNo }) => {
    let type = ""
    if(itemNo === 0) {
      type = productType
    }
    return (
      <>
        { type !== "" && <Header title2={type} addedClasses={{ marginLeft: "20%" }} />}
        <View style={styles.item}>
          <View style={styles.label}>
            <Text style={styles.title}>{productName}</Text>
          </View>
          <View style={styles.quantity}>
            <TextInput
              style={styles.quantityInput}
              defaultValue={inputList[index].quantity}
              onChangeText={(text) => updateItem(index, "quantity", text)}
              /* onFocus={() => {
                if(inputList[index].quantity == 0) {
                  updateItem(index, "quantity", " ")
                }
              }} */
            />
          </View>
        </View>
      </>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
      <View style={styles.listContainer}>
        <FlatList
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={inputList}
          renderItem={({ item, index }) => (<Item {...item} index={index} />)}
          keyExtractor={item => item.id}
          /* ListHeaderComponent={<Header title1="Product Type" title2="Product Name" title3="Quantity" addedClasses={{ marginLeft: "-12%" }} />} */
        />
      </View>
      <View style={styles.bottomBtnContainer}>
        <Button onPress={() => navigation.goBack()} title="CANCEL" width={"48%"} type="light" />
        <Button onPress={() => navigation.navigate('ProductList', { inputList })} title="SAVE" width={"48%"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  listContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 20,
    width: '100%'
  },
  item: {
    padding: 20,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '90%'
  },
  title: {
    fontSize: hp('2%'),
  },
  quantity :{
    width: '20%',
  },
  label: {
    width: '90%',
  },
  quantityInput: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    fontSize: hp('2%'),
    /* marginLeft: '25%' */
  },
  btn: {
    backgroundColor: '#f44133',
    padding: 1,
    paddingBottom: 5,
    borderRadius: 4,
    width: '18%',
    marginLeft: 10,
  },
  btnColor: {
    backgroundColor: '#29c8b7',
  },
  text: {
    color: '#fff',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '4%'
  },
  bottomBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '2%'
  },
  dropdownItem: {
    padding: 2,
    fontSize: hp('2%'),
  },
  arrow_icon: {
    marginLeft: '30%',
    height: hp('2%'),
    width: wp('2%')
  }
})