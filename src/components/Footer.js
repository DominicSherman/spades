import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {shadow} from '../constants/shared-styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InstructionsModal from '../modals/InstructionsModal';
import SettingsModal from '../modals/SettingsModal';
import {
    getBackgroundColor,
    getBlueOrWhiteGradient,
    getHeaderFooterColor,
    getHeaderFooterTextColor,
    getIconColor
} from '../theme-service';

export default class Footer extends Component {
    _getStyles = () => StyleSheet.create({
        text: {
            color: getHeaderFooterTextColor(this.props.theme),
            fontSize: 20,
            fontWeight: '800',
            position: 'absolute',
            top: 70,
            fontFamily: 'ArialRoundedMTBold'
        },
        iconBackground: {
            top: -10,
            transform: [{rotate: '45deg'}],
            width: 60,
            height: 60,
            borderRadius: 4,
            position: 'absolute'
        },
        icon: {
            top: -15,
            position: 'absolute',
            ...shadow
        },
        diamond: {
            top: -10,
            transform: [{rotate: '45deg'}],
            width: 120,
            height: 120,
            borderRadius: 4,
            position: 'absolute',
            backgroundColor: getHeaderFooterColor(this.props.theme)
        },
        infoWrapper: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        infoIcon: {
            paddingRight: '40%'
        },
        settingsIcon: {
            paddingLeft: '40%'
        },
        settingsWrapper: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1
        },
        submitWrapper: {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1
        },
        wrapper: {
            bottom: 0,
            flex: 0.15,
            backgroundColor: getHeaderFooterColor(this.props.theme),
            flexDirection: 'row'
        }
    });

    render() {
        const {actions, isBids, showInfoModal, theme, showSettingsModal} = this.props;
        const submitText = isBids ? 'SUBMIT BIDS' : 'SUBMIT RESULTS';
        const styles = this._getStyles();

        return (
            <View style={styles.wrapper}>
                <Touchable
                    onPress={actions.toggleShowInfoModal}
                    style={styles.infoWrapper}
                >
                    <EvilIcons
                        size={50}
                        name={'question'}
                        color={getIconColor(theme)}
                        style={styles.infoIcon}
                    />
                </Touchable>
                <Touchable
                    onPress={actions.submit}
                >
                    <View style={styles.submitWrapper}>
                        <View style={styles.diamond}/>
                        <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={getBlueOrWhiteGradient(theme)}
                            style={styles.iconBackground}
                        />
                        <Feather
                            color={getBackgroundColor(theme)}
                            name={'arrow-up'}
                            size={70}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>{submitText}</Text>
                    </View>
                </Touchable>
                <Touchable
                    onPress={actions.toggleShowSettingsModal}
                    style={styles.infoWrapper}
                >
                    <EvilIcons
                        size={50}
                        name={'gear'}
                        color={getIconColor(theme)}
                        style={styles.settingsIcon}
                    />
                </Touchable>
                <InstructionsModal
                    showInfoModal={showInfoModal}
                    onClose={actions.toggleShowInfoModal}
                    theme={theme}
                />
                <SettingsModal
                    actions={actions}
                    theme={theme}
                    showSettingsModal={showSettingsModal}
                    onClose={actions.toggleShowSettingsModal}
                />
            </View>
        );
    }
}