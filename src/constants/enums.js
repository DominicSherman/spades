import {
    blue,
    darkBlue,
    green,
    lightBlue,
    lightGray,
    mediumGray,
    mintGreen,
    orange, peach,
    seaFoam, violet,
    voltBlue,
    white
} from './style-variables';
import {BLUE, DARK_ORIGINAL, GREEN, MINT_GREEN, ORANGE, ORIGINAL, SEA_FOAM, VOLT_BLUE} from './constants';

export const HEADER_FOOTER_COLOR = {
    [ORIGINAL]: lightGray,
    [BLUE]: blue,
    [ORANGE]: orange,
    [GREEN]: green,
    [DARK_ORIGINAL]: blue,
    [VOLT_BLUE]: voltBlue,
    [MINT_GREEN]: mintGreen,
    [SEA_FOAM]: seaFoam
};

export const HEADER_FOOTER_TEXT_COLOR = {
    [ORIGINAL]: mediumGray,
    [BLUE]: white,
    [ORANGE]: white,
    [GREEN]: white,
    [DARK_ORIGINAL]: white,
    [VOLT_BLUE]: white,
    [MINT_GREEN]: white,
    [SEA_FOAM]: white
};

export const HEADER_LOGO = {
    [ORIGINAL]: require('../assets/header-logo-blue.png'),
    [BLUE]: require('../assets/header-logo-violet.png'),
    [ORANGE]: require('../assets/header-logo-orange.png'),
    [GREEN]: require('../assets/header-logo-green.png'),
    [DARK_ORIGINAL]: require('../assets/header-logo-dark.png'),
    [VOLT_BLUE]: require('../assets/header-logo-dark.png'),
    [MINT_GREEN]: require('../assets/header-logo-dark.png'),
    [SEA_FOAM]: require('../assets/header-logo-dark.png')
};

export const ICON_COLOR = {
    [ORIGINAL]: lightBlue,
    [BLUE]: white,
    [ORANGE]: white,
    [GREEN]: white,
    [DARK_ORIGINAL]: darkBlue,
    [VOLT_BLUE]: darkBlue,
    [MINT_GREEN]: darkBlue,
    [SEA_FOAM]: darkBlue
};

export const RIGHT_TEAM_GRADIENT = {
    [ORIGINAL]: [lightBlue, blue],
    [BLUE]: [blue, blue],
    [ORANGE]: [orange, orange],
    [GREEN]: [green, green],
    [DARK_ORIGINAL]: [white, white],
    [VOLT_BLUE]: [white, white],
    [MINT_GREEN]: [white, white],
    [SEA_FOAM]: [white, white]
};

export const LEFT_TEAM_GRADIENT = {
    ...RIGHT_TEAM_GRADIENT,
    [ORIGINAL]: [violet, peach]
};

export const PLAYER_DIVIDER_COLOR = {
    ...ICON_COLOR,
    [ORIGINAL]: white
};
