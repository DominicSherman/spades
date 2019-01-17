import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, Dimensions} from 'react-native';

import {FOUR, ONE, THREE, TWO} from '../constants/enum';
import {darkFontStyles, lightFontStyles} from '../constants/font-styles';

const styles = StyleSheet.create({
    teamView: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2,
    },
    headerText: {
        fontSize: 22,
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
                    <View style={[styles.teamView, {paddingBottom: 0}]}>
                        <Text style={[darkFontStyles.light, styles.headerText]}>{team1.score}</Text>
                        <View style={styles.centeredRow}>
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    onChangeText={(name) => actions.setName(name, ONE)}
                                    placeholder={'Player 1'}
                                    value={team1.firstPlayer}
                                />
                            </View>
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    onChangeText={(name) => actions.setName(name, TWO)}
                                    placeholder={'Player 2'}
                                    value={team1.secondPlayer}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.teamView, {paddingBottom: 0}]}>
                        <Text style={[darkFontStyles.light, styles.headerText]}>{team2.score}</Text>
                        <View style={styles.centeredRow}>
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    onChangeText={(name) => actions.setName(name, THREE)}
                                    placeholder={'Player 3'}
                                    value={team2.firstPlayer}
                                />
                            </View>
                            <View style={styles.singleColumn}>
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    onChangeText={(name) => actions.setName(name, FOUR)}
                                    placeholder={'Player 4'}
                                    value={team2.secondPlayer}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}