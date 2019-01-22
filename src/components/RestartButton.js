import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {blue, mediumGray} from '../constants/style-variables';

const styles = StyleSheet.create({
    touchable: {
        paddingLeft: '3%'
    },
    restartText: {
        color: mediumGray,
        fontSize: 12,
        fontWeight: '800',
        fontFamily: 'ArialRoundedMTBold'
    },
    wrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '70%',
        width: 60
    }
});

export default class RestartButton extends Component {
    render() {
        const {actions} = this.props;

        return (
            <Touchable
                onPress={actions.restart}
                style={styles.touchable}
            >
                <View style={styles.wrapper}>
                    <EvilIcons
                        size={70}
                        name={'undo'}
                        color={blue}
                    />
                    <Text style={styles.restartText}>{'RESTART'}</Text>
                </View>
            </Touchable>
        );
    }
}