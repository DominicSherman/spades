import React, {Component} from 'react';
import {styles} from '../constants/styles';
import {darkFontStyles, redFontStyles} from '../constants/font-styles';
import {Text, TouchableOpacity, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class Header extends Component {
    render() {
        const {actions, isBids} = this.props;

        return (
            <View style={styles.headerView}>
                <TouchableOpacity
                    onPress={() =>actions.restart()}
                    style={styles.smallButtonView}
                >
                    <Text style={[redFontStyles.light, {fontSize: 16}]}>{'Restart'}</Text>
                </TouchableOpacity>
                <Text style={[darkFontStyles.light, styles.headerText]}>{'Spades'}</Text>
                <TouchableOpacity
                    onPress={() =>actions.undo(isBids)}
                    style={styles.iconView}
                >
                    <EvilIcons
                        name={'undo'}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}