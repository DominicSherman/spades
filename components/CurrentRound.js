import React, {Component} from 'react';
import {styles} from '../constants/styles';
import {FOUR, ONE, THREE, TWO} from '../constants/enum';
import {lightFontStyles} from '../constants/font-styles';
import {TextInput, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {hyveeRed} from "../constants/style-variables";

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
                <View style={styles.teamView}>
                    <View style={styles.topRowView}>
                        <TouchableOpacity
                            onPress={() => this.state.player1Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                style={lightFontStyles.light}
                                onChangeText={(name) => actions.submitValue(name, ONE)}
                                placeholder={`${0}`}
                                ref={(input) => {
                                    this.state.player1Input = input;
                                }}
                                value={`${currRound.player1Bid}`}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.state.player2Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                style={lightFontStyles.light}
                                onChangeText={(name) => actions.submitValue(name, TWO)}
                                placeholder={`${0}`}
                                ref={(input) => {
                                    this.state.player2Input = input;
                                }}
                                value={`${currRound.player2Bid}`}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.teamView}>
                    <View style={styles.topRowView}>
                        <TouchableOpacity
                            onPress={() => this.state.player3Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                style={lightFontStyles.light}
                                onChangeText={(name) => actions.submitValue(name, THREE)}
                                placeholder={`${0}`}
                                ref={(input) => {
                                    this.state.player3Input = input;
                                }}
                                value={`${currRound.player3Bid}`}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.state.player4Input.focus()}
                            style={styles.buttonWrapper}
                        >
                            <TextInput
                                clearTextOnFocus
                                style={lightFontStyles.light}
                                onChangeText={(name) => actions.submitValue(name, FOUR)}
                                placeholder={`${0}`}
                                ref={(input) => {
                                    this.state.player4Input = input;
                                }}
                                value={`${currRound.player4Bid}`}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}