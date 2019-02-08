import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {getHeaderFooterColor, getHeaderLogo} from '../constants/style-service';

import RestartButton from './RestartButton';
import UndoButton from './UndoButton';

export default class Header extends React.Component {
    _getStyles = () => StyleSheet.create({
        headerText: {
            fontSize: 22
        },
        headerView: {
            alignItems: 'center',
            backgroundColor: getHeaderFooterColor(this.props.theme),
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            flexDirection: 'row',
            height: '14%',
            justifyContent: 'space-between',
            width: '100%'
        },
        image: {
            height: '100%',
            width: '100%'
        },
        imageWrapper: {
            height: '80%',
            width: '20%'
        }
    });

    render() {
        const {actions, isBids, theme} = this.props;
        const styles = this._getStyles();

        return (
            <View style={styles.headerView}>
                <RestartButton
                    actions={actions}
                    theme={theme}
                />
                <View style={styles.imageWrapper}>
                    <Image
                        resizeMode={'contain'}
                        source={getHeaderLogo(theme)}
                        style={styles.image}
                    />
                </View>
                <UndoButton
                    actions={actions}
                    isBids={isBids}
                    theme={theme}
                />
            </View>
        );
    }
}
