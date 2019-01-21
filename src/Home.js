import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {withRedux} from './redux/redux-factory';
import Header from './components/Header';
import Players from './components/Players';
import CurrentRound from './components/CurrentRound';
import Footer from './components/Footer';
import ShowHistoryButton from './components/ShowHistoryButton';
import HistoryModal from './modals/HistoryModal';
import CurrentBids from './components/CurrentBids';
import {lightGray, white} from './constants/style-variables';

class Home extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.rounds !== this.props.rounds) {
            this.props.actions.calculateTeamScore(this.props.rounds);
        }
    }

    render() {
        const {actions, rounds, isBids, currRound, team1, team2, shouldShowHistory} = this.props;

        return (
            <SafeAreaView style={{
                backgroundColor: lightGray,
                flex: 1
            }}>
                <View style={{
                    backgroundColor: white,
                    flex: 0.85,
                    paddingBottom: '5%'
                }}>
                    <Header
                        actions={actions}
                        isBids={isBids}
                    />
                    <Players
                        actions={actions}
                        team1={team1}
                        team2={team2}
                        rounds={rounds}
                        shouldShowHistory={shouldShowHistory}
                    />
                    <CurrentRound
                        actions={actions}
                        currRound={currRound}
                    />
                    <CurrentBids
                        currRound={currRound}
                        bids={rounds[0]}
                        team1={team1}
                        team2={team2}
                    />
                    <ShowHistoryButton
                        actions={actions}
                        shouldShowHistory={shouldShowHistory}
                    />
                </View>
                <Footer
                    actions={actions}
                    isBids={isBids}
                />
                <HistoryModal {...this.props} />
            </SafeAreaView>
        );
    }
}

export default withRedux(Home);