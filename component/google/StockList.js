import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    SafeAreaView, ScrollView, 
    TouchableOpacity,
    Image,
    FlatList,
    Button, 
    ImageBackground
  } from 'react-native';
import axios from 'axios';
import { color } from 'react-native-reanimated';
import appstyle from '../appstyle';

const StockList = ({ navigation, props }) => {
    const [data, setData] = React.useState([])
    const [ndata, setNdata] = React.useState(["Saab", "Volvo", "BMW"])

    //let apiurl = 'http://d29d-2402-3a80-1989-ea93-f519-fe2-1abb-9786.ngrok.io/'
    //apiurl = 'https://api.publicapis.org/entries'
    //apiurl = 'http://localhost/rapidapi/NIFTY50.php'
    //const apiurl = 'http://d29d-2402-3a80-1989-ea93-f519-fe2-1abb-9786.ngrok.io/rapidapi/NIFTY50.json'
    //const apiurl = 'http://1423-103-24-86-36.ngrok.io/rapidapi/latest-stock.php'
    //const apiurl = 'http://d29d-2402-3a80-1989-ea93-f519-fe2-1abb-9786.ngrok.io/rapidapi/allstock.php'
    const apiurl = 'http://d29d-2402-3a80-1989-ea93-f519-fe2-1abb-9786.ngrok.io/rapidapi/allstock.php'



    useEffect(() => {
        callingAPI()
    }, [])

    callingAPI = () => {
        axios.get(apiurl)
        .then(({ data })=> {
            console.log('-: Hello-world :-.')
            console.log('-: Stock length :- ',data.length)
            //console.log(data)
            setData(data)
            //data.map((x,y)=>{console.log('***************', y, x['symbol'], x['change'], x['lastPrice'], x['dayHigh'], x['dayLow'], x['yearHigh'], x['yearLow'], x['perChange365d'], x['perChange30d'] )})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
		<SafeAreaView style={[appstyle.container, data? { width:"98%"}:'']}>
			<ScrollView style={appstyle.scrollView} horizontal={false} vertical={true} >
                <>
                    {data.length > 0 ? data.map((x, y) => {return (<StockDetails data={x} datakey={y} />);}) : <Text>NA</Text>}
                </>
            </ScrollView>
        </SafeAreaView>
    )
    
    return (
        <>
            {
                data.length > 0 ? data.map((x, y) => {return (<StockDetails data={x} />);}) : <Text>NA</Text>
            }
        </>
    )
    return (
        <>
            {
                data.length > 0 ? data.map((x, y) => {return (<Text key={y} style={{color:'#FFF'}}>{x["API"]}</Text>);}) : <Text>NA</Text>
            }
        </>
    )
}

const StockDetails = (data) => {
    const selectedStock = ['DABUREQN','RELIANCEEQN','ONGCEQN','INDOCOEQN','BIOCONEQN','ICICIBANKEQN','IDBIEQN']//,'SBIN','NTPC','BPCL','EICHERMOT','TCS','BHARTIARTL']
    //console.log('--: StockDetails :--', data)
    //console.log(data['data']['API'])
    //return (<Text>159</Text>)
    //E4B924

    if(!selectedStock.includes(data['data']['identifier'])){
        return (<></>);
    }

    var typeColor = '#000000'
    if((data['data']['lastPrice'] - data['data']['previousClose']) > 0){
        typeColor = '#00FF00'
    }
    else if((data['data']['lastPrice'] - data['data']['previousClose']) < 0){
        typeColor = '#FF0000'
    }
    else{
        //console.log('**************************************************', data['data']['lastPrice'] - data['data']['open'], data['data']['lastPrice'], data['data']['open'])
    }

    //console.log( data['data']['symbol'])
    //console.log(data['data']['symbol'], data['data']['change'], typeColor)
    //console.log('***************', data['data']['symbol'], data['data']['change'], data['data']['lastPrice'], data['data']['dayHigh'], data['data']['dayLow'], data['data']['yearHigh'], data['data']['yearLow'], data['data']['perChange365d'], data['data']['perChange30d'] )

    return (
        <View 
            style={[appstyle.container, appstyle.stockDetails, {
                    borderLeftColor:true ? '#F00':'#0F0',
                    borderLeftColor:typeColor,
                }]}
            key="stockdetails-{data['data']['symbol']}"
        >
            <View style={{flexDirection:'row'}} key="stock-last-update-{data['data']['symbol']}">
                <View style={{ flex: 2, }} >
                    <Text style={appstyle.lastUpdateTime}>
                        {data['data']['lastUpdateTime']}
                    </Text>
                </View>
            </View>

            <View style={{flexDirection:'row'}} key="stock-name-{data['data']['symbol']}" >
                <View style={{ flex: 5, }}>
                    <Text style={appstyle.stockTitle}>
                        {data['datakey']+1}. 
                        {data['data']['symbol']}
                    </Text>
                </View>
                <View style={{ flex: 2, }} >
                    <Text style={[appstyle.stockLastPrice, (data['data']['lastPrice'] - data['data']['previousClose']) < 0 ? appstyle.red:'' ]}>
                        {data['data']['lastPrice']}
                    </Text>
                </View>
            </View>

            <View style={{flexDirection:'row'}} key="stock-previous-close-{data['data']['symbol']}">
                <View style={{ flex: 5, }}>
                    <Text style={[appstyle.stockHistoryTxt]}>
                        Previous Close
                    </Text>
                </View>
                <View style={{ flex: 5, }}>
                    <View style={{ flex:1, backgroundColor:'#FFF', flexDirection:'row-reverse' }}>
                        <View style={{backgroundColor:'#FFF'}}>
                            <Text style={[appstyle.stockHistoryPrice,]}>
                                {data['data']['previousClose']}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={{flexDirection:'row'}} key="stock-day-details-{data['data']['symbol']}">
                <View style={{ flex: 5, }}>
                    <Text style={[appstyle.stockHistoryTxt]}>
                        Day's Low / High
                    </Text>
                </View>
                <View style={{ flex: 5, }}>
                    <View style={{ flex:1, backgroundColor:'#FFF', flexDirection:'row-reverse' }}>
                        <View style={{backgroundColor:'#FFF'}}>
                            <Text style={[appstyle.stockHistoryPrice, appstyle.blue]}>
                                {data['data']['dayHigh']}
                            </Text>
                        </View>
                        <View><Text style={[appstyle.stockHistoryTxt]}> / </Text></View>
                        <View style={{backgroundColor:'#FFF'}}>
                            <Text style={[appstyle.stockHistoryPrice, appstyle.red]}>
                                {data['data']['dayLow']}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row'}} key="stock-year-details-{data['data']['symbol']}">
                <View style={{ flex: 5, }}>
                    <Text style={[appstyle.stockHistoryTxt]}>
                        Year's Low / High
                    </Text>
                </View>
                <View style={{ flex: 5, }}>
                    <View style={{ flex:1, backgroundColor:'#FFF', flexDirection:'row-reverse' }}>
                        <View style={{backgroundColor:'#FFF'}}>
                            <Text style={[appstyle.stockHistoryPrice, appstyle.blue]}>
                                {data['data']['yearHigh']}
                            </Text>
                        </View>
                        <View><Text style={[appstyle.stockHistoryTxt]}> / </Text></View>
                        <View style={{backgroundColor:'#FFF'}}>
                            <Text style={[appstyle.stockHistoryPrice, appstyle.red]}>
                                {data['data']['yearLow']}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={{flexDirection:'row'}} key="stock-changed-{data['data']['symbol']}">
                <View style={{ flex: 5, }}>
                    <Text style={[appstyle.stockHistoryTxt]}>
                        Changed 30 Day / Year
                    </Text>
                </View>
                <View style={{ flex: 5, }}>
                    <View style={{ flex:1, backgroundColor:'#FFF', flexDirection:'row-reverse' }}>
                        <View style={{backgroundColor:'#FFF'}}>
                            <Text style={[appstyle.stockHistoryPrice, data['data']['perChange365d']>0 ? appstyle.blue : appstyle.red]}>
                                {data['data']['perChange365d']}
                            </Text>
                        </View>
                        <View><Text style={[appstyle.stockHistoryTxt]}> / </Text></View>
                        <View style={{backgroundColor:'#FFF'}}>
                            <Text style={[appstyle.stockHistoryPrice, data['data']['perChange30d']>0 ? appstyle.blue : appstyle.red]}>
                                {data['data']['perChange30d']}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
    /* */
}

export default StockList;