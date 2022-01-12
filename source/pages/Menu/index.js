import React from 'react';
import { Component } from "react/cjs/react.production.min";
import {View, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from "../../components/Atoms/BackButton";
import MenuView from '../../containers/MenuView/index';
import MenuMainView from '../../containers/MenuView/other';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ButtonLong from "../../components/Atoms/ButtonLong";
import MenuCardItem from '../../components/Molecules/MenuCardItem';

/* installed package for bottom sheet : npm install reanimated-bottom-sheet */



export default class Menu extends Component{

    /*dummy content YA! */
    renderContent = () => (
        <View style={{padding: 20, backgroundColor:'white', alignItems: 'center'}}>
        <Image source={require("../../assets/salad.png")} style={{width:280, height: 200}}></Image>
        <View style={{paddingVertical:20}}> 
        <View style={{flexDirection:'row', justifyContent: 'space-between', paddingBottom:5}}>
        <Text style={{fontWeight:'bold'}}>Thai Beef Salad</Text>
        <Text  style={{fontWeight:'bold'}}>Rp. 45,000</Text>    
        </View>      
        <Text style={{textAlign:'justify'}}>This aromatic Asian salad combines lemony-flavoured coriander leaves with cool cucumber, refreshing mint and rare beef.</Text>    
        </View>
        {/*onPress={}*/}
        <View style={{ paddingBottom: 20}}>
        <TouchableOpacity style={{ backgroundColor: "#F9B153", alignItems: "center", justifyContent: "center", borderRadius: 7, height: 40, width: 195 }}>
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
    fall = new Animated.Value(0); /*check*/
    
    render() {
        return (
            <View style={{flex: 1, paddingTop: 17, backgroundColor: '#FFFEFD'}}>

                <BottomSheet 
                    ref={this.bs}
                    snapPoints={[390, 0, 0]}
                    renderContent={this.renderContent}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                />
            <View>
                <StatusBar
                        barStyle="dark-content"
                        hidden={false}
                        backgroundColor="#ffffff"
                        translucent={true}
                    />
                </View>
            
          {/* ------ header ------- */}
          <View style={{marginHorizontal: 34, paddingTop: 37, flexDirection: 'row'}}>
            <BackButton onPress={this.handleBackButtonClick} />
                <View>    
                <Text style={{fontSize: 24, fontWeight: "bold", color: "#000" }}>Menu</Text>
                </View>
            </View>
            {/* ------ end header ------- */}

            <View style={{ height: 80, paddingTop: 25}}>
            <View style={{flexDirection: 'row', padding:10, backgroundColor:'white', marginHorizontal: 20, elevation:2, shadowColor:'black', borderRadius:5}}>
                <Icon name="ios-search" size={20} style={{marginRight:10}}>
                </Icon>
                <TextInput underlineColorAndroid="transparent" placeholder="Search for a menu"></TextInput>
            </View>
            </View>

            <ScrollView>
                <MenuMainView title="Main Course"/>

                {/*Testing border sheet*/}
                <View style={{paddingLeft: 25}}>
                <TouchableOpacity onPress={()=> this.bs.current.snapTo(0)}>
                <MenuCardItem imgUri={require("../../assets/salad.png")} menuName="Thai Beef Salad" price="Rp. 65,000"/>
                </TouchableOpacity>
                </View>
                
                <View style={{paddingBottom:20}}></View>
                <MenuView title="All Day Breakfast"/>
            </ScrollView>

            </View>
        );
    }
}


