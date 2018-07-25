import React, {Component} from 'react';
import {styles} from '../constants/styles';
import {FOUR, ONE, THREE, TWO} from '../constants/enum';
import {lightFontStyles} from '../constants/font-styles';
import {TextInput, View} from 'react-native';

export default class CurrentRound extends Component {
    render() {
        const {actions, currRound} = this.props;

        return(
            <View style={{flexDirection: 'row'}}>
                <View style={styles.teamView}>
                    <View style={styles.topRowView}>
                        <TextInput
                            clearTextOnFocus
                            style={lightFontStyles.light}
                            onChangeText={(name) => actions.submitValue(name, ONE)}
                            placeholder={`${0}`}
                            value={`${currRound.player1Bid}`}
                        />
                        <TextInput
                            clearTextOnFocus
                            style={lightFontStyles.light}
                            onChangeText={(name) => actions.submitValue(name, TWO)}
                            placeholder={`${0}`}
                            value={`${currRound.player2Bid}`}
                        />
                    </View>
                </View>
                <View style={styles.teamView}>
                    <View style={styles.topRowView}>
                        <TextInput
                            clearTextOnFocus
                            style={lightFontStyles.light}
                            onChangeText={(name) => actions.submitValue(name, THREE)}
                            placeholder={`${0}`}
                            value={`${currRound.player3Bid}`}
                        />
                        <TextInput
                            clearTextOnFocus
                            style={lightFontStyles.light}
                            onChangeText={(name) => actions.submitValue(name, FOUR)}
                            placeholder={`${0}`}
                            value={`${currRound.player4Bid}`}
                        />
                    </View>
                </View>
            </View>
        );
    }
}