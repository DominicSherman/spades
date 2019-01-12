import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {withRedux} from '../redux-factory';
import Header from './Header';
import Players from './Players';
import CurrentRound from './CurrentRound';
import SubmitButton from './SubmitButton';
import SingleRound from './SingleRound';
import HideShowButton from './HideShowButton';

class Home extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.rounds !== this.props.rounds) {
            this.props.actions.calculateTeamScore(this.props.rounds);
        }
    }

    _getRoundsToDisplay = () => {
        const {rounds, shouldShowHistory} = this.props;

        if (!shouldShowHistory) {
            return rounds.slice(0, 1);
        }

        return rounds;
    };

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
                <FlatList
                    data={this._getRoundsToDisplay()}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({item}) => (
                        <SingleRound
                            item={item}
                            shouldShowHistory={shouldShowHistory}
                        />
                    )}
                    style={{flex: 1, height: '100%'}}
                />
                <HideShowButton
                    actions={actions}
                    shouldShowHistory={shouldShowHistory}
                />
                <SubmitButton {...this.props}/>
            </SafeAreaView>
        );
    }
}

export default withRedux(Home);