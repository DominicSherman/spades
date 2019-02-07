import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import RestartButton from './RestartButton';
import UndoButton from './UndoButton';
import {getHeaderFooterColor, getHeaderLogo} from '../theme-service';

export default class Header extends React.Component {
    _getStyles = () => StyleSheet.create({
        headerView: {
            alignItems: 'center',
            backgroundColor: getHeaderFooterColor(this.props.theme),
            height: '14%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25
        },
        headerText: {
            fontSize: 22,
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