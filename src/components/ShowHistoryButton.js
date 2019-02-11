import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import LinearGradient from 'react-native-linear-gradient';

import {shadow} from '../constants/shadow-styles';
import {getBackgroundColor, getRightTeamGradient, getIconColor} from '../services/style-service';

export default class ShowHistoryButton extends Component {
    _getStyles = () => StyleSheet.create({
        showHistoryButton: {
            alignItems: 'center',
            backgroundColor: getIconColor(this.props.theme),
            borderRadius: 100,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            ...shadow
        },
        text: {
            color: getBackgroundColor(this.props.theme),
            fontFamily: 'ArialRoundedMTBold',
            fontSize: 22,
            fontWeight: '400'
        },
        touchable: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            width: '50%'
        },
        wrapper: {
            alignItems: 'center',
            flex: 0.2,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBottom: '2%',
            width: '100%'
        }
    });

    render() {
        const {actions: {toggleShowHistory}, theme} = this.props;
        const styles = this._getStyles();

        return (
            <View style={styles.wrapper}>
                <Touchable
                    onPress={toggleShowHistory}
                    style={styles.touchable}
                >
                    <LinearGradient
                        colors={getRightTeamGradient(theme)}
                        end={{
                            x: 1,
                            y: 0
                        }}
                        start={{
                            x: 0,
                            y: 0
                        }}
                        style={styles.showHistoryButton}
                    >
                        <Text style={styles.text}>{'Show History'}</Text>
                    </LinearGradient>
                </Touchable>
            </View>
        );
    }
}
