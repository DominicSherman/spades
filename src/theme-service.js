import {darkBlue, blue, lightBlue, lightGray, mediumGray, peach, white} from './constants/style-variables';
import {LIGHT} from './constants/enum';

const isLight = (theme) => theme === LIGHT;

export const getHeaderFooterColor = (theme) => isLight(theme) ? lightGray : peach;

export const getHeaderFooterTextColor = (theme) => isLight(theme) ? mediumGray : white;

export const getBackgroundColor = (theme) => isLight(theme) ? white : darkBlue;

export const getShadowColor = (theme) => isLight(theme) ? darkBlue : white;

export const getButtonGradient = (theme) => isLight(theme) ? [lightBlue, blue] : [white, white];

export const getIconColor = (theme) => isLight(theme) ? lightBlue : white;

export const getHeaderLogo = (theme) => isLight(theme) ? require(`../assets/header-logo.png`) : require(`../assets/header-logo-dark.png`);

export const getUndoLogo = (theme) => isLight(theme) ? require(`../assets/undo.png`) : require(`../assets/undo-dark.png`);