import React, {useState, useEffect} from 'react';
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
import axios from 'axios';





const NewFlat = () => {
	const [packdata, setPackdata] = React.useState([])
	const box 	= require('./../images/box.png');
	const choosePackage 	= require('./../images/choosePackage.png');
	const [selIndex, updIndex] = React.useState("0");
	const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    //console.log("Visible items are", viewableItems[0]["index"]);
    console.log("Visible items are", viewableItems);
    //console.log("===============================================");
	const apiurl = 'https://ooduacargo.com/booking/api/package.php'
	
	
	
	let vItemKey = 0;
	for (let vItem of viewableItems) {
		vItemKey = vItem["key"]
		console.log('----->> ', vItemKey, vItem,'<<-----');
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



    useEffect(() => {
        callingAPI()
    }, [])

    callingAPI = () => {
        axios.get('https://ooduacargo.com/booking/api/package.php')
        .then(({ data })=> {
            //console.log('-: Hello-world :-.')
            //console.log('-: Stock length :- ',data.length)
            console.log(data)
            setPackdata(data)
            //data.map((x,y)=>{console.log('***************', y, x['symbol'], x['change'], x['lastPrice'], x['dayHigh'], x['dayLow'], x['yearHigh'], x['yearLow'], x['perChange365d'], x['perChange30d'] )})
        })
        .catch((err)=>{
            console.log(err)
        })
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
          data={packdata}
          //renderItem={({ item }) => <ListItem item={item}  />}
          renderItem={
            ({item}) =>     
            <View style={[appstyle.item, selIndex == item.id ? {backgroundColor:'#2DBB54'}:{backgroundColor:'#D6D6D6'}]}>
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
                  onClick={()=>{console.log('====='+item.id+'----')}}
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
        id: '1',
        title: 'MDATA',
        content: 'Dish Barrel Box',
        price: '$1111',
      },
      {
        id: '2',
        title: 'UHBMN',
        content: 'Dish Barrel Box',
        price: '$22222',
      }
    ];
	
