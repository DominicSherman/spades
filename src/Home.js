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
import {getBackgroundColor, getHeaderFooterColor} from './constants/style-service';

class Home extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.rounds !== this.props.rounds) {
            this.props.actions.calculateTeamScore(this.props.rounds);
        }
    }

    render() {
        const {
            actions,
            rounds,
            isBids,
            currRound,
            team1,
            team2,
            shouldShowHistory,
            showInfoModal,
            theme,
            showSettingsModal
        } = this.props;

        return (
            <SafeAreaView style={{
                backgroundColor: getHeaderFooterColor(theme),
                flex: 1
            }}>
                <View style={{
                    backgroundColor: getBackgroundColor(theme),
                    flex: 0.85,
                    paddingBottom: '5%'
                }}>
                    <Header
                        actions={actions}
                        isBids={isBids}
                        theme={theme}
                    />
                    <Players
                        actions={actions}
                        team1={team1}
                        team2={team2}
                        rounds={rounds}
                        shouldShowHistory={shouldShowHistory}
                        theme={theme}
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
                        theme={theme}
                    />
                </View>
                <Footer
                    actions={actions}
                    showInfoModal={showInfoModal}
                    showSettingsModal={showSettingsModal}
                    isBids={isBids}
                    theme={theme}
                />
                <HistoryModal {...this.props} />
            </SafeAreaView>
        );
    }
}

export default withRedux(Home);