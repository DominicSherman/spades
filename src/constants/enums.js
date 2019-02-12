import {
    blue,
    darkBlue,
    green,
    greenLogo,
    lightBlue,
    lightGray, mediumGray,
    mintGreen,
    orange,
    orangeLogo,
    peach, peach2,
    seaFoam,
    violet,
    violetLogo,
    voltBlue,
    white
} from './style-variables';
import {
    BLUE,
    DARK_ORIGINAL,
    GREEN,
    MINT_GREEN,
    ORANGE,
    ORIGINAL,
    PEACH,
    SEA_FOAM,
    VIOLET,
    VOLT_BLUE
} from './constants';

const BASIC_LIGHT_THEMES = {
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
const BASIC_DARK_THEMES = {
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
        headerLogo: greenLogo,
        leftGradient: [green, green],
        rightGradient: [green, green]
    },
    [MINT_GREEN]: {
        ...BASIC_DARK_THEMES,
        headerFooterBackground: mintGreen
    },
    [ORANGE]: {
        ...BASIC_LIGHT_THEMES,
        headerFooterBackground: orange,
        headerLogo: orangeLogo,
        leftGradient: [orange, orange],
        rightGradient: [orange, orange]
    },
    [ORIGINAL]: {
        ...BASIC_LIGHT_THEMES,
        headerFooterBackground: lightGray,
        headerFooterText: mediumGray,
        headerIcons: lightBlue,
        headerLogo: lightBlue,
        leftGradient: [violet, peach],
        leftScore: peach,
        rightGradient: [lightBlue, blue],
        rightScore: lightBlue
    },
    [PEACH]: {
        ...BASIC_LIGHT_THEMES,
        headerFooterBackground: peach2,
        headerLogo: white,
        leftGradient: [peach2, peach2],
        rightGradient: [peach2, peach2]
    },
    [SEA_FOAM]: {
        ...BASIC_DARK_THEMES,
        headerFooterBackground: seaFoam
    },
    [VIOLET]: {
        ...BASIC_DARK_THEMES,
        headerFooterBackground: violet
    },
    [VOLT_BLUE]: {
        ...BASIC_DARK_THEMES,
        headerFooterBackground: voltBlue
    }
};

