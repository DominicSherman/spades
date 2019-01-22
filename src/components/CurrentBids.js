import React, {Component} from 'react';
import {Dimensions, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {lightFontStyles} from '../constants/font-styles';
import {lightBlue, peach} from '../constants/style-variables';

const styles = StyleSheet.create({
    currentRoundScoreWrapper: {
        alignItems: 'flex-start',
        width: Dimensions.get('screen').width / 6,
    },
    currentRoundWrapper: {
        alignItems: 'flex-end',
        flexDirection: 'column',
        height: '70%',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 4,
    },
    centeredRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    }
});

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

        const getBid = (playerBid) => Number(playerBid) === 100 ? 0 : Number(playerBid);

        if (this.shouldShowCurrBids()) {
            return 13 - (bids.team1Bids + bids.team2Bids);
        }

        return 13 - (getBid(player1Bid) + getBid(player2Bid) + getBid(player3Bid) + getBid(player4Bid));
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
                                    <Text style={[lightFontStyles.regular, {color: peach}]}>
                                        {`${team1.firstPlayer}: `}
                                    </Text>
                                    <Text style={[lightFontStyles.regular, {color: peach}]}>
                                        {`${team1.secondPlayer}: `}
                                    </Text>
                                    <Text style={[lightFontStyles.regular, {color: peach}]}>
                                        {'Total: '}
                                    </Text>
                                </View>
                                <View style={[styles.currentRoundWrapper, styles.currentRoundScoreWrapper]}>
                                    <Text style={lightFontStyles.regular}>
                                        {bids.playerOne.bid}
                                    </Text>
                                    <Text style={lightFontStyles.regular}>
                                        {bids.playerTwo.bid}
                                    </Text>
                                    <Text style={lightFontStyles.regular}>
                                        {bids.team1Bids}
                                    </Text>
                                </View>
                                <View style={styles.currentRoundWrapper}>
                                    <Text style={[lightFontStyles.regular, {color: lightBlue}]}>
                                        {`${team2.firstPlayer}: `}
                                    </Text>
                                    <Text style={[lightFontStyles.regular, {color: lightBlue}]}>
                                        {`${team2.secondPlayer}: `}
                                    </Text>
                                    <Text style={[lightFontStyles.regular, {color: lightBlue}]}>
                                        {'Total: '}
                                    </Text>
                                </View>
                                <View style={[styles.currentRoundWrapper, styles.currentRoundScoreWrapper]}>
                                    <Text style={lightFontStyles.regular}>
                                        {bids.playerThree.bid}
                                    </Text>
                                    <Text style={lightFontStyles.regular}>
                                        {bids.playerFour.bid}
                                    </Text>
                                    <Text style={lightFontStyles.regular}>
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