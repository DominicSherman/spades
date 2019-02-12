import {darkBlue, darkFont, lightBlue, lightFont, mediumGray, peach, white} from '../constants/style-variables';
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
import {COLOR_THEMES} from '../constants/enums';

const isLight = (theme) => theme && theme.background === LIGHT;

const isOriginal = (theme) => theme && theme.color === ORIGINAL;

export const getColorsForTheme = (theme) =>
    isLight(theme) ?
        [ORIGINAL, BLUE, ORANGE, GREEN]
        :
        [DARK_ORIGINAL, VOLT_BLUE, MINT_GREEN, SEA_FOAM];

export const setDefault = (theme, setColor) => isLight(theme) ? setColor(ORIGINAL) : setColor(DARK_ORIGINAL);

export const getShadowColor = (theme) => isLight(theme) ? darkBlue : white;

export const getBackgroundColor = (theme) => isLight(theme) ? white : darkBlue;

export const getPlayerTextColor = (theme) => isLight(theme) ? white : darkBlue;

export const getLightTextColor = (theme) => isLight(theme) ? lightFont : white;

export const getDarkTextColor = (theme) => isLight(theme) ? darkFont : white;

export const getSubmitArrowColor = (theme) => isOriginal(theme) ? white : darkBlue;

export const getSubmitTextColor = (theme) => isOriginal(theme) ? mediumGray : darkBlue;

export const getFooterIconColor = (theme) => isOriginal(theme) ? lightBlue : white;

export const getHeaderFooterColor = (theme) => COLOR_THEMES[theme.color].headerFooterBackground;

export const getHeaderFooterTextColor = (theme) => COLOR_THEMES[theme.color].headerFooterText;

export const getHeaderIconColor = (theme) => COLOR_THEMES[theme.color].headerIcons;

export const getHeaderLogoColor = (theme) => COLOR_THEMES[theme.color].headerLogo;

export const getRightTeamGradient = (theme) => COLOR_THEMES[theme.color].rightGradient;

export const getLeftTeamGradient = (theme) => COLOR_THEMES[theme.color].leftGradient;

export const getLeftScoreColor = (theme) => COLOR_THEMES[theme.color].leftScore;

export const getRightScoreColor = (theme) => COLOR_THEMES[theme.color].rightScore;

export const getPlayerDividerColor = (theme) => COLOR_THEMES[theme.color].playerDivider;
