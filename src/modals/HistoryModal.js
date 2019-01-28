import React, {Component} from 'react';
import {FlatList, Modal, SafeAreaView, View, StyleSheet} from 'react-native';
import SingleRound from '../components/SingleRound';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Players from '../components/Players';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: '11%'
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

export default class HistoryModal extends Component {
    render() {
        const {rounds, shouldShowHistory, actions, team1, team2} = this.props;

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