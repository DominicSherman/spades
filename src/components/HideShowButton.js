import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {darkFontStyles} from '../constants/font-styles';
import {darkerGray} from '../constants/style-variables';

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
    },
    showHistoryButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: darkerGray,
        borderRadius: 4,
        flexDirection: 'row',
        flex: 1,
        width: '50%',
        justifyContent: 'center'
    }
});

export default class HideShowButton extends Component {
    render() {
        const {actions: {toggleShowHistory}} = this.props;
        return (
            <View style={styles.wrapper}>
                <Touchable
                    onPress={toggleShowHistory}
                    style={styles.showHistoryButton}
                >
                    <Text style={darkFontStyles.light}>{'Show History'}</Text>
                </Touchable>
            </View>
        );
    }
}