import React from 'react';
import {SafeAreaView} from 'react-native';

import {withRedux} from '../redux-factory';
import Header from './Header';
import Players from './Players';
import CurrentRound from './CurrentRound';
import SubmitButton from './SubmitButton';
import HideShowButton from './HideShowButton';
import HistoryModal from '../HistoryModal';
import CurrentBids from './CurrentBids';

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
                <CurrentBids currRound={rounds[0]}/>
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