import React, {Component} from 'react';
import {Text} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {darkFontStyles} from '../../constants/font-styles';
import {lightGray} from '../../constants/style-variables';

export default class HideShowButton extends Component {
    _getText = () => this.props.shouldShowHistory ? 'Hide History' : 'Show History';

    render() {
        const {actions: {toggleShowHistory}} = this.props;
        return (
            <Touchable
                onPress={toggleShowHistory}
                style={{
                    alignItems: 'center',
                    bottom: -35,
                    borderWidth: 1,
                    borderColor: 'black',
                    flexDirection: 'row',
                    height: 50,
                    width: '100%',
                    justifyContent: 'center',
                    backgroundColor: lightGray
                }}
            >
                <Text style={darkFontStyles.light}>{this._getText()}</Text>
            </Touchable>
        );
    }
}