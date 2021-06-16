import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, } from 'react-native';;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
          ListEmptyComponent={() => <View style={styles.item}><Text style={styles.title}>No Products added</Text></View>}
          ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
          ListFooterComponent={() => <View style={styles.listItemSeparator} />}
          renderItem={({ item }) => <ListItem {...item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Header title1="Product Type" title2="Product Name" title3="Quantity" />}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={() => navigation.goBack()} title="CANCEL" width={"48%"} type="light" />
        <Button onPress={() => navigation.navigate('Home')} title="SUBMIT" width={"48%"} />
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
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '2%'
  },
  listItemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#aaaaaa",
  },
  item: {
    marginTop: '1%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: hp('2%'),
    marginLeft: '1%',
    marginRight: '20%',
    color: '#aaaaaa',
    marginRight: '10%'
    /* textTransform: 'capitalize' */
  },
})