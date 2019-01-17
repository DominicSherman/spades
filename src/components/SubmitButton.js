import React, {Component} from 'react';
import {whiteFontStyles} from '../constants/font-styles';
import {Text, TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';
import {green} from '../constants/style-variables';

const styles = StyleSheet.create({
    bigButtonView: {
        borderWidth: 1,
        borderColor: green,
        height: (Dimensions.get('screen').height / 15) * 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: green
    }
});

export default class SubmitButton extends Component {
    render() {
        const {isBids, actions, currRound} = this.props;
        const submitText = isBids ? 'SUBMIT BIDS' : 'SUBMIT RESULTS';

        return (
            <View style={{bottom: -35}}>
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
                    <Text style={[whiteFontStyles.light, {
                        fontSize: 25,
                        paddingBottom: 20
                    }]}>{submitText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}