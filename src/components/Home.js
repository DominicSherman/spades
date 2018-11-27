import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {withRedux} from '../redux-factory';
import Header from './Header';
import Players from './Players';
import CurrentRound from './CurrentRound';
import SubmitButton from './SubmitButton';
import SingleRound from './SingleRound';

class Home extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.rounds !== this.props.rounds) {
            this.props.actions.calculateTeamScore(this.props.rounds);
        }
    }

    render() {
        const {actions, rounds, isBids, currRound, team1, team2} = this.props;

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
                />
                <CurrentRound
                    actions={actions}
                    currRound={currRound}
                />
                <FlatList
                    data={rounds}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({item}) => (
                        <SingleRound
                            item={item}
                        />
                    )}
                    style={{flex: 1, height: '100%'}}
                />
                <SubmitButton {...this.props}/>
            </SafeAreaView>
        );
    }
}

export default withRedux(Home);