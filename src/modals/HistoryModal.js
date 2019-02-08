import React, {Component} from 'react';
import {FlatList, Modal, SafeAreaView, StyleSheet} from 'react-native';
import SingleRound from '../components/SingleRound';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Players from '../components/Players';
import {getBackgroundColor} from '../constants/style-service';

export default class HistoryModal extends Component {
    _getStyles = () => StyleSheet.create({
        wrapper: {
            flex: 1,
            paddingTop: '11%',
            backgroundColor: getBackgroundColor(this.props.theme)
        },
        icon: {
            left: '3%'
        },
        flatList: {
            flex: 1,
            height: '100%',
            paddingTop: '3%'
        }
    });

    render() {
        const {rounds, shouldShowHistory, actions, team1, team2, theme} = this.props;
        const styles = this._getStyles();

        return (
            <Modal
                animationType={'slide'}
                visible={shouldShowHistory}
            >
                <SafeAreaView style={styles.wrapper}>
                    <EvilIcons
                        onPress={actions.toggleShowHistory}
                        name={'close'}
                        size={30}
                        style={styles.icon}
                    />
                    <Players
                        actions={actions}
                        team1={team1}
                        team2={team2}
                        rounds={rounds}
                        shouldShowHistory={shouldShowHistory}
                        theme={theme}
                    />
                    <FlatList
                        data={rounds}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={({item}) => (
                            <SingleRound
                                item={item}
                            />
                        )}
                        style={styles.flatList}
                    />
                </SafeAreaView>
            </Modal>
        );
    }
}