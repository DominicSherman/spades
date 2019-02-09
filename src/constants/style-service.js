import {blue, darkBlue, darkFont, lightBlue, lightFont, mediumGray, peach, violet, white} from './style-variables';
import {LIGHT} from './enum';

const isLight = (theme) => theme && theme.background === LIGHT;

export const getHeaderFooterColor = (theme) => theme.color;

export const getBackgroundColor = (theme) => isLight(theme) ? white : darkBlue;

export const getShadowColor = (theme) => isLight(theme) ? darkBlue : white;

export const getIconColor = (theme) => isLight(theme) ? lightBlue : darkBlue;

export const getBlueOrWhiteGradient = (theme) => isLight(theme) ? [lightBlue, blue] : [white, white];

export const getVioletOrWhiteGradient = (theme) => isLight(theme) ? [violet, peach] : [white, white];

export const getHeaderLogo = (theme) => isLight(theme) ? require('../assets/header-logo.png') : require('../assets/header-logo-dark.png');

export const getUndoLogo = (theme) => isLight(theme) ? require('../assets/undo.png') : require('../assets/undo-dark.png');

export const getHeaderFooterTextColor = (theme) => isLight(theme) ? mediumGray : white;

export const getPlayerTextColor = (theme) => isLight(theme) ? white : darkBlue;

export const getPeachOrWhite = (theme) => isLight(theme) ? peach : white;

export const getLightBlueOrWhite = (theme) => isLight(theme) ? lightBlue : white;

export const getLightTextColor = (theme) => isLight(theme) ? lightFont : white;

export const getDarkTextColor = (theme) => isLight(theme) ? darkFont : white;
