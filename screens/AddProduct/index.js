import * as React from 'react';
import { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, SectionList, TextInput } from 'react-native';;

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from "../../components/header"
import Button from "../../components/button"
import list from "../../data.json"

export default function AddProductScreen({ navigation }) {
  const [refresh, setRefresh] = useState(false)
  const [inputList, setInputList] = useState([]);

  useEffect(() => {
    const productList = []
    if (list.length) {
      list.forEach(({ data }) => {
        data.length > 1 && data.forEach(item => {
          const label = item?.replace(/ /g, "_")?.toLowerCase();
          productList.push({ label, value: 0 })
        })
      })
    }
    setInputList(productList)
  }, [])

  const updateItem = (label, value) => {
    const result = inputList.map((item, index) => {
      if (item.label === label) {
        return { label: label, value: value }
      } else {
        return item
      }
    })

    /* const index = inputList.findIndex(item => item.label === label)
    const result = [...inputList]
    result[index].value = value
    console.log(index) */
    setInputList(result)
  }

  const getItem = (label) => {
    const item = inputList.find(item => item.label === label)
    return item.value;
  }

  const Item = ({ label, value }) => {
    return (
      <View style={styles.item}>
        <View style={styles.label}>
          <Text style={styles.title}>{value}</Text>
        </View>
        <View style={styles.value}>
          <TextInput
            style={styles.quantityInput}
            defaultValue={getItem(label) || '0'}
            onChangeText={(text) => updateItem(label, text)}
          />
        </View>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
      <View style={styles.listContainer}>
        {inputList.length > 1 && <SectionList
          //extraData={refresh}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
          sections={list}
          renderItem={({ item }) => <Item label={item?.replace(/ /g, "_")?.toLowerCase()} value={item} />}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Header title2={title} addedClasses={{ marginLeft: '20%' }} />
          )}
        />}
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
    padding: 20,
    width: '100%'
  },
  item: {
    padding: 20,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('100%'),
  },
  title: {
    fontSize: hp('2%'),
  },
  label: {
    width: '75%',
  },
  value: {
    width: '25%',
    paddingRight: '5%',
  },
  quantityInput: {
    width: '80%',
    padding: 8,
    borderWidth: 1,
    fontSize: hp('2%'),
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
  headerTextWidth: {
    marginLeft: '-14%'
  },
  dropdownItem: {
    padding: 2,
    fontSize: hp('2%'),
  },
  arrow_icon: {
    marginLeft: '30%',
    height: hp('2%'),
    width: wp('2%')
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  }
})