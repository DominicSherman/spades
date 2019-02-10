import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {getHeaderFooterTextColor, getIconColor} from '../services/style-service';

export default class RestartButton extends Component {
    _getStyles = () => StyleSheet.create({
        restartText: {
            color: getHeaderFooterTextColor(this.props.theme),
            fontFamily: 'ArialRoundedMTBold',
            fontSize: 12,
            fontWeight: '800'
        },
        touchable: {
            paddingLeft: '3%'
        },
        wrapper: {
            alignItems: 'center',
            flexDirection: 'column',
            height: '70%',
            justifyContent: 'space-evenly',
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
                        color={getIconColor(theme)}
                        name={'undo'}
                        size={70}
                    />
                    <Text style={styles.restartText}>{'RESTART'}</Text>
                </View>
            </Touchable>
        );
    }
}
