import * as React from 'react';
import { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, } from 'react-native';;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from "../../components/header"
import Button from "../../components/button"

export default function ProductListScreen({ navigation, route }) {
  const { inputList } = route.params;
  const Item = ({ productType, pickList, quantity }) => (
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
  );

  const data = inputList.length >= 1 && inputList[0].productType !== "" ? inputList : []

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20, width: '100%' }}>
         <FlatList
          data={data}
          ListEmptyComponent={() => <View style={[styles.item, {justifyContent: 'center'}]}><Text style={[styles.title, {marginRight: '10%',}]}>No Products added</Text></View>}
          ItemSeparatorComponent={() => <View style={styles.listItemSeparator}/>}
          ListFooterComponent={() => <View style={styles.listItemSeparator}/>}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Header title1="Product Type" title2="PickList" title3="Quantity" />}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={() => navigation.goBack()} title="CANCEL" width={"100%"} type="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
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
  btnContainer: {
    width: '100%',
    padding: '2%',
  },
  itemWrapper: {
    width: '36%'
  },
  listItemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#aaaaaa",
  }
})