import React from "react";
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dates from "react-native-dates";
import moment from "moment";
import ButtonLong from "../../components/Atoms/ButtonLong";
import ButtonMid from "../../components/Atoms/ButtonMid";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class MakeReservation extends Component {
    state = {
        date: null,
        focus: 'startDate',
        startDate: null,
        endDate: null
    }

    render() {
        const isDateBlocked = (date) =>
            date.isBefore(moment(), 'day');

        const onDatesChange = ({ startDate, endDate, focusedInput }) =>
            this.setState({ ...this.state, focus: focusedInput }, () =>
                this.setState({ ...this.state, startDate, endDate })
            );

        const onDateChange = ({ date }) =>
            this.setState({ ...this.state, date });

        return (
            <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#ffffff"
                    translucent={true}
                />
                <SafeAreaView>
                    <View style={{ padding: 16, marginBottom: 15, flexDirection: "row" }}>
                        <View>
                            <Image style={{ width: 32, height: 32 }} source={require("../../assets/back.png")} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Make Reservation</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 40 }}>
                        <View style={{ marginBottom: 15, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 18 }}>Reservation Hour</Text>
                            <TextInput keyboardType="numeric" style={{ backgroundColor: "#e8e8e8", width: 100, borderRadius: 10 }}></TextInput>
                        </View>

                        <View style={{ marginBottom: 15, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 18 }}>Number of people</Text>
                            <TextInput keyboardType="numeric" style={{ backgroundColor: "#e8e8e8", width: 100, borderRadius: 10 }}></TextInput>
                        </View>

                        <View style={{ marginBottom: 15, width: 300, height: 1, backgroundColor: "#cccccc" }}></View>

                        <View style={{ marginBottom: 15, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 18 }}>Special Request</Text>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate("SpecialRequest")}>
                                <View style={{ backgroundColor: "#e8e8e8", width: 100, height: 25, borderRadius: 10 }}></View>
                            </TouchableOpacity>
                        </View>


                        <View style={{ marginBottom: 15, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 18 }}>Select Table</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("SelectTable")} >
                                <View style={{ backgroundColor: "#e8e8e8", width: 100, height: 25, borderRadius: 10 }}></View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginBottom: 15, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 18 }}>Select Menu</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Menu")} >
                                <View style={{ backgroundColor: "#e8e8e8", width: 100, height: 25, borderRadius: 10 }}></View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <Dates onDatesChange={onDatesChange}
                                isDateBlocked={isDateBlocked}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                focusedInput={this.state.focus} />
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 10 }}>
                            <View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image style={{ width: 10, height: 10 }} source={require("../../assets/ellipse.png")} />
                                    <Text> Fully booked</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image style={{ width: 10, height: 10 }} source={require("../../assets/ellipse.png")} />
                                    <Text> Available</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image style={{ width: 10, height: 10 }} source={require("../../assets/ellipse.png")} />
                                    <Text> Selected</Text>
                                </View>
                            </View>
                            <View>
                                <ButtonMid title={"Confirm order"} onPress={() => this.props.navigation.navigate("OrderPreview")} />
                            </View>
                        </View>
                    </View >
                </SafeAreaView >
            </View >
        )
    }

}