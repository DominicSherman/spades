import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

import {FOUR, ONE, THREE, TWO} from '../constants/enum';
import {blue, lightBlue, peach, violet, white} from '../constants/style-variables';
import LinearGradient from 'react-native-linear-gradient';
import {shadow} from '../constants/shared-styles';

const styles = StyleSheet.create({
    teamView: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2
    },
    nameText: {
        color: white,
        fontSize: 20,
        fontWeight: '400'
    },
    headerText: {
        fontSize: 40,
        fontWeight: '600',
        padding: 10,
        fontFamily: 'ArialRoundedMTBold',
        ...shadow
    },
    centeredRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    singleColumn: {
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        width: Dimensions.get('screen').width / 4
    }
});

export default class Players extends Component {
    render() {
        const {actions, team1, team2} = this.props;

        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.teamView}>
                        <Text style={[styles.headerText, {color: peach}]}>{team1.score}</Text>
                        <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={[violet, peach]}
                            style={[
                                styles.centeredRow,
                                {
                                    borderLeftWidth: 1,
                                    borderColor: peach,
                                    borderBottomLeftRadius: 50,
                                    borderTopLeftRadius: 50
                                }
                            ]}
                        >
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    style={styles.nameText}
                                    onChangeText={(name) => actions.setName(name, ONE)}
                                    placeholder={'Player 1'}
                                    value={team1.firstPlayer}
                                />
                            </View>
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    style={styles.nameText}
                                    onChangeText={(name) => actions.setName(name, TWO)}
                                    placeholder={'Player 2'}
                                    value={team1.secondPlayer}
                                />
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={styles.teamView}>
                        <Text style={[styles.headerText, {color: lightBlue}]}>{team2.score}</Text>
                        <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={[lightBlue, blue]}
                            style={[
                                styles.centeredRow,
                                {
                                    borderLeftWidth: 1,
                                    borderColor: peach,
                                    borderBottomRightRadius: 50,
                                    borderTopRightRadius: 50
                                }
                            ]}
                        >
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    style={styles.nameText}
                                    onChangeText={(name) => actions.setName(name, THREE)}
                                    placeholder={'Player 3'}
                                    value={team2.firstPlayer}
                                />
                            </View>
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    style={styles.nameText}
                                    onChangeText={(name) => actions.setName(name, FOUR)}
                                    placeholder={'Player 4'}
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