import {Dimensions, StyleSheet} from 'react-native';
import {darkerGray, green, lightGray} from './style-variables';

export const styles = StyleSheet.create({
    buttonView: {
        borderWidth: 1,
        borderColor: green,
        height: (Dimensions.get('screen').height / 15) * 2.6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: green
    },
    actualView: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 2
    },
    headerText: {
        fontSize: 22
    },
    headerView: {
        alignItems: 'center',
        height: (Dimensions.get('screen').height / 15),
        justifyContent: 'center',
        paddingBottom: 10
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
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: Dimensions.get('screen').width / 2
    },
    teamView: {
        borderRightColor: darkerGray,
        borderRightWidth: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2,
    },
    scoreView: {
        flexDirection: 'column',
        height: (Dimensions.get('screen').height / 15) * 11
    }
});