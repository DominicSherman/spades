import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {blue, lightGray, mediumGray, white} from '../constants/style-variables';
import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    touchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: (Dimensions.get('screen').height / 15) * 2,
        backgroundColor: lightGray
    },
    text: {
        color: mediumGray,
        fontSize: 20,
        fontWeight: '800',
        position: 'absolute',
        bottom: 20,
        letterSpacing: 4
    },
    submitWrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    wrapper: {
        bottom: -35,
        width: '100%'
    },
    iconBackground: {
        backgroundColor: blue,
        bottom: 60,
        transform: [{rotate: '45deg'}],
        width: 60,
        height: 60,
        borderRadius: 4,
        position: 'absolute'
    },
    icon: {
        bottom: 60,
        position: 'absolute'
    }
});

export default class Footer extends Component {
    render() {
        const {actions, isBids} = this.props;
        const submitText = isBids ? 'SUBMIT BIDS' : 'SUBMIT RESULTS';

        return (
            <View style={styles.wrapper}>
                <Touchable
                    onPress={actions.submit}
                    style={styles.touchable}
                >
                    <View style={styles.submitWrapper}>
                        <View style={styles.iconBackground}/>
                        <Feather
                            color={white}
                            name={'arrow-up'}
                            size={70}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>{submitText}</Text>
                    </View>
                </Touchable>
            </View>
        );
    }
}