import {Platform} from 'react-native';

export const ADMOB_IOS = 'ca-app-pub-8470452053867999/1577918788';
export const ADMOB_ANDROID = 'ca-app-pub-8470452053867999/3738561150';

export const ADMOB_KEY = Platform.select({
    android: ADMOB_ANDROID,
    ios: ADMOB_IOS
});
