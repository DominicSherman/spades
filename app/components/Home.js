import React from 'react';
import {connect} from 'react-redux';
import {Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {darkFontStyles, lightFontStyles, redFontStyles} from '../constants/font-styles';
import {darkerGray, lightGray} from '../constants/style-variables';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../action-creators/index';

class Home extends React.Component {
    render() {
        console.log('this', this);
        const {actions, teams} = this.props;
        const {team1, team2} = teams;
        const {rounds} = this.props.rounds;

        return (
            <SafeAreaView>
                <View style={styles.headerView}>
                    <Text style={[darkFontStyles.light, styles.headerText]}>{'Spades Score'}</Text>
                </View>
                <View style={styles.scoreView}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.teamView}>
                            <Text style={[darkFontStyles.light, styles.headerText]}>{team1.score}</Text>
                            <View style={styles.rowView}>
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.regular}
                                    value={team1.firstPlayer}
                                />
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.regular}
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
                                    value={team2.firstPlayer}
                                />
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.regular}
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
                                    value={`${rounds[0].player1Bid}`}
                                />
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    value={`${rounds[0].player2Bid}`}
                                />
                            </View>
                        </View>
                        <View style={styles.teamView}>
                            <View style={styles.topRowView}>
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    value={`${rounds[0].player3Bid}`}
                                />
                                <TextInput
                                    clearTextOnFocus
                                    style={lightFontStyles.light}
                                    value={`${rounds[0].player4Bid}`}
                                />
                            </View>
                        </View>
                    </View>
                    {/*<FlatList*/}
                    {/*data={this.state.rounds.slice(1)}*/}
                    {/*keyExtractor={(item, index) => `${index}`}*/}
                    {/*renderItem={({item}) => (*/}
                    {/*<RoundInfo item={item}/>*/}
                    {/*)}*/}
                    {/*/>*/}
                </View>
                <TouchableOpacity
                    onPress={() => actions.addNewRound()}
                >
                    <View style={styles.buttonView}>
                        <Text style={redFontStyles.medium}>{'SUBMIT BIDS'}</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(ActionCreators, dispatch)});

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    buttonView: {
        borderWidth: 1,
        height: (Dimensions.get('screen').height / 15) * 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightGray
    },
    headerText: {
        fontSize: 22
    },
    headerView: {
        alignItems: 'center',
        height: (Dimensions.get('screen').height / 15),
        justifyContent: 'center',
        paddingBottom: 10
    },
    rowView: {
        borderBottomColor: lightGray,
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 2
    },
    topRowView: {
        borderBottomColor: darkerGray,
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 2
    },
    teamView: {
        borderRightColor: darkerGray,
        borderRightWidth: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2,
    },
    scoreView: {
        flexDirection: 'column',
        height: (Dimensions.get('screen').height / 15) * 11
    }
});