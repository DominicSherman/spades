import React, {Component} from 'react';
import {darkFontStyles} from '../constants/font-styles';
import {Modal, ScrollView, Text, View, StyleSheet, SafeAreaView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {instructions, scoring} from '../constants/instructions';
import {getBackgroundColor} from '../constants/style-service';

export default class InstructionsModal extends Component {
    _getStyles = () => StyleSheet.create({
        wrapper: {
            paddingLeft: '1%',
            backgroundColor: getBackgroundColor(this.props.theme)
        },
        icon: {
            left: '3%'
        },
        scrollView: {
            height: '100%',
            padding: '3%'
        }
    });

    render() {
        const styles = this._getStyles();

        return (
            <Modal
                animationType={'slide'}
                visible={this.props.showInfoModal}
            >
                <SafeAreaView style={styles.wrapper}>
                    <EvilIcons
                        onPress={this.props.onClose}
                        name={'close'}
                        size={30}
                        style={styles.icon}
                    />
                    <ScrollView
                        style={styles.scrollView}
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
                </SafeAreaView>
            </Modal>
        );
    }
}