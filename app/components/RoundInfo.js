import React, {Component} from 'react';
import {lightFontStyles} from '../constants/font-styles';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {darkerGray, lightGray} from '../constants/style-variables';

export default class RoundInfo extends Component {
    render() {
        const {item} = this.props;

        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.teamView}>
                        <Text
                            style={lightFontStyles.light}>{`${Number(item.player1Bid) + Number(item.player2Bid)}`}</Text>
                        <View style={styles.rowView}>
                            <Text style={lightFontStyles.light}>{`${item.player1Bid}`}</Text>
                            <Text style={lightFontStyles.light}>{`${item.player2Bid}`}</Text>
                        </View>
                    </View>
                    <View style={styles.teamView}>
                        <Text
                            style={lightFontStyles.light}>{`${Number(item.player3Bid) + Number(item.player4Bid)}`}</Text>
                        <View style={styles.rowView}>
                            <Text style={lightFontStyles.light}>{`${item.player3Bid}`}</Text>
                            <Text style={lightFontStyles.light}>{`${item.player4Bid}`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonView: {
        borderWidth: 1,
        height: (Dimensions.get('screen').height / 15) * 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightGray
    },
    headerText: {
        fontSize: 22
    },
    headerView: {
        alignItems: 'center',
        height: (Dimensions.get('screen').height / 15),
        justifyContent: 'center',
        paddingBottom: 10
    },
    rowView: {
        borderBottomColor: lightGray,
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 2
    },
    topRowView: {
        borderBottomColor: darkerGray,
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 2
    },
    teamView: {
        borderRightColor: darkerGray,
        borderRightWidth: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2,
    },
    scoreView: {
        flexDirection: 'column',
        height: (Dimensions.get('screen').height / 15) * 11
    }
});