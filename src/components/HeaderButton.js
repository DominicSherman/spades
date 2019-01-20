import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {blue, mediumGray} from '../constants/style-variables';

const styles = StyleSheet.create({
    touchable: {
        padding: '3%'
    },
    restartText: {
        color: mediumGray,
        fontSize: 12,
        fontWeight: '800'
    },
    wrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '70%',
        width: '100%'
    }
});

export default class HeaderButton extends Component {
    render() {
        const {iconName, text, onPress} = this.props;

        return (
            <Touchable
                onPress={onPress}
                style={styles.touchable}
            >
                <View style={styles.wrapper}>
                    <EvilIcons
                        size={42}
                        name={iconName}
                        color={blue}
                    />
                    <Text style={styles.restartText}>{text}</Text>
                </View>
            </Touchable>
        );
    }
}