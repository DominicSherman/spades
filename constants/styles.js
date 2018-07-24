import {Dimensions, StyleSheet} from 'react-native';
import {black, darkerGray, green, hyveeRed, lightGray} from './style-variables';

export const styles = StyleSheet.create({
    bigButtonView: {
        borderWidth: 1,
        borderColor: green,
        height: (Dimensions.get('screen').height / 15) * 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: green
    },
    smallButtonView: {
        borderWidth: .5,
        borderColor: hyveeRed,
        borderRadius: 4,
        height: Dimensions.get('screen').height / 25,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
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
        height: (Dimensions.get('screen').height / 15) * 10.5
    }
});