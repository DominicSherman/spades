import React, {Component} from 'react';
import {whiteFontStyles} from '../constants/font-styles';
import {styles} from '../constants/styles';
import {Text, TouchableOpacity} from 'react-native';

export default class SubmitButton extends Component {
    render() {
        const {isBids, actions, currRound} = this.props;
        const submitText = isBids ? 'SUBMIT BIDS' : 'SUBMIT RESULTS';

        return (
            <TouchableOpacity
                onPress={() => {
                    if (isBids) {
                        actions.submitBids(currRound);
                    } else {
                        actions.submitActuals(currRound);
                    }
                }}
                style={styles.bigButtonView}
            >
                <Text style={[whiteFontStyles.light, {fontSize: 25, paddingBottom: 30}]}>{submitText}</Text>
            </TouchableOpacity>
        );
    }
}