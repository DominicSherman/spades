import React from 'react';
import {darkFontStyles, redFontStyles} from '../constants/font-styles';
import {Alert, Text, TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InstructionsModal from '../modals/InstructionsModal';
import {hyveeRed} from '../constants/style-variables';

const styles = StyleSheet.create({
    headerView: {
        alignItems: 'center',
        height: (Dimensions.get('screen').height / 15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
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
    }
});

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };
    }

    toggleModalVisible = () => this.setState((prevProps) => ({modalVisible: !prevProps.modalVisible}));

    render() {
        const {actions, isBids} = this.props;

        return (
            <View style={styles.headerView}>
                <TouchableOpacity
                    onPress={() =>
                        Alert.alert(
                            'Are you sure you want to restart?',
                            'You cannot undo this',
                            [
                                {text: 'Cancel'},
                                {
                                    onPress: () => actions.restart(),
                                    text: 'Yes'
                                }
                            ]
                        )
                    }
                    style={styles.smallButtonView}
                >
                    <Text style={[redFontStyles.light, {fontSize: 16}]}>{'Restart'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleModalVisible}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={[darkFontStyles.light, styles.headerText]}>{'Spades'}</Text>
                        <EvilIcons
                            name={'question'}
                            size={30}
                            color={'red'}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => actions.undo(isBids)}
                    style={styles.iconView}
                >
                    <EvilIcons
                        name={'undo'}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <InstructionsModal
                    modalVisible={this.state.modalVisible}
                    toggleModal={this.toggleModalVisible}
                />
            </View>
        );
    }
}