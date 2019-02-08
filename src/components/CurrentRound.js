import React, {Component} from 'react';
import {Dimensions, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import {FOUR, ONE, THREE, TWO} from '../constants/enum';
import {getLightTextColor} from '../constants/style-service';

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

    _getStyles = () => StyleSheet.create({
        buttonWrapper: {
            alignItems: 'center',
            borderColor: getLightTextColor(this.props.theme),
            borderWidth: 1,
            height: Dimensions.get('screen').width / 4,
            justifyContent: 'center',
            top: 0,
            width: Dimensions.get('screen').width / 4
        },
        teamView: {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 10,
            width: Dimensions.get('screen').width / 2
        },
        text: {
            color: getLightTextColor(this.props.theme),
            fontSize: 20,
            fontWeight: '600'
        },
        topRowView: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: Dimensions.get('screen').width / 2
        }
    });

    render() {
        const {actions, currRound} = this.props;
        const styles = this._getStyles();

        return (
            <View style={{flexDirection: 'row'}}>
                <View style={styles.teamView}>
                    <View style={styles.topRowView}>
                        <TouchableOpacity
                            onPress={() => this.state.player1Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                keyboardType={'number-pad'}
                                onChangeText={(bid) => actions.submitValue(bid, ONE)}
                                placeholder={'0'}
                                ref={(input) => {
                                    this.state.player1Input = input;
                                }}
                                style={styles.text}
                                value={`${currRound.player1Bid}`}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.state.player2Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                keyboardType={'number-pad'}
                                onChangeText={(bid) => actions.submitValue(bid, TWO)}
                                placeholder={'0'}
                                ref={(input) => {
                                    this.state.player2Input = input;
                                }}
                                style={styles.text}
                                value={`${currRound.player2Bid}`}
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
                                keyboardType={'number-pad'}
                                onChangeText={(bid) => actions.submitValue(bid, THREE)}
                                placeholder={'0'}
                                ref={(input) => {
                                    this.state.player3Input = input;
                                }}
                                style={styles.text}
                                value={`${currRound.player3Bid}`}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.state.player4Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                keyboardType={'number-pad'}
                                onChangeText={(bid) => actions.submitValue(bid, FOUR)}
                                placeholder={'0'}
                                ref={(input) => {
                                    this.state.player4Input = input;
                                }}
                                style={styles.text}
                                value={`${currRound.player4Bid}`}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
