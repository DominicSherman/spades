import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {darkFontStyles} from '../../constants/font-styles';
import {styles} from '../../constants/styles';

export default class HideShowButton extends Component {
    render() {
        const {actions: {toggleShowHistory}} = this.props;
        return (
            <View style={{
                alignItems: 'center',
                flex: 0.3,
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%'
            }}>
                <Touchable
                    onPress={toggleShowHistory}
                    style={styles.showHistoryButton}
                >
                    <Text style={darkFontStyles.light}>{'Show History'}</Text>
                </Touchable>
            </View>
        );
    }
}