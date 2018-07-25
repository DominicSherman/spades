import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {lightFontStyles} from '../constants/font-styles';
import {styles} from '../constants/styles';

export default class Round extends Component {
    render() {
        const {playerOne, playerTwo, playerThree, playerFour, team1Actual, team2Actual, team1Bids, team2Bids} = this.props.item;

        return (
            <View>
                {playerOne.actual !== null && playerOne.actual !== undefined ?
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.teamView}>
                            <Text style={lightFontStyles.light}>{team1Actual}</Text>
                            <View style={styles.actualView}>
                                <Text style={lightFontStyles.light}>{`${playerOne.actual}`}</Text>
                                <Text style={lightFontStyles.light}>{`${playerTwo.actual}`}</Text>
                            </View>
                        </View>
                        <View style={styles.teamView}>
                            <Text style={lightFontStyles.light}>{team2Actual}</Text>
                            <View style={styles.actualView}>
                                <Text style={lightFontStyles.light}>{`${playerThree.actual}`}</Text>
                                <Text style={lightFontStyles.light}>{`${playerFour.actual}`}</Text>
                            </View>
                        </View>
                    </View>
                    :
                    null
                }
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.teamView}>
                        <Text style={lightFontStyles.light}>{team1Bids}</Text>
                        <View style={styles.rowView}>
                            <Text style={lightFontStyles.light}>{playerOne.bid}</Text>
                            <Text style={lightFontStyles.light}>{playerTwo.bid}</Text>
                        </View>
                    </View>
                    <View style={styles.teamView}>
                        <Text style={lightFontStyles.light}>{team2Bids}</Text>
                        <View style={styles.rowView}>
                            <Text style={lightFontStyles.light}>{playerThree.bid}</Text>
                            <Text style={lightFontStyles.light}>{playerFour.bid}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};
