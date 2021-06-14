import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, } from 'react-native';;

import Header from "../../components/header"
import Button from "../../components/button"
import ListItem from "../../components/list-item"

const filterEmptyRows = (rows) => {
  return rows.filter(item => item.productType !== "" && item.pickList !== "")
}

export default function ProductListScreen({ navigation, route }) {
  const { inputList } = route.params;
  const data = filterEmptyRows(inputList)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20, width: '100%' }}>
         <FlatList
          data={data}
          ListEmptyComponent={() => <View style={[styles.item, {justifyContent: 'center'}]}><Text style={[styles.title, {marginRight: '10%',}]}>No Products added</Text></View>}
          ItemSeparatorComponent={() => <View style={styles.listItemSeparator}/>}
          ListFooterComponent={() => <View style={styles.listItemSeparator}/>}
          renderItem={({ item }) => <ListItem {...item} />}
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
  btnContainer: {
    width: '100%',
    padding: '2%',
  },
  listItemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#aaaaaa",
  }
})