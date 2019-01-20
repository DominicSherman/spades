import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import InstructionsModal from '../modals/InstructionsModal';
import {hyveeRed, lightGray} from '../constants/style-variables';
import HeaderButton from './HeaderButton';

const styles = StyleSheet.create({
    headerView: {
        alignItems: 'center',
        backgroundColor: lightGray,
        height: '12%',
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
        height: '100%',
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
            <SafeAreaView style={styles.headerView}>
                <HeaderButton
                    iconName={'undo'}
                    text={'RESTART'}
                    onPress={actions.restart}
                />
                <View style={styles.imageWrapper}>
                    <Image
                        resizeMethod={'contain'}
                        source={require('../assets/header-logo.png')}
                        style={styles.image}
                    />
                </View>
                <HeaderButton
                    iconName={'arrow-left'}
                    text={'UNDO'}
                    onPress={() => actions.undo(isBids)}
                />
            </SafeAreaView>
        );
    }
}