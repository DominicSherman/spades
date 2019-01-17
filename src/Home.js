import React from 'react';
import {SafeAreaView} from 'react-native';

import {withRedux} from './redux/redux-factory';
import Header from './components/Header';
import Players from './components/Players';
import CurrentRound from './components/CurrentRound';
import SubmitButton from './components/SubmitButton';
import HideShowButton from './components/HideShowButton';
import HistoryModal from './modals/HistoryModal';
import CurrentBids from './components/CurrentBids';

class Home extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.rounds !== this.props.rounds) {
            this.props.actions.calculateTeamScore(this.props.rounds);
        }
    }

    render() {
        const {actions, rounds, isBids, currRound, team1, team2, shouldShowHistory} = this.props;

        return (
            <SafeAreaView style={{flex: 1}}>
                <Header
                    actions={this.props.actions}
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
                <HideShowButton
                    actions={actions}
                    shouldShowHistory={shouldShowHistory}
                />
                <SubmitButton {...this.props}/>
                <HistoryModal {...this.props} />
            </SafeAreaView>
        );
    }
}

export default withRedux(Home);