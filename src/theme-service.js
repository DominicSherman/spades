import {theme} from './App';
import {darkBlue, blue, lightBlue, lightGray, mediumGray, peach, white} from './constants/style-variables';
import {LIGHT} from './constants/enum';

const isLight = () => theme === LIGHT;

export const getHeaderFooterColor = () => isLight() ? lightGray : peach;

export const getHeaderFooterTextColor = () => isLight() ? mediumGray : white;

export const getBackgroundColor = () => isLight() ? white : darkBlue;

export const getShadowColor = () => isLight() ? darkBlue : white;

export const getButtonGradient = () => isLight() ? [lightBlue, blue] : [white, white];

export const getIconColor = () => isLight() ? lightBlue : white;