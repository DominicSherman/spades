import {
    blue,
    darkBlue,
    darkFont,
    lightBlue,
    lightFont,
    mediumGray,
    peach,
    violet,
    white
} from '../constants/style-variables';
import {
    BLUE,
    DARK_ORIGINAL,
    GREEN,
    LIGHT,
    MINT_GREEN,
    ORANGE,
    ORIGINAL,
    SEA_FOAM,
    VOLT_BLUE
} from '../constants/constants';
import {
    HEADER_FOOTER_COLOR,
    HEADER_FOOTER_TEXT_COLOR,
    HEADER_LOGO,
    ICON_COLOR,
    RIGHT_TEAM_GRADIENT, LEFT_TEAM_GRADIENT, PLAYER_DIVIDER_COLOR
} from '../constants/enums';

const isLight = (theme) => theme && theme.background === LIGHT;

export const getColorsForTheme = (theme) =>
    isLight(theme) ?
        [ORIGINAL, BLUE, ORANGE, GREEN]
        :
        [DARK_ORIGINAL, VOLT_BLUE, MINT_GREEN, SEA_FOAM];

export const setDefault = (theme, setColor) => isLight(theme) ? setColor(ORIGINAL) : setColor(DARK_ORIGINAL);

export const getHeaderFooterColor = (theme) => HEADER_FOOTER_COLOR[theme.color];

export const getBackgroundColor = (theme) => isLight(theme) ? white : darkBlue;

export const getShadowColor = (theme) => isLight(theme) ? darkBlue : white;

export const getIconColor = (theme) => ICON_COLOR[theme.color];

export const getRightTeamGradient = (theme) => RIGHT_TEAM_GRADIENT[theme.color];

export const getLeftTeamGradient = (theme) => LEFT_TEAM_GRADIENT[theme.color];

export const getHeaderLogo = (theme) => HEADER_LOGO[theme.color];

export const getUndoLogo = (theme) => isLight(theme) ? require('../assets/undo-blue.png') : require('../assets/undo-dark.png');

export const getHeaderFooterTextColor = (theme) => HEADER_FOOTER_TEXT_COLOR[theme.color];

export const getPlayerTextColor = (theme) => isLight(theme) ? white : darkBlue;

export const getPeachOrWhite = (theme) => isLight(theme) ? peach : white;

export const getLightBlueOrWhite = (theme) => isLight(theme) ? lightBlue : white;

export const getLightTextColor = (theme) => isLight(theme) ? lightFont : white;

export const getDarkTextColor = (theme) => isLight(theme) ? darkFont : white;

export const getPlayerDividerColor = (theme) => PLAYER_DIVIDER_COLOR[theme.color];
