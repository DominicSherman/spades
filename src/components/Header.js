import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {hyveeRed, lightGray} from '../constants/style-variables';
import RestartButton from './RestartButton';
import UndoButton from './UndoButton';

const styles = StyleSheet.create({
    headerView: {
        alignItems: 'center',
        backgroundColor: lightGray,
        height: '14%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    smallButtonView: {
        borderWidth: .5,
        borderColor: hyveeRed,
        borderRadius: 4,
        height: 30,
        width: 75,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 22,
    },
    iconView: {
        height: 30,
        width: 75,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    icon: {
        color: hyveeRed,
        fontSize: 40
    },
    image: {
        height: '100%',
        width: '100%'
    },
    imageWrapper: {
        height: '80%',
        width: '20%'
    }
});

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };
    }

    render() {
        const {actions, isBids} = this.props;

        return (
            <View style={styles.headerView}>
                <RestartButton
                    actions={actions}
                />
                <View style={styles.imageWrapper}>
                    <Image
                        resizeMode={'contain'}
                        source={require('../assets/header-logo.png')}
                        style={styles.image}
                    />
                </View>
                <UndoButton
                    actions={actions}
                    isBids={isBids}
                />
            </View>
        );
    }
}