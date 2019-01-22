import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {lightBlue, white} from '../constants/style-variables';
import {shadow} from '../constants/shared-styles';

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: '2%'
    },
    showHistoryButton: {
        alignItems: 'center',
        borderRadius: 100,
        flexDirection: 'row',
        flex: 1,
        width: '50%',
        justifyContent: 'center',
        backgroundColor: lightBlue,
        ...shadow
    },
    text: {
        color: white,
        fontSize: 22,
        fontWeight: '400',
        fontFamily: 'ArialRoundedMTBold'
    }
});

export default class ShowHistoryButton extends Component {
    render() {
        const {actions: {toggleShowHistory}} = this.props;

        return (
            <View style={styles.wrapper}>
                <Touchable
                    onPress={toggleShowHistory}
                    style={styles.showHistoryButton}
                >
                    <Text style={styles.text}>{'Show History'}</Text>
                </Touchable>
            </View>
        );
    }
}