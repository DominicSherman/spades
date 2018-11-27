import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

import {styles} from '../../constants/styles';
import {FOUR, ONE, THREE, TWO} from '../../constants/enum';
import {darkFontStyles, lightFontStyles} from '../../constants/font-styles';

export default class Players extends Component {
    render() {
        const {actions, team1, team2} = this.props;

        return (
            <View style={{flexDirection: 'row'}}>
                <View style={styles.teamView}>
                    <Text style={[darkFontStyles.light, styles.headerText]}>{team1.score}</Text>
                    <View style={styles.rowView}>
                        <TextInput
                            clearTextOnFocus
                            style={lightFontStyles.light}
                            onChangeText={(name) => actions.setName(name, ONE)}
                            placeholder={'Player 1'}
                            value={team1.firstPlayer}
                        />
                        <TextInput
                            clearTextOnFocus
                            style={lightFontStyles.light}
                            onChangeText={(name) => actions.setName(name, TWO)}
                            placeholder={'Player 2'}
                            value={team1.secondPlayer}
                        />
                    </View>
                </View>
                <View style={styles.teamView}>
                    <Text style={[darkFontStyles.light, styles.headerText]}>{team2.score}</Text>
                    <View style={styles.rowView}>
                        <TextInput
                            clearTextOnFocus
                            style={lightFontStyles.light}
                            onChangeText={(name) => actions.setName(name, THREE)}
                            placeholder={'Player 3'}
                            value={team2.firstPlayer}
                        />
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
        );
    }
}