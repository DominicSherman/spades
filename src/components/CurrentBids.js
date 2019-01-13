import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../constants/styles';
import {lightFontStyles} from '../../constants/font-styles';

export default class CurrentBids extends Component {
    render() {
        const {
            playerOne,
            playerTwo,
            playerThree,
            playerFour,
            team1Bids,
            team2Bids,
            team1Actual
        } = this.props.currRound;

        if (team1Actual) {
            return <View style={{flex: 1}}/>;
        }

        return (
            <View style={{flex: 1}}>
                <View style={styles.centeredRow}>
                    <Text style={lightFontStyles.medium}>{'Bids'}</Text>
                </View>
                <View style={styles.centeredRow}>
                    <View style={styles.teamView}>
                        <Text style={lightFontStyles.light}>{team1Bids}</Text>
                        <View style={styles.centeredRow}>
                            <View style={styles.singleBid}>
                                <Text style={lightFontStyles.light}>{playerOne.bid}</Text>
                            </View>
                            <View style={styles.singleBid}>
                                <Text style={lightFontStyles.light}>{playerTwo.bid}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.teamView}>
                        <Text style={lightFontStyles.light}>{team2Bids}</Text>
                        <View style={styles.centeredRow}>
                            <View style={styles.singleBid}>
                                <Text style={lightFontStyles.light}>{playerThree.bid}</Text>
                            </View>
                            <View style={styles.singleBid}>
                                <Text style={lightFontStyles.light}>{playerFour.bid}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.centeredRow, {padding: 20}]}>
                    <Text style={lightFontStyles.medium}>{`Available Bags: ${13 - (team1Bids + team2Bids)}`}</Text>
                </View>
            </View>
        );
    }
}