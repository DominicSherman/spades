import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {mediumGray} from '../constants/style-variables';

const styles = StyleSheet.create({
    touchable: {
        paddingRight: '3%'
    },
    text: {
        color: mediumGray,
        fontSize: 12,
        fontWeight: '800',
        fontFamily: 'ArialRoundedMTBold'
    },
    wrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '70%',
        width: 60
    },
    image: {
        height: '100%',
        width: '100%'
    },
    imageWrapper: {
        height: '100%',
        width: '50%'
    }
});

export default class UndoButton extends Component {
    render() {
        const {actions, isBids} = this.props;

        return (
            <Touchable
                onPress={() => actions.undo(isBids)}
                style={styles.touchable}
            >
                <View style={styles.wrapper}>
                    <View style={styles.imageWrapper}>
                        <Image
                            resizeMode={'contain'}
                            source={require('../../assets/undo.png')}
                            style={styles.image}
                        />
                    </View>
                    <Text style={styles.text}>{'UNDO'}</Text>
                </View>
            </Touchable>
        );
    }
}