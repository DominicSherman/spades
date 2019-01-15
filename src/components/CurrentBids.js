import React, {Component} from 'react';
import {ScrollView, Text, TouchableWithoutFeedback, View, Keyboard} from 'react-native';
import {styles} from '../../constants/styles';
import {lightFontStyles} from '../../constants/font-styles';

export default class CurrentBids extends Component {
    shouldShowCurrBids = () => this.props.bids && !this.props.bids.team1Actual;

    getBags = () => {
        const {
            currRound: {
                player1Bid,
                player2Bid,
                player3Bid,
                player4Bid
            },
            bids
        } = this.props;

        if (this.shouldShowCurrBids()) {
            return 13 - (bids.team1Bids + bids.team2Bids);
        }

        return 13 - (Number(player1Bid) + Number(player2Bid) + Number(player3Bid) + Number(player4Bid));
    };

    render() {
        const {
            team1,
            team2,
            bids
        } = this.props;

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={{flex: 1}}
                    keyboardShouldPersistTaps={'never'}
                >
                    <View style={[styles.centeredRow, {padding: 20}]}>
                        <Text style={lightFontStyles.medium}>
                            {`Available Bags: ${this.getBags()}`}
                        </Text>
                    </View>
                    {
                        this.shouldShowCurrBids() &&
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
                                        {bids.playerOne.bid}
                                    </Text>
                                    <Text style={lightFontStyles.light}>
                                        {bids.playerTwo.bid}
                                    </Text>
                                    <Text style={lightFontStyles.light}>
                                        {bids.team1Bids}
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
                                        {bids.playerThree.bid}
                                    </Text>
                                    <Text style={lightFontStyles.light}>
                                        {bids.playerFour.bid}
                                    </Text>
                                    <Text style={lightFontStyles.light}>
                                        {bids.team2Bids}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}