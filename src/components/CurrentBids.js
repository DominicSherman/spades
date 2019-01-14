import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../constants/styles';
import {lightFontStyles} from '../../constants/font-styles';

export default class CurrentBids extends Component {
    render() {
        const {
            team1,
            team2,
            currRound
        } = this.props;

        if (!currRound) {
            return <View style={{flex: 1}}/>;
        }

        const {
            playerOne,
            playerTwo,
            playerThree,
            playerFour,
            team1Bids,
            team2Bids,
            team1Actual
        } = currRound;

        if (team1Actual) {
            return <View style={{flex: 1}}/>;
        }

        return (
            <View style={{flex: 1}}>
                <View style={styles.centeredRow}>
                    <Text style={lightFontStyles.medium}>{'Bids'}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={styles.currentRoundWrapper}>
                        <Text style={lightFontStyles.regular}>
                            {`${team1.firstPlayer}: `}
                        </Text>
                        <Text style={lightFontStyles.regular}>
                            {`${team1.secondPlayer}: `}
                        </Text>
                        <Text style={lightFontStyles.regular}>
                            {'Total: '}
                        </Text>
                    </View>
                    <View style={[styles.currentRoundWrapper, styles.currentRoundScoreWrapper]}>
                        <Text style={lightFontStyles.light}>
                            {playerOne.bid}
                        </Text>
                        <Text style={lightFontStyles.light}>
                            {playerTwo.bid}
                        </Text>
                        <Text style={lightFontStyles.light}>
                            {team1Bids}
                        </Text>
                    </View>
                    <View style={styles.currentRoundWrapper}>
                        <Text style={lightFontStyles.regular}>
                            {`${team2.firstPlayer}: `}
                        </Text>
                        <Text style={lightFontStyles.regular}>
                            {`${team2.secondPlayer}: `}
                        </Text>
                        <Text style={lightFontStyles.regular}>
                            {'Total: '}
                        </Text>
                    </View>
                    <View style={[styles.currentRoundWrapper, styles.currentRoundScoreWrapper]}>
                        <Text style={lightFontStyles.light}>
                            {playerThree.bid}
                        </Text>
                        <Text style={lightFontStyles.light}>
                            {playerFour.bid}
                        </Text>
                        <Text style={lightFontStyles.light}>
                            {team2Bids}
                        </Text>
                    </View>
                </View>
                <View style={styles.centeredRow}>
                    <Text style={lightFontStyles.medium}>{`Available Bags: ${13 - (team1Bids + team2Bids)}`}</Text>
                </View>
            </View>
        );
    }
}