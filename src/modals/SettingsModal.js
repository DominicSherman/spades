import React, {Component} from 'react';
import {Modal, SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

import {DARK, LIGHT} from '../constants/enum';
import {getBackgroundColor, getDarkTextColor} from '../services/style-service';
import {black, green, lightGray, mintGreen, seaFoam, voltBlue} from '../constants/style-variables';

export default class SettingsModal extends Component {
    _getStyles = () => StyleSheet.create({
        headerText: {
            color: getDarkTextColor(this.props.theme),
            fontSize: 25,
            fontWeight: '400',
            paddingBottom: '15%'
        },
        headerText2: {
            color: getDarkTextColor(this.props.theme),
            fontSize: 20,
            fontWeight: '400',
            paddingBottom: '3%'
        },
        headerWrapper: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        icon: {
            color: getDarkTextColor(this.props.theme),
            left: '3%'
        },
        optionsWrapper: {
            alignItems: 'flex-start',
            flexDirection: 'column',
            height: '70%',
            justifyContent: 'space-between',
            marginTop: '5%'
        },
        optionWrapper: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '29%'
        },
        secondWrapper: {
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: '10%'
        },
        settingsWrapper: {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        switchWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '50%'
        },
        text: {
            color: getDarkTextColor(this.props.theme),
            fontSize: 20,
            fontWeight: '200'
        },
        view: {
            flexDirection: 'column',
            height: '70%',
            padding: '3%'
        },
        wrapper: {
            backgroundColor: getBackgroundColor(this.props.theme),
            height: '100%',
            paddingLeft: '1%'
        }
    });

    _getIconName = (color) => this.props.theme.color === color ? 'check-circle' : 'circle';

    _getIconColor = (color) => this.props.theme.color === color ? green : lightGray;

    render() {
        const {actions, showSettingsModal, onClose, theme} = this.props;
        const styles = this._getStyles();

        return (
            <Modal
                animationType={'slide'}
                visible={showSettingsModal}
            >
                <SafeAreaView style={styles.wrapper}>
                    <EvilIcons
                        name={'close'}
                        onPress={onClose}
                        size={30}
                        style={styles.icon}
                    />
                    <View
                        style={styles.view}
                    >
                        <View style={styles.headerWrapper}>
                            <Text style={styles.headerText}>{'Settings'}</Text>
                        </View>
                        <View style={styles.settingsWrapper}>
                            <Text style={styles.headerText2}>{'Theme'}</Text>
                            <View style={styles.switchWrapper}>
                                <Text style={styles.text}>{'Dark'}</Text>
                                <Switch
                                    onValueChange={(value) => value ? actions.setTheme(LIGHT) : actions.setTheme(DARK)}
                                    value={theme.background === LIGHT}
                                />
                                <Text style={styles.text}>{'Light'}</Text>
                            </View>
                        </View>
                        <View style={styles.secondWrapper}>
                            <Text style={styles.headerText2}>{'Color'}</Text>
                            <View style={styles.optionsWrapper}>
                                <Touchable onPress={() => actions.setColor(lightGray)}>
                                    <View style={styles.optionWrapper}>
                                        <Feather
                                            color={this._getIconColor(lightGray)}
                                            name={this._getIconName(lightGray)}
                                            size={20}
                                        />
                                        <Text style={[styles.text, {paddingLeft: '10%'}]}>{'Gray'}</Text>
                                    </View>
                                </Touchable>
                                <Touchable onPress={() => actions.setColor(black)}>
                                    <View style={styles.optionWrapper}>
                                        <Feather
                                            color={this._getIconColor(black)}
                                            name={this._getIconName(black)}
                                            size={20}
                                        />
                                        <Text style={[styles.text, {paddingLeft: '10%'}]}>{'Black'}</Text>
                                    </View>
                                </Touchable>
                                <Touchable onPress={() => actions.setColor(seaFoam)}>
                                    <View style={styles.optionWrapper}>
                                        <Feather
                                            color={this._getIconColor(seaFoam)}
                                            name={this._getIconName(seaFoam)}
                                            size={20}
                                        />
                                        <Text style={[styles.text, {paddingLeft: '10%'}]}>{'Sea Foam'}</Text>
                                    </View>
                                </Touchable>
                                <Touchable onPress={() => actions.setColor(mintGreen)}>
                                    <View style={styles.optionWrapper}>
                                        <Feather
                                            color={this._getIconColor(mintGreen)}
                                            name={this._getIconName(mintGreen)}
                                            size={20}
                                        />
                                        <Text style={[styles.text, {paddingLeft: '10%'}]}>{'Mint Green'}</Text>
                                    </View>
                                </Touchable>
                                <Touchable onPress={() => actions.setColor(voltBlue)}>
                                    <View style={styles.optionWrapper}>
                                        <Feather
                                            color={this._getIconColor(voltBlue)}
                                            name={this._getIconName(voltBlue)}
                                            size={20}
                                        />
                                        <Text style={[styles.text, {paddingLeft: '10%'}]}>{'Volt Blue'}</Text>
                                    </View>
                                </Touchable>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }
}
