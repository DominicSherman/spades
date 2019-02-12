import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {getShadow} from '../constants/shadow-styles';
import InstructionsModal from '../modals/InstructionsModal';
import SettingsModal from '../modals/SettingsModal';
import {
    getFooterIconColor,
    getHeaderFooterColor,
    getSubmitArrowColor,
    getSubmitTextColor
} from '../services/style-service';

export default class Footer extends Component {
    _getStyles = () => StyleSheet.create({
        diamond: {
            backgroundColor: getHeaderFooterColor(this.props.theme),
            borderRadius: 4,
            height: 120,
            position: 'absolute',
            top: -10,
            transform: [{rotate: '45deg'}],
            width: 120
        },
        icon: {
            position: 'absolute',
            top: -15,
            ...getShadow(this.props.theme)
        },
        iconBackground: {
            backgroundColor: getFooterIconColor(this.props.theme),
            borderRadius: 4,
            height: 60,
            position: 'absolute',
            top: -10,
            transform: [{rotate: '45deg'}],
            width: 60,
            ...getShadow(this.props.theme)
        },
        infoWrapper: {
            alignItems: 'center',
            flex: 0.5,
            flexDirection: 'row',
            justifyContent: 'center',
            ...getShadow(this.props.theme)
        },
        settingsWrapper: {
            alignItems: 'center',
            flex: 0.5,
            flexDirection: 'row',
            justifyContent: 'center',
            ...getShadow(this.props.theme)
        },
        submitTouchable: {
            flex: 1
        },
        submitWrapper: {
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center'
        },
        text: {
            color: getSubmitTextColor(this.props.theme),
            fontFamily: 'ArialRoundedMTBold',
            fontSize: 18,
            fontWeight: '800',
            position: 'absolute',
            top: 70,
            ...getShadow(this.props.theme)
        },
        wrapper: {
            backgroundColor: getHeaderFooterColor(this.props.theme),
            bottom: 0,
            flex: 0.15,
            flexDirection: 'row',
            justifyContent: 'space-between'
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
                        color={getFooterIconColor(theme)}
                        name={'question'}
                        size={50}
                    />
                </Touchable>
                <Touchable
                    onPress={actions.submit}
                    style={styles.submitTouchable}
                >
                    <View style={styles.submitWrapper}>
                        <View style={styles.diamond} />
                        <View style={styles.iconBackground} />
                        <Feather
                            color={getSubmitArrowColor(theme)}
                            name={'arrow-up'}
                            size={70}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>{submitText}</Text>
                    </View>
                </Touchable>
                <Touchable
                    onPress={actions.toggleShowSettingsModal}
                    style={styles.settingsWrapper}
                >
                    <EvilIcons
                        color={getFooterIconColor(theme)}
                        name={'gear'}
                        size={50}
                    />
                </Touchable>
                <InstructionsModal
                    onClose={actions.toggleShowInfoModal}
                    showInfoModal={showInfoModal}
                    theme={theme}
                />
                <SettingsModal
                    actions={actions}
                    onClose={actions.toggleShowSettingsModal}
                    showSettingsModal={showSettingsModal}
                    theme={theme}
                />
            </View>
        );
    }
}
