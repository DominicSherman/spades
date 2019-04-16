import firebase from 'react-native-firebase';

const Analytics = firebase.analytics();

export const enableAnalytics = () => Analytics.setAnalyticsCollectionEnabled(true);

export const logAnalyticsEvent = (event, params) => Analytics.logEvent(event, params);
