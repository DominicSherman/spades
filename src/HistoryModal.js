import React, {Component} from 'react';
import {FlatList, Modal, SafeAreaView, View} from 'react-native';
import SingleRound from './components/SingleRound';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Players from './components/Players';

export default class HistoryModal extends Component {
    render() {
        const {rounds, shouldShowHistory, actions, team1, team2} = this.props;

        return (
            <Modal
                animationType={'slide'}
                visible={shouldShowHistory}
            >
                <SafeAreaView style={{
                    flex: 1,
                    paddingTop: '11%'
                }}>
                    <View style={{paddingLeft: '1%'}}>
                        <EvilIcons
                            onPress={actions.toggleShowHistory}
                            name={'close'}
                            size={30}
                        />
                    </View>
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
                        style={{flex: 1, height: '100%'}}
                    />
                </SafeAreaView>
            </Modal>
        );
    }
}