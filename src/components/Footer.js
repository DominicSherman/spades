import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {blue, lightGray, mediumGray, white} from '../constants/style-variables';
import Feather from 'react-native-vector-icons/Feather';
import {shadow} from '../constants/shared-styles';

const styles = StyleSheet.create({
    touchable: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: mediumGray,
        fontSize: 20,
        fontWeight: '800',
        position: 'absolute',
        top: 70,
        letterSpacing: 4
    },
    submitWrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    wrapper: {
        bottom: 0,
        width: '100%',
        flex: 0.15,
        backgroundColor: lightGray
    },
    iconBackground: {
        backgroundColor: blue,
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
    grayBox: {
        top: 100,
        position: 'absolute',
        backgroundColor: lightGray,
        height: 40,
        width: Dimensions.get('window').width
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
                <View style={styles.grayBox}/>
            </View>
        );
    }
}