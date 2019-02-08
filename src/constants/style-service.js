import {
    blue,
    darkBlue,
    lightBlue,
    lightGray,
    mediumGray,
    peach,
    violet,
    voltBlue,
    white
} from './style-variables';
import {LIGHT} from './enum';

const isLight = (theme) => theme === LIGHT;

export const getHeaderFooterColor = (theme) => isLight(theme) ? lightGray : voltBlue;

export const getBackgroundColor = (theme) => isLight(theme) ? white : darkBlue;

export const getHeaderFooterTextColor = (theme) => isLight(theme) ? mediumGray : white;

export const getShadowColor = (theme) => isLight(theme) ? darkBlue : white;

export const getBlueOrWhiteGradient = (theme) => isLight(theme) ? [lightBlue, blue] : [white, white];

export const getVioletOrWhiteGradient = (theme) => isLight(theme) ? [violet, peach] : [white, white];

export const getIconColor = (theme) => isLight(theme) ? lightBlue : darkBlue;

export const getHeaderLogo = (theme) => isLight(theme) ? require(`./assets/header-logo.png`) : require(`./assets/header-logo-dark.png`);

export const getUndoLogo = (theme) => isLight(theme) ? require(`./assets/undo.png`) : require(`./assets/undo-dark.png`);

export const getPlayerTextColor = (theme) => isLight(theme) ? white : darkBlue;

export const getPeachOrWhite = (theme) => isLight(theme) ? peach : white;

export const getLightBlueOrWhite = (theme) => isLight(theme) ? lightBlue : white;