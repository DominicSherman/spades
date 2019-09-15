import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {AdMobBanner} from 'react-native-admob';

import Header from './components/Header';
import Players from './components/Players';
import CurrentRound from './components/CurrentRound';
import Footer from './components/Footer';
import ShowHistoryButton from './components/ShowHistoryButton';
import HistoryModal from './modals/HistoryModal';
import CurrentBids from './components/CurrentBids';
import {getBackgroundColor, getHeaderFooterColor} from './services/style-service';
import {ADMOB_KEY} from './constants/admob';

export default class Home extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.rounds !== this.props.rounds) {
            this.props.actions.calculateTeamScore(this.props.rounds);
        }
    }

    _getStyles = () => StyleSheet.create({
        safeArea: {
            backgroundColor: getHeaderFooterColor(this.props.theme),
            flex: 1
        },
        wrapper: {
            backgroundColor: getBackgroundColor(this.props.theme),
            flex: 0.85,
            paddingBottom: '5%'
        }
    });

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
        const styles = this._getStyles();

        return (
            <SafeAreaView
                style={styles.safeArea}
            >
                <View
                    style={styles.wrapper}
                >
                    <Header
                        actions={actions}
                        isBids={isBids}
                        theme={theme}
                    />
                    <Players
                        actions={actions}
                        rounds={rounds}
                        shouldShowHistory={shouldShowHistory}
                        team1={team1}
                        team2={team2}
                        theme={theme}
                    />
                    <CurrentRound
                        actions={actions}
                        currRound={currRound}
                        theme={theme}
                    />
                    <CurrentBids
                        bids={rounds[0]}
                        currRound={currRound}
                        isBids={isBids}
                        team1={team1}
                        team2={team2}
                        theme={theme}
                    />
                    <ShowHistoryButton
                        actions={actions}
                        shouldShowHistory={shouldShowHistory}
                        theme={theme}
                    />
                </View>
                <Footer
                    actions={actions}
                    isBids={isBids}
                    showInfoModal={showInfoModal}
                    showSettingsModal={showSettingsModal}
                    theme={theme}
                />
                <AdMobBanner
                    adSize={'smartBannerLandscape'}
                    adUnitID={ADMOB_KEY}
                />
                <HistoryModal {...this.props} />
            </SafeAreaView>
        );
    }
}
