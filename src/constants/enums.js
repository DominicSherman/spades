import {
    blue,
    darkBlue,
    green,
    greenLogo,
    lightBlue,
    lightGray,
    mintGreen,
    orange,
    orangeLogo,
    peach,
    seaFoam,
    violet,
    violetLogo,
    voltBlue,
    white
} from './style-variables';
import {BLUE, DARK_ORIGINAL, GREEN, MINT_GREEN, ORANGE, ORIGINAL, SEA_FOAM, VOLT_BLUE} from './constants';

export const BASIC_LIGHT_THEMES = {
    headerFooterBackground: blue,
    headerFooterText: white,
    headerIcons: white,
    headerLogo: white,
    leftGradient: [blue, blue],
    leftScore: darkBlue,
    playerDivider: white,
    rightGradient: [blue, blue],
    rightScore: darkBlue
};
export const BASIC_DARK_THEMES = {
    headerFooterBackground: blue,
    headerFooterText: white,
    headerIcons: darkBlue,
    headerLogo: darkBlue,
    leftGradient: [white, white],
    leftScore: white,
    playerDivider: darkBlue,
    rightGradient: [white, white],
    rightScore: white
};

export const COLOR_THEMES = {
    [BLUE]: {
        ...BASIC_LIGHT_THEMES,
        headerFooterBackground: blue,
        headerLogo: violetLogo
    },
    [DARK_ORIGINAL]: BASIC_DARK_THEMES,
    [GREEN]: {
        ...BASIC_LIGHT_THEMES,
        headerFooterBackground: green,
        headerLogo: greenLogo
    },
    [MINT_GREEN]: {
        ...BASIC_DARK_THEMES,
        headerFooterBackground: mintGreen
    },
    [ORANGE]: {
        ...BASIC_LIGHT_THEMES,
        headerFooterBackground: orange,
        headerLogo: orangeLogo
    },
    [ORIGINAL]: {
        ...BASIC_LIGHT_THEMES,
        headerFooterBackground: lightGray,
        headerFooterText: white,
        headerIcons: lightBlue,
        headerLogo: lightBlue,
        leftGradient: [violet, peach],
        leftScore: peach,
        rightGradient: [lightBlue, blue],
        rightScore: lightBlue
    },
    [SEA_FOAM]: {
        ...BASIC_DARK_THEMES,
        headerFooterBackground: seaFoam
    },
    [VOLT_BLUE]: {
        ...BASIC_DARK_THEMES,
        headerFooterBackground: voltBlue
    }
};

