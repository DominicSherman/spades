import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {FOUR, ONE, THREE, TWO} from '../constants/enum';
import {shadow} from '../constants/shadow-styles';
import {
    getBlueOrWhiteGradient,
    getLightBlueOrWhite,
    getPeachOrWhite,
    getPlayerTextColor,
    getVioletOrWhiteGradient
} from '../services/style-service';

export default class Players extends Component {
    _getStyles = () => StyleSheet.create({
        borderLeft: {
            borderBottomLeftRadius: 50,
            borderTopLeftRadius: 50
        },
        borderRight: {
            borderBottomRightRadius: 50,
            borderTopRightRadius: 50
        },
        centeredRow: {
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%'
        },
        headerText: {
            fontFamily: 'ArialRoundedMTBold',
            fontSize: 40,
            fontWeight: '600',
            padding: 10,
            ...shadow
        },
        nameText: {
            color: getPlayerTextColor(this.props.theme),
            fontSize: 20,
            fontWeight: '400'
        },
        singleColumn: {
            alignItems: 'center',
            flexDirection: 'row',
            height: 60,
            justifyContent: 'center',
            width: Dimensions.get('screen').width / 4
        },
        teamView: {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            width: Dimensions.get('screen').width / 2
        }
    });

    render() {
        const {actions, team1, team2, theme} = this.props;
        const styles = this._getStyles();

        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.teamView}>
                        <Text style={[styles.headerText, {color: getPeachOrWhite(theme)}]}>{team1.score}</Text>
                        <LinearGradient
                            colors={getVioletOrWhiteGradient(theme)}
                            end={{
                                x: 1,
                                y: 0
                            }}
                            start={{
                                x: 0,
                                y: 0
                            }}
                            style={[styles.centeredRow, styles.borderLeft]}
                        >
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    onChangeText={(name) => actions.setName(name, ONE)}
                                    placeholder={'Player 1'}
                                    style={styles.nameText}
                                    value={team1.firstPlayer}
                                />
                            </View>
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    onChangeText={(name) => actions.setName(name, TWO)}
                                    placeholder={'Player 2'}
                                    style={styles.nameText}
                                    value={team1.secondPlayer}
                                />
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={styles.teamView}>
                        <Text style={[styles.headerText, {color: getLightBlueOrWhite(theme)}]}>{team2.score}</Text>
                        <LinearGradient
                            colors={getBlueOrWhiteGradient(theme)}
                            end={{
                                x: 1,
                                y: 0
                            }}
                            start={{
                                x: 0,
                                y: 0
                            }}
                            style={[styles.centeredRow, styles.borderRight]}
                        >
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    onChangeText={(name) => actions.setName(name, THREE)}
                                    placeholder={'Player 3'}
                                    style={styles.nameText}
                                    value={team2.firstPlayer}
                                />
                            </View>
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    onChangeText={(name) => actions.setName(name, FOUR)}
                                    placeholder={'Player 4'}
                                    style={styles.nameText}
                                    value={team2.secondPlayer}
                                />
                            </View>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        );
    }
}
