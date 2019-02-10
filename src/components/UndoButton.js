import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';

import {getHeaderFooterTextColor, getUndoLogo} from '../services/style-service';

export default class UndoButton extends Component {
    _getStyles = () => StyleSheet.create({
        image: {
            height: '100%',
            width: '100%'
        },
        imageWrapper: {
            height: '100%',
            width: '50%'
        },
        text: {
            color: getHeaderFooterTextColor(this.props.theme),
            fontFamily: 'ArialRoundedMTBold',
            fontSize: 12,
            fontWeight: '800'
        },
        touchable: {
            paddingRight: '3%'
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
        const {actions, isBids, theme} = this.props;
        const styles = this._getStyles();

        return (
            <Touchable
                onPress={() => actions.undo(isBids)}
                style={styles.touchable}
            >
                <View style={styles.wrapper}>
                    <View style={styles.imageWrapper}>
                        <Image
                            resizeMode={'contain'}
                            source={getUndoLogo(theme)}
                            style={styles.image}
                        />
                    </View>
                    <Text style={styles.text}>{'UNDO'}</Text>
                </View>
            </Touchable>
        );
    }
}
