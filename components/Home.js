import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {withRedux} from '../redux-factory';
import Rounds from './Rounds';
import Header from './Header';
import Players from './Players';
import CurrentRound from './CurrentRound';
import SubmitButton from './SubmitButton';
import {styles} from '../constants/styles';

class Home extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.rounds !== this.props.rounds) {
            this.props.actions.calculateTeamScore(this.props.rounds);
        }
    }

    render() {
        const {actions, isBids, rounds, currRound, team1, team2} = this.props;

        return (
            <SafeAreaView>
                <Header
                    actions={this.props.actions}
                    isBids={isBids}
                />
                <View style={styles.mainView}>
                    <Players
                        actions={actions}
                        team1={team1}
                        team2={team2}
                    />
                    <CurrentRound
                        actions={actions}
                        currRound={currRound}
                    />
                    <Rounds rounds={rounds}/>
                </View>
                <SubmitButton {...this.props}/>
            </SafeAreaView>
        );
    }
}

export default withRedux(Home);