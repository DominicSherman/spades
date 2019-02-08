import React, {Component} from 'react';
import {darkFontStyles, lightFontStyles} from '../constants/font-styles';
import {Modal, SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {DARK, LIGHT} from '../constants/enum';
import {getBackgroundColor} from '../constants/style-service';

export default class SettingsModal extends Component {
    _getStyles = () => StyleSheet.create({
        wrapper: {
            paddingLeft: '1%',
            backgroundColor: getBackgroundColor(this.props.theme)
        },
        icon: {
            left: '3%'
        },
        view: {
            height: '100%',
            padding: '3%'
        },
        headerWrapper: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        headerText: {
            fontSize: 25,
            paddingBottom: '15%'
        },
        settingsWrapper: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '10%',
        },
        switchWrapper: {
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-evenly'
        }
    });

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
                        onPress={onClose}
                        name={'close'}
                        size={30}
                        style={styles.icon}
                    />
                    <View
                        style={styles.view}
                    >
                        <View style={styles.headerWrapper}>
                            <Text style={[darkFontStyles.regular, styles.headerText]}>{'Settings'}</Text>
                        </View>
                        <View style={styles.settingsWrapper}>
                            <Text style={lightFontStyles.regular}>{'Theme'}</Text>
                            <View style={styles.switchWrapper}>
                                <Text style={lightFontStyles.light}>{'Dark'}</Text>
                                <Switch
                                    onValueChange={(value) => value ? actions.setTheme(LIGHT) : actions.setTheme(DARK)}
                                    value={theme === LIGHT}
                                />
                                <Text style={lightFontStyles.light}>{'Light'}</Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }
}