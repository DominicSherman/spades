import {StyleSheet} from 'react-native';
import {getShadowColor} from '../theme-service';

export const sharedStyles = StyleSheet.create({

});

export const shadow = {
    shadowColor: getShadowColor(),
    shadowOffset: {
        width: 2,
        height: 2
    },
    shadowOpacity: .15
};