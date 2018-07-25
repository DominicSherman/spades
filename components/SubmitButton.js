import React, {Component} from 'react';
import {whiteFontStyles} from '../constants/font-styles';
import {styles} from '../constants/styles';
import {Text, TouchableOpacity} from 'react-native';

export default class SubmitButton extends Component {
    render() {
        const {isBids, actions, team1, team2, rounds, currRound} = this.props;
        const submitText = isBids ? 'SUBMIT BIDS' : 'SUBMIT ACTUAL';

        return (
            <TouchableOpacity
                onPress={() => {
                    if (isBids) {
                        actions.submitBids(currRound);
                    } else {
                        actions.submitActuals(team1.score, team2.score, rounds[0], currRound);
                    }
                }}
                style={styles.bigButtonView}
            >
                <Text style={[whiteFontStyles.light, {fontSize: 25}]}>{submitText}</Text>
            </TouchableOpacity>
        );
    }
}