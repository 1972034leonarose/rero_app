import React from 'react';
import { Component } from "react/cjs/react.production.min";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ButtonLong from "../../components/Atoms/ButtonLong";
import MenuSmallView from '../../containers/MenuView/small';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonMid from '../../components/Atoms/ButtonMid';


/* installed package for bottom sheet : npm install reanimated-bottom-sheet */



export default class ViewRestaurant extends Component {

    /*dummy content YA! */
    renderContent = () => (
        <View style={{ padding: 20, backgroundColor: 'white' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'left', paddingTop: 10 }}>Cafeteria</Text>

            {/*Reviews, etc.*/}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={{ paddingTop: 10, fontSize: 16 }}>$$$$</Text>
                <Text style={{ paddingTop: 10, fontSize: 16 }}>Indonesian</Text>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ alignItems: 'center', marginRight: 10, paddingTop: 10 }}><Icon name="star" size={20}></Icon>
                    </View>

                    <Text style={{ paddingTop: 10, fontSize: 16 }}>9.4</Text>
                </View>


            </View>


            <View style={{ marginBottom: 20, paddingTop: 20 }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'left', paddingTop: 10 }}>Menu</Text>
                        <Text style={{ fontSize: 14, paddingBottom: 15, textAlign: 'left' }}>Their most popular menus</Text>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Image style={{ width: 30, height: 30 }} source={require("../../assets/arrow.png")}></Image>
                    </View>
                </View>


                <MenuSmallView></MenuSmallView>
            </View>

            <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'left', paddingTop: 10 }}>Location</Text>

            <View style={{ marginTop: 20, alignSelf: "center" }}>
                <Image source={require("../../assets/imagedumb.png")} style={{ width: 308, height: 200 }}></Image>
            </View>

            <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
                <View></View>
                <ButtonMid title={"reserve"} onPress={() => this.props.navigation.navigate("MakeReservation")} />
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

            <View style={{ flex: 1, backgroundColor: '#FFFEFD' }}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#ffffff"
                    translucent={true}
                />

                <BottomSheet
                    ref={this.bs}
                    snapPoints={[600, 600, 500]}
                    renderContent={this.renderContent}
                    initialSnap={0}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                    enabledInnerScrolling={true}
                    borderRadius={10}
                />

                <View style={{ width: 202 }}>
                    <Image source={require("../../assets/gourmet1.jpg")} style={{ width: 500, height: 500 }}></Image>
                </View>


            </View>

        );
    }
}


