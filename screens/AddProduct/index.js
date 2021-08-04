import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import uuid from 'react-native-uuid';

import Button from '../../components/button';
import data from '../../data.json';

function replaceName(name) {
  return name.replace(/ /g, '_').toLowerCase();
}

export default function AddProductScreen({navigation}) {
  const [inputList, setInputList] = useState([]);

  useEffect(() => {
    const updatedList = [];

    data['Apple'].forEach((productName, index) => {
      updatedList.push({
        itemNo: index,
        productType: 'Apple',
        productName,
        productKeyName: replaceName(productName),
        quantity: '',
        id: uuid.v4(),
      });
    });

    Object.keys(data['Samsung']).map(productType => {
      data['Samsung'][productType].forEach((productName, index) => {
        let len = updatedList.length;
        updatedList.push({
          itemNo: len,
          productType,
          productName,
          productKeyName: replaceName(productName),
          quantity: '',
          id: uuid.v4(),
        });
      });
    });

    data['Miscellaneous'].forEach((productName, index) => {
      let len = updatedList.length;
      updatedList.push({
        itemNo: len,
        productType: 'Miscellaneous',
        productName: '',
        productKeyName: replaceName(productName),
        quantity: '',
        id: uuid.v4(),
      });
    });

    setInputList(updatedList);
  }, []);

  const updateItem = (index, key, value) => {
    inputList[index][key] = value;
    setInputList(inputList);
  };

  const Item = ({index, productType, productName, itemNo}) => {
    return (
      <View style={styles.item}>
        <View style={[styles.label, styles.label_border]}>
          <Text style={styles.title}>{productName}</Text>
        </View>
        <View style={[styles.quantity, styles.border]}>
          <TextInput
            style={styles.quantityInput}
            defaultValue={inputList[index]?.quantity}
            placeholder="0"
            onChangeText={text => updateItem(index, 'quantity', text)}
            /* onFocus={() => {
            if(inputList[index].quantity == 0) {
              updateItem(index, "quantity", " ")
            }
          }} */
          />
        </View>
      </View>
    );
  };

  const MiscellaneousItem = ({index}) => {
    return (
      <View style={[styles.item, {margin: '1%', width: '48%'}]}>
        <View style={[styles.quantity, styles.border, {width: '65%'}]}>
          <TextInput
            style={styles.quantityInput}
            defaultValue={inputList[index]?.productName}
            placeholder="Miscellaneous"
            onChangeText={text => updateItem(index, 'productName', text)}
          />
        </View>
        <View style={[styles.quantity, styles.border]}>
          <TextInput
            style={styles.quantityInput}
            defaultValue={inputList[index]?.quantity}
            placeholder="0"
            onChangeText={text => updateItem(index, 'quantity', text)}
          />
        </View>
      </View>
    );
  };

  const RenderMiscellaneousItem = ({productType}) => {
    return inputList
      .filter(item => item.productType === productType)
      .map(item => (
        <MiscellaneousItem key={item.id} {...item} index={item.itemNo} />
      ));
  };

  const RenderItems = ({productType}) => {
    return inputList
      .filter(item => item.productType === productType)
      .map(item => {
        return <Item key={item.id} {...item} index={item.itemNo} />;
      });
  };

  const Heading = () => {
    return (
      <View style={[styles.item, {backgroundColor: '#e8effa', padding: 15}]}>
        <View style={styles.label}>
          <Text style={styles.heading_title}>Description</Text>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.heading_title}>Quantity</Text>
        </View>
      </View>
    );
  };

  const Section = ({productType}) => (
    <React.Fragment key={productType}>
      <View style={styles.itemWrapper}>
        <Text style={styles.headerText}>{productType}</Text>
      </View>
      <View style={styles.flexibleItemArrangement}>
        <Heading />
        <Heading />
        <Heading />
        <RenderItems productType={productType} />
      </View>
    </React.Fragment>
  );

  const PartListHeader = ({title}) => (
    <View>
      <Text style={styles.partListLabel}>{title}</Text>
    </View>
  );

  const renderPartList = () => {
    return Object.keys(data['Samsung']).map(productType => {
      return (
        <View style={styles.itemArrangement} key={productType}>
          <PartListHeader title={productType} />
          <Heading />
          <RenderItems productType={productType} />
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2099e7" />
      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Section productType="Apple" />
        <View style={styles.itemWrapper}>
          <Text style={styles.headerText}>Samsung</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          {renderPartList()}
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.headerText}>Miscellaneous</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <RenderMiscellaneousItem productType="Miscellaneous" />
        </View>
      </ScrollView>
      <View style={styles.bottomBtnContainer}>
        <Button
          onPress={() => navigation.goBack()}
          title="CANCEL"
          width={'48%'}
          type="light"
        />
        <Button
          onPress={() => navigation.navigate('ProductList', {inputList})}
          title="SAVE"
          width={'48%'}
        />
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
    margin: 20,
    width: '96%',
  },
  item: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '32%',
  },
  heading_title: {
    fontWeight: 'bold',
    fontSize: hp('1.6%'),
  },
  title: {
    fontSize: hp('1.2%'),
    flex: 1,
  },
  quantity: {
    width: '35%',
  },
  partListLabel: {
    fontWeight: 'bold',
    fontSize: hp('1.6%'),
    backgroundColor: '#abc5d4',
    width: '32%',
    padding: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  label: {
    width: '65%',
  },
  quantityInput: {
    width: '100%',
    padding: 8,
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
    textAlignVertical: 'center',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '4%',
  },
  bottomBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '2%',
  },
  dropdownItem: {
    padding: 2,
    fontSize: hp('2%'),
  },
  arrow_icon: {
    marginLeft: '30%',
    height: hp('2%'),
    width: wp('2%'),
  },
  flexibleItemArrangement: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  headerText: {
    textTransform: 'uppercase',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#fff',
  },
  itemWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1b99e5',
    width: '100%',
    marginVertical: 10,
  },
  label_border: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#e8effa',
  },
  border: {
    borderWidth: 1,
    borderColor: '#e8effa',
  },
  itemArrangement: {
    width: '100%',
    marginRight: '-66%',
  },
});
