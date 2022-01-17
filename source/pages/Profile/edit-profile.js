import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, BackHandler } from "react-native";
import ProfileCard from "../../components/Atoms/CardButton/profile-card.js";
import BackButton from "../../components/Atoms/BackButton";



export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

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

                {/* ------ header ------- */}
                <View style={{ marginHorizontal: 37, paddingTop: 37, flexDirection: 'row' }}>
                    <BackButton onPress={this.handleBackButtonClick} />
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#000" }}>Edit Profile</Text>
                    </View>
                </View>
                {/* ------ end header ------- */}

                <View style={{ padding: 27, alignItems: 'center' }}>
                    <ProfileCard>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Image source={require("../../assets/face.jpg")} style={{ width: 100, height: 100, borderRadius: 100 / 2 }}></Image>
                            <View style={{ paddingLeft: 16, justifyContent: "center" }}>
                                <Text style={{ fontSize: 12 }}>Add a profile pic so restaurant{"\n"}staff can identify you</Text>
                            </View>
                        </View>
                    </ProfileCard>
                </View>

                <View style={{ alignItems: "center", paddingTop: 27 }}>
                    <View>
                        <Text style={{ fontWeight: "500" }}>Name</Text>
                        <TextInput style={styles.textfield} placeholder="Name"></TextInput>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "500" }}>Email</Text>
                        <TextInput style={styles.textfield} placeholder="Email"></TextInput>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "500" }}>Phone number</Text>
                        <TextInput style={styles.textfield} placeholder="Phone number"></TextInput>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "500" }}>Alamat</Text>
                        <TextInput style={styles.textfield} placeholder="Alamat"></TextInput>
                    </View>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    textfield: {
        width: 280,
        height: 40,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
});

