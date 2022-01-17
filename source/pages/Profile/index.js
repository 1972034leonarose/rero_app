import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, Image } from "react-native";
import ProfileCard from "../../components/Atoms/CardButton/profile-card.js";
import Card from "../../components/Atoms/CardButton/card.js";
import ButtonReverseColor from "../../components/Atoms/ButtonReverseColor";
import NavigationBar from "../../containers/NavigationBar";

export default class Profile extends Component {
    render() {
        return (
            // #FFFEFD
            <View style={{ flex: 1, paddingTop: 17, backgroundColor: '#FFFEFD' }}>
                <View>
                    <StatusBar
                        barStyle="dark-content"
                        hidden={false}
                        backgroundColor="#ffffff"
                        translucent={true}
                    />
                </View>
                <View style={{ marginHorizontal: 37, paddingTop: 37, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#000" }}>Profile</Text>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require("../../assets/more.png")} style={{ width: 28, height: 28 }}></Image>
                    </View>

                </View>
                <View style={{ padding: 27, flex: 1 }}>
                    <ProfileCard>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Image source={require("../../assets/face.jpg")} style={{ width: 100, height: 100, borderRadius: 100 / 2 }}></Image>
                            <View style={{ paddingLeft: 16, paddingTop: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                                <Text>Alamat</Text>
                                <Text>01909829739</Text>
                                <View style={{ paddingLeft: 90 }}>
                                    <ButtonReverseColor title="Edit Profile" onPress={() => this.props.navigation.navigate("EditProfile")} />
                                </View>
                            </View>
                        </View>
                    </ProfileCard>

                    <View style={{ width: 352, height: 150, marginVertical: 37 }}>
                        <View style={{ flexDirection: 'row', paddingTop: 4, justifyContent: 'space-between', marginHorizontal: 12 }}>
                            <View style={{ alignItems: 'center', width: 80 }}>
                                <Image source={require("../../assets/waiting.png")} style={{ width: 100, height: 100, borderRadius: 100 / 2 }}></Image>
                                <Text style={{ textAlign: 'center', paddingTop: 5 }}>Waiting for payment</Text>
                            </View>

                            <View style={{ alignItems: 'center', width: 100 }}>
                                <Image source={require("../../assets/reservation.jpg")} style={{ width: 100, height: 100, borderRadius: 100 / 2 }}></Image>
                                <Text style={{ textAlign: 'center', paddingTop: 5 }}>Ongoing{"\n"} Reservations</Text>
                            </View>

                            <View style={{ alignItems: 'center', width: 80 }}>
                                <Image source={require("../../assets/done.png")} style={{ width: 100, height: 100, borderRadius: 100 / 2 }}></Image>
                                <Text style={{ textAlign: 'center', paddingTop: 5 }}>Done</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Card>
                            <View style={{ flexDirection: 'row', paddingTop: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <Text>Favourites</Text>
                                    <Text style={{ fontSize: 8 }}>View your favourited restaurants</Text>
                                </View >
                                <Image source={require("../../assets/arrow.png")} style={{ width: 20, height: 20, borderRadius: 100 / 2 }}></Image>
                            </View>
                        </Card>

                        <Card>
                            <View style={{ flexDirection: 'row', paddingTop: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <Text>Review</Text>
                                    <Text style={{ fontSize: 8 }}>Share your restaurant reviews</Text>
                                </View >
                                <Image source={require("../../assets/arrow.png")} style={{ width: 20, height: 20, borderRadius: 100 / 2 }}></Image>
                            </View>
                        </Card>


                        <Card>
                            <View style={{ flexDirection: 'row', paddingTop: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <Text>Complaints</Text>
                                    <Text style={{ fontSize: 8 }}>Send restaurants your complaints</Text>
                                </View>
                                <Image source={require("../../assets/arrow.png")} style={{ width: 20, height: 20, borderRadius: 100 / 2 }}></Image>
                            </View>
                        </Card>
                    </View>
                </View >
                <NavigationBar onPressHome={() => this.props.navigation.navigate("Home")} onPressReserve={() => this.props.navigation.navigate("Reserve")} />
            </View >

        )
    }
}

