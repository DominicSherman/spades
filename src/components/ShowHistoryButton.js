import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {shadow} from '../constants/shadow-styles';
import {getBackgroundColor, getBlueOrWhiteGradient, getIconColor} from '../constants/style-service';
import {peach} from '../constants/style-variables';
import LinearGradient from 'react-native-linear-gradient';

export default class ShowHistoryButton extends Component {
    _getStyles = () => StyleSheet.create({
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
            justifyContent: 'center',
            backgroundColor: getIconColor(this.props.theme),
            ...shadow
        },
        text: {
            color: getBackgroundColor(this.props.theme),
            fontSize: 22,
            fontWeight: '400',
            fontFamily: 'ArialRoundedMTBold'
        },
        touchable: {
            justifyContent: 'center',
            flexDirection: 'row',
            width: '50%',
            flex: 1
        }
    });

    render() {
        const {actions: {toggleShowHistory}, theme} = this.props;
        const styles = this._getStyles();

        return (
            <View style={styles.wrapper}>
                <Touchable onPress={toggleShowHistory}
                    style={styles.touchable}
                >
                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={getBlueOrWhiteGradient(theme)}
                        style={styles.showHistoryButton}
                    >
                        <Text style={styles.text}>{'Show History'}</Text>
                    </LinearGradient>
                </Touchable>
            </View>
        );
    }
}