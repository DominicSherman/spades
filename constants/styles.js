import {Dimensions, StyleSheet} from 'react-native';
import {darkerGray, green, hyveeRed, lightGray} from './style-variables';

export const styles = StyleSheet.create({
    bigButtonView: {
        borderWidth: 1,
        borderColor: green,
        height: (Dimensions.get('screen').height / 15) * 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: green
    },
    buttonWrapper: {
        height: 60,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center'
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
    actualView: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 2
    },
    headerText: {
        fontSize: 22,
    },
    headerView: {
        alignItems: 'center',
        height: (Dimensions.get('screen').height / 15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
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
    rowView: {
        borderBottomColor: lightGray,
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 2
    },
    topRowView: {
        borderBottomColor: darkerGray,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2
    },
    teamView: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2,
    },
    mainView: {
        flexDirection: 'column',
        height: (Dimensions.get('screen').height / 15) * 12
    }
});