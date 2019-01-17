import React, {Component} from 'react';
import {darkFontStyles} from '../constants/font-styles';
import {Modal, ScrollView, Text, View, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {instructions, scoring} from '../constants/instructions';

const styles = StyleSheet.create({

});

export default class InstructionsModal extends Component {
    render() {
        return (
            <Modal
                animationType={'slide'}
                visible={this.props.modalVisible}
            >
                <View style={{paddingTop: '11%', paddingLeft: '1%'}}>
                    <EvilIcons
                        onPress={this.props.toggleModal}
                        name={'close'}
                        size={30}
                    />
                    <ScrollView
                        style={{
                            height: '100%',
                            padding: '3%'
                        }}
                    >
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={[darkFontStyles.regular, {fontSize: 25}]}>{'Instructions'}</Text>
                        </View>
                        <Text style={darkFontStyles.light}>
                            {instructions}
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={[darkFontStyles.regular, {fontSize: 25}]}>{'Scoring'}</Text>
                        </View>
                        <Text style={darkFontStyles.light}>
                            {scoring}
                        </Text>
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}