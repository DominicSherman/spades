import React, {Component} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import LinearGradient from 'react-native-linear-gradient';
import {blue, lightBlue, lightGray, mediumGray, white} from '../constants/style-variables';
import Feather from 'react-native-vector-icons/Feather';
import {shadow} from '../constants/shared-styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InstructionsModal from '../modals/InstructionsModal';
import {getBackgroundColor, getButtonGradient, getHeaderFooterColor, getIconColor} from '../theme-service';
import {DARK, LIGHT} from '../constants/enum';

export default class Footer extends Component {
    _getStyles = () => StyleSheet.create({
        touchable: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        text: {
            color: getBackgroundColor(this.props.theme),
            fontSize: 20,
            fontWeight: '800',
            position: 'absolute',
            top: 70,
            fontFamily: 'ArialRoundedMTBold'
        },
        submitWrapper: {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        wrapper: {
            bottom: 0,
            width: '50%',
            flex: 0.15,
            backgroundColor: getHeaderFooterColor(this.props.theme),
            flexDirection: 'row',
            justifyContent: 'space-between'
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
        infoWrapper:{
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.5
        }
    });

    render() {
        const {actions, isBids, showInfoModal, theme} = this.props;
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
                    />
                </Touchable>
                <Touchable
                    onPress={actions.submit}
                    style={styles.touchable}
                >
                    <View style={styles.submitWrapper}>
                        <View style={styles.diamond}/>
                        <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={getButtonGradient(theme)}
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
                <Switch
                    onValueChange={(value) => value ? actions.setTheme(LIGHT) : actions.setTheme(DARK)}
                    value={theme === LIGHT}
                />
                <InstructionsModal
                    showInfoModal={showInfoModal}
                    onClose={actions.toggleShowInfoModal}
                />
            </View>
        );
    }
}