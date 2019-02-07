import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {getBackgroundColor, getHeaderFooterTextColor} from '../theme-service';

export default class RestartButton extends Component {
    _getStyles = () => StyleSheet.create({
        touchable: {
            paddingLeft: '3%'
        },
        restartText: {
            color: getHeaderFooterTextColor(this.props.theme),
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

    render() {
        const {actions, theme} = this.props;
        const styles = this._getStyles();

        return (
            <Touchable
                onPress={actions.restart}
                style={styles.touchable}
            >
                <View style={styles.wrapper}>
                    <EvilIcons
                        size={70}
                        name={'undo'}
                        color={getBackgroundColor(theme)}
                    />
                    <Text style={styles.restartText}>{'RESTART'}</Text>
                </View>
            </Touchable>
        );
    }
}