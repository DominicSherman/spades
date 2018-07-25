import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {darkFontStyles, lightFontStyles, redFontStyles, whiteFontStyles} from '../constants/font-styles';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../actions';
import Score from './Score';
import {FOUR, ONE, THREE, TWO} from '../constants/enum';
import {styles} from '../constants/styles';

class Home extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.isBids && this.props.isBids) {
            this.props.actions.calculateTeamScore(this.props.rounds[0], this.props.team1, this.props.team2);
        }
    }

    render() {
        console.log('this.props', this.props);
        const {isBids, rounds, currRound, team1, team2} = this.props;
        const submitText = isBids ? 'SUBMIT BIDS' : 'SUBMIT ACTUAL';

        return (
            <SafeAreaView>
                <View style={styles.headerView}>
                    <Text style={[darkFontStyles.light, styles.headerText]}>{'Spades'}</Text>
                    <TouchableOpacity
                        style={styles.smallButtonView}
                    >
                        <View>
                            <Text style={[redFontStyles.light, {fontSize: 22}]}>{'Undo'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.scoreView}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.teamView}>
                            <Text style={[darkFontStyles.light, styles.headerText]}>{team1.score}</Text>
                            <View style={styles.rowView}>
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.regular}
                                    onChangeText={(name) => this.props.actions.setName(name, ONE)}
                                    placeholder={`Player 1`}
                                    value={team1.firstPlayer}
                                />
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.regular}
                                    onChangeText={(name) => this.props.actions.setName(name, TWO)}
                                    placeholder={`Player 2`}
                                    value={team1.secondPlayer}
                                />
                            </View>
                        </View>
                        <View style={styles.teamView}>
                            <Text style={[darkFontStyles.light, styles.headerText]}>{team2.score}</Text>
                            <View style={styles.rowView}>
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.regular}
                                    onChangeText={(name) => this.props.actions.setName(name, THREE)}
                                    placeholder={`Player 3`}
                                    value={team2.firstPlayer}
                                />
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.regular}
                                    onChangeText={(name) => this.props.actions.setName(name, FOUR)}
                                    placeholder={`Player 4`}
                                    value={team2.secondPlayer}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.teamView}>
                            <View style={styles.topRowView}>
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    onChangeText={(name) => this.props.actions.setValue(name, ONE)}
                                    placeholder={`${0}`}
                                    value={`${currRound.player1Bid}`}
                                />
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    onChangeText={(name) => this.props.actions.setValue(name, TWO)}
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
                                    onChangeText={(name) => this.props.actions.setValue(name, THREE)}
                                    placeholder={`${0}`}
                                    value={`${currRound.player3Bid}`}
                                />
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    onChangeText={(name) => this.props.actions.setValue(name, FOUR)}
                                    placeholder={`${0}`}
                                    value={`${currRound.player4Bid}`}
                                />
                            </View>
                        </View>
                    </View>
                    <Score
                        actions={this.props.actions}
                        isBids={isBids}
                        rounds={rounds}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        if (isBids) {
                            this.props.actions.submitBids(currRound);
                        } else {
                            this.props.actions.submitActuals(team1.score, team2.score, rounds[0], currRound);
                        }
                    }}
                    style={styles.bigButtonView}
                >
                    <View>
                        <Text style={[whiteFontStyles.light, {fontSize: 25}]}>{submitText}</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(ActionCreators, dispatch)});

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
