import React, {useState, useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';


const StockList = ({ navigation, props }) => {
    const [data, setData] = React.useState([])
    const [ndata, setNdata] = React.useState(["Saab", "Volvo", "BMW"])

    useEffect(() => {
        callingAPI()
    }, [])

    callingAPI = () => {

        
        axios.get('https://api.publicapis.org/entries')
        .then(({ data })=> {
            data.entries.map((x,y)=>{
                console.log('***************');
                console.log(x,y)
            })
            //console.log(data.entries)

            /*this.setState({ 
                kind: data.kind, 
                data: data.data.children
            });*/
        })
        .catch((err)=>{
    
        })


        axios.get('http://www.reddit.com/r/reactjs.json')
        .then(({ data })=> {
            data.data.children.map((x,y)=>{
                //console.log('+++++++++', x['kind'],y)
            })
            //console.log(data.data.children)

            /*this.setState({ 
                kind: data.kind, 
                data: data.data.children
            });*/
        })
        .catch((err)=>{
    
        })



        /*
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((res) => {
                console.log(res)
                for(var i in JSON.parse(res))
                    console.log('===============')
                
                console.log('-----------------------------')
            })


            
            /*
            .then((res) => {console.log(11, res)})
            .then((result) => {console.log(22, result)})
            
            /*.then(response => JSON.parse(response))
            .then((data) => {
                console.log('================================================')
                //console.log(22222, data['bpi']["EUR"])
                //console.log(data)
                //console.log(JSON.parse(data[0]))
                console.log('--------------------------------------')

                //data.map((itm, index) => { console.log(7458)})
                //JSON.parse(data['bpi']).map((y) => {console.log(77777, y)})
                //setData(data)
            })
            /*


            .then((res) => {
                //JSON.stringify(res).forEach((y) => {console.log(77777, y)})
                console.log(444, res)
                ////setData(JSON.stringify(res))
                //setData(JSON.parse(res))
                //setData(res)
            })
            */
        
        //data.forEach((y) => {console.log(77777, y)})
        //console.log(555, data)
        //
    }
    

    return (<Text>Hello 852</Text>)
    return (
        <>
            {
                ndata.map((y) => {
                    return (<Text>pkio</Text>);
                })
            }
        </>
    )
}

const StockDetails = () => {
    return (<Text>Hello 123</Text>)
}

export default StockList;