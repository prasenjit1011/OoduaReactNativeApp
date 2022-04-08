import React from 'react';
import {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import appstyle from './appstyle';






const NewFlat = () => {
  const box 	= require('./../images/box.png');
  const choosePackage 	= require('./../images/choosePackage.png');
  const [selIndex, updIndex] = React.useState("0");
  const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    //console.log("Visible items are", viewableItems[0]["index"]);
    console.log("Visible items are", viewableItems);
    //console.log("===============================================");
	
	let vItemKey = 0;
	for (let vItem of viewableItems) {
		vItemKey = vItem["key"]
		console.log('----->> ',vItemKey,'<<-----');
	}
	updIndex(vItemKey); 
      ///console.log("Changed in this iteration", changed);
      //if (typeof(viewableItems[0]["index"]) != "undefined"){
        //updIndex(viewableItems[0]["index"]+1);
      //}
    
  }, []);

  const _viewabilityConfig = {
      itemVisiblePercentThreshold: 85,
      backgroundColor:'#2DBB54',
  }

  //
  return (
    <View style={appstyle.container}>
        <View style={appstyle.choosePack}>
          <Text style={appstyle.sectionHeader}>Choose Package</Text>
          <Image source={choosePackage} style={appstyle.choosePackageIcon} />
        </View>
        <FlatList
          horizontal 
          onViewableItemsChanged={_onViewableItemsChanged}
          viewabilityConfig={_viewabilityConfig}
          data={MYDATA}
          //renderItem={({ item }) => <ListItem item={item}  />}
          renderItem={
            ({item}) =>     
            <View style={[appstyle.item, selIndex == item.key ? {backgroundColor:'#2DBB54'}:{backgroundColor:'#D6D6D6'}]}>
              <View style={appstyle.packageContent}>
                <Text style={appstyle.packageTxt}>{item.title}</Text>
                <Text style={appstyle.packageDetail}>{item.content}</Text>
                <Text style={appstyle.packagePrice}>{item.price}</Text>
              </View>
              <View style={appstyle.packageImg}>
                <Image
                  source={box}
                  style={appstyle.itemPhoto}
                  resizeMode="cover"
                  onClick={()=>{console.log('====='+item.key+'----')}}
                />
              </View>
            </View>
          }
          showsHorizontalScrollIndicator={false}
        />
    </View>
  );
};

export default NewFlat;

const MYDATA = [
      {
        key: '1',
        title: 'MDATA',
        content: 'Dish Barrel Box',
        price: '$1111',
      },
      {
        key: '2',
        title: 'UHBMN',
        content: 'Dish Barrel Box',
        price: '$22222',
      },

      {
        key: '3',        
        title: 'UMKPO',
        content: 'Dish Barrel Box',
        price: '$33333',
      },
      {
        key: '4',
        title: 'MKUPO',
        content: 'Dish Barrel Box',
        price: '$4444',
      },
      {
        key: '5',
        title: 'MKUPO',
        content: 'Dish Barrel Box',
        price: '$5555',
      },
      {
        key: '6',
        title: 'MKUPO',
        content: 'Dish Barrel Box',
        price: '$66666',
      },
      {
        key: '7',
        title: 'MKUPO',
        content: 'Dish Barrel Box',
        price: '$7777',
      }
    ];
	
