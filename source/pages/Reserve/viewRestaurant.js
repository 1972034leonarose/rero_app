import React from 'react';
import { Component } from "react/cjs/react.production.min";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ButtonLong from "../../components/Atoms/ButtonLong";
import MenuSmallView from '../../containers/MenuView/small';


/* installed package for bottom sheet : npm install reanimated-bottom-sheet */



export default class ViewRestaurant extends Component{

    /*dummy content YA! */
    renderContent = () => (
        <View style={{padding: 20, backgroundColor:'white'}}>
        <Text style={{fontWeight:'bold', fontSize:24, textAlign:'left', paddingTop:10}}>Cafeteria</Text>

        {/*Reviews, etc.*/}
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       
        <Text style={{paddingTop:10, fontSize:16}}>$$$$</Text>
        <Text style={{paddingTop:10, fontSize:16}}>Indonesian</Text>
        <View style={{flexDirection:'row'}}>

        <View style={{backgroundColor:'red', alignItems:'center', marginRight:10, paddingTop:10}}><Icon name="star" size={20}></Icon>
        </View>
     
        <Text style={{paddingTop:10, fontSize:16}}>9.4</Text>
        </View>
        

        </View>

        <View style={{paddingVertical:20}}> 
        <View style={{flexDirection:'row', justifyContent: 'space-between', paddingBottom:5}}>

        
        <Text  style={{fontWeight:'bold'}}>Rp. 45,000</Text>    
        </View>      
        <Text style={{textAlign:'justify'}}>This aromatic Asian salad combines lemony-flavoured coriander leaves with cool cucumber, refreshing mint and rare beef.</Text>    
        </View>
        {/*onPress={}*/}
        <View style={{ paddingBottom: 20}}>
        <TouchableOpacity style={{ backgroundColor: "#F9B153", alignItems: "center", justifyContent: "center", borderRadius: 7, height: 40, width: 195 }}>
            <MenuSmallView></MenuSmallView>
            <Text style={{ fontSize: 16, color: "#FFFFFF" }} >Add to Order</Text>
        </TouchableOpacity>  
        </View>
             
         </View>
    );
    
    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    bs = React.createRef();
    fall = new Animated.Value(1);
    
    render() {
        return (
            <View style={{flex: 1, paddingTop: 17, backgroundColor: '#FFFEFD'}}>

                <BottomSheet 
                    ref={this.bs}
                    snapPoints={[760, 700, 600]}
                    renderContent={this.renderContent}
                    initialSnap={0}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                    enabledInnerScrolling={true}
                    borderRadius={10}
                />
            <View>
                <StatusBar
                        barStyle="dark-content"
                        hidden={false}
                        backgroundColor="#ffffff"
                        translucent={true}
                    />
                </View>
            

                <View style={{width:202}}>
                <Image source={require("../../assets/imagedumb.png")} style={{width:280, height: 200}}></Image>
                </View>
                

            </View>
        );
    }
}


