import React, {Component} from 'react';
import {FOUR, ONE, THREE, TWO} from '../constants/enum';
import {lightFontStyles} from '../constants/font-styles';
import {TextInput, TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';
import {lightGray} from '../constants/style-variables';

const styles = StyleSheet.create({
    teamView: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2,
    },
    topRowView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2
    },
    buttonWrapper: {
        height: Dimensions.get('screen').width / 4,
        width: Dimensions.get('screen').width / 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: lightGray,
        borderWidth: 1,
        top: 0
    }
});

export default class CurrentRound extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player1Input: null,
            player2Input: null,
            player3Input: null,
            player4Input: null
        };
    }

    render() {
        const {actions, currRound} = this.props;

        return (
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.teamView]}>
                    <View style={styles.topRowView}>
                        <TouchableOpacity
                            onPress={() => this.state.player1Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                style={lightFontStyles.medium}
                                onChangeText={(bid) => actions.submitValue(bid, ONE)}
                                placeholder={'0'}
                                ref={(input) => {
                                    this.state.player1Input = input;
                                }}
                                value={`${currRound.player1Bid}`}
                                keyboardType={'number-pad'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.state.player2Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                style={lightFontStyles.medium}
                                onChangeText={(bid) => actions.submitValue(bid, TWO)}
                                placeholder={'0'}
                                ref={(input) => {
                                    this.state.player2Input = input;
                                }}
                                value={`${currRound.player2Bid}`}
                                keyboardType={'number-pad'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.teamView]}>
                    <View style={styles.topRowView}>
                        <TouchableOpacity
                            onPress={() => this.state.player3Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                style={lightFontStyles.medium}
                                onChangeText={(bid) => actions.submitValue(bid, THREE)}
                                placeholder={'0'}
                                ref={(input) => {
                                    this.state.player3Input = input;
                                }}
                                value={`${currRound.player3Bid}`}
                                keyboardType={'number-pad'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.state.player4Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                style={lightFontStyles.medium}
                                onChangeText={(bid) => actions.submitValue(bid, FOUR)}
                                placeholder={'0'}
                                ref={(input) => {
                                    this.state.player4Input = input;
                                }}
                                value={`${currRound.player4Bid}`}
                                keyboardType={'number-pad'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}