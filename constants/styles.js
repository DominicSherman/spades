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
    showHistoryButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: darkerGray,
        borderRadius: 4,
        flexDirection: 'row',
        flex: 1,
        width: '50%',
        justifyContent: 'center'
    },
    buttonWrapper: {
        height: Dimensions.get('screen').width / 4,
        width: Dimensions.get('screen').width / 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: lightGray,
        borderWidth: 1,
        top: 0
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
        flex: 1,
        height: '100%'
    },
    singleColumn: {
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        width: Dimensions.get('screen').width / 4
    },
    centeredRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    currentRoundWrapper: {
        alignItems: 'flex-end',
        flexDirection: 'column',
        height: '70%',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 4,
    },
    currentRoundScoreWrapper: {
        alignItems: 'flex-start',
        width: Dimensions.get('screen').width / 6,
    }
});