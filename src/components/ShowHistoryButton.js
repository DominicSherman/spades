import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {blue, white} from '../constants/style-variables';

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
    },
    showHistoryButton: {
        alignItems: 'center',
        borderRadius: 100,
        flexDirection: 'row',
        flex: 1,
        width: '50%',
        justifyContent: 'center',
        backgroundColor: blue
    },
    text: {
        color: white,
        fontSize: 20,
        fontWeight: '400'
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