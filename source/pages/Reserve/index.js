import React from 'react';
import { Component } from "react/cjs/react.production.min";
import {View, Text, Image, Stylesheet, SafeAreaView, TextInput, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import RestoView from '../../containers/RestoCardView';
import CravingView from '../../containers/CravingView';
import BackButton from "../../components/Atoms/BackButton";

export default class Reserve extends Component{
    render() {
        return (

            <View style={{flex: 1, paddingTop: 17, backgroundColor: '#FFFEFD'}}>
            <View>
                <StatusBar
                        barStyle="dark-content"
                        hidden={false}
                        backgroundColor="#ffffff"
                        translucent={true}
                    />
                </View>
            <View style={{marginHorizontal: 37, paddingTop: 37, justifyContent: 'space-between', flexDirection: 'row'}}>
                <View>
                <Text style={{fontSize: 24, fontWeight: "bold", color: "#000" }}>Reserve</Text>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require("../../assets/more.png")} style={{width:28, height: 28}}></Image>
                </View>
            </View>

            <View style={{ height: 80, paddingTop: 25}}>
            <View style={{flexDirection: 'row', padding:10, backgroundColor:'white', marginHorizontal: 20, elevation:2, shadowColor:'black', borderRadius:5}}>
                <Icon name="ios-search" size={20} style={{marginRight:10}}>
                </Icon>
                <TextInput underlineColorAndroid="transparent" placeholder="Search for a restaurant"></TextInput>
            </View>
            </View>

            <View style={{padding:20}}>
            <RestoView title="Trending Near You"/>
            </View>

            <View style={{padding:20, paddingTop:3}}>
            <RestoView title="New in the Area"/>
            
            <View style={{paddingTop:15}}>
            <CravingView/>
            </View>

            </View>

            <MenuCardItem></MenuCardItem>
            </View>

            
        );
    }
}
