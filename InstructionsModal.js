import React, {Component} from 'react';
import {darkFontStyles} from './constants/font-styles';
import {Modal, Text, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class InstructionsModal extends Component {
    render() {
        return (
            <Modal
                animationType={'slide'}
                visible={this.props.modalVisible}
            >
                <View style={{paddingTop: '11%'}}>
                    <EvilIcons
                        onPress={this.props.toggleModal}
                        name={'close'}
                        size={30}
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={[darkFontStyles.regular, {fontSize: 25}]}>{'Instructions'}</Text>
                    </View>
                    <View style={{padding: '3%'}}>
                        <Text style={darkFontStyles.light}>
                            {'Enter names of players. Player 1 and Player 2 are Team 1, and Player 3 and Player 4 are Team 2.\n\n' +
                            'Submit bids for each player before the round by selecting the 0 under their name. Submit the number of tricks taken by each player the same way after the round. \n'}
                        </Text>
                        <Text style={darkFontStyles.light}>
                            {'Scores will be calculated automatically. \n\n' +
                            'For blind nil, enter 100 instead of 0 as the bid, but then submit results with the number of tricks taken as normal.'}
                        </Text>
                    </View>
                </View>
            </Modal>
        );
    }
}