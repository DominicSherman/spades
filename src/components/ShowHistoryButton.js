import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {shadow} from '../constants/shared-styles';
import {getBackgroundColor, getIconColor} from '../theme-service';

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
            width: '50%',
            justifyContent: 'center',
            backgroundColor: getIconColor(this.props.theme),
            ...shadow
        },
        text: {
            color: getBackgroundColor(this.props.theme),
            fontSize: 22,
            fontWeight: '400',
            fontFamily: 'ArialRoundedMTBold'
        }
    });

    render() {
        const {actions: {toggleShowHistory}} = this.props;
        const styles = this._getStyles();

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