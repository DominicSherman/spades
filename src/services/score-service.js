import {PLAYER_FOUR, PLAYER_ONE, PLAYER_THREE, PLAYER_TWO, TEAM_ONE, TEAM_TWO} from '../constants/enum';
import {
    SET_PLAYER_FOUR_BID,
    SET_PLAYER_FOUR_NAME,
    SET_PLAYER_ONE_BID,
    SET_PLAYER_ONE_NAME,
    SET_PLAYER_THREE_BID,
    SET_PLAYER_THREE_NAME,
    SET_PLAYER_TWO_BID,
    SET_PLAYER_TWO_NAME
} from '../redux/action-types';

export const getSetNameAction = {
    [PLAYER_FOUR]: SET_PLAYER_FOUR_NAME,
    [PLAYER_ONE]: SET_PLAYER_ONE_NAME,
    [PLAYER_THREE]: SET_PLAYER_THREE_NAME,
    [PLAYER_TWO]: SET_PLAYER_TWO_NAME
};

export const getSetBidAction = {
    [PLAYER_FOUR]: SET_PLAYER_FOUR_BID,
    [PLAYER_ONE]: SET_PLAYER_ONE_BID,
    [PLAYER_THREE]: SET_PLAYER_THREE_BID,
    [PLAYER_TWO]: SET_PLAYER_TWO_BID
};

export const isBlindNil = (bid) => Number(bid) === 100;

export const teamHasBlindNil = (currRound, team) => {
    if (team === TEAM_ONE) {
        if (isBlindNil(currRound.player1Bid) || isBlindNil(currRound.player2Bid)) {
            return true;
        }
    } else if (isBlindNil(currRound.player3Bid) || isBlindNil(currRound.player4Bid)) {
        return true;
    }

    return false;
};

export const getTeamTotal = (currRound, team) => {
    let teamTotal;

    if (team === TEAM_ONE) {
        teamTotal = Number(currRound.player1Bid) + Number(currRound.player2Bid);

        if (teamHasBlindNil(currRound, TEAM_ONE)) {
            teamTotal -= 100;
        }
    } else {
        teamTotal = Number(currRound.player3Bid) + Number(currRound.player4Bid);

        if (teamHasBlindNil(currRound, TEAM_TWO)) {
            teamTotal -= 100;
        }
    }

    return teamTotal;
};

export const calculateScore = (rounds) => {
    let score1 = 0,
        score2 = 0,
        bags1 = 0,
        bags2 = 0;

    rounds.forEach((round) => {
        const {playerOne, playerTwo, playerThree, playerFour, team1Actual, team2Actual, team1Bids, team2Bids} = round;

        if (playerOne.actual !== null && playerOne.actual !== undefined) {
            if (!playerOne.bid && !playerOne.actual || !playerTwo.bid && !playerTwo.actual) {
                score1 += 100;
            } else if (!playerOne.bid && playerOne.actual || !playerTwo.bid && playerTwo.actual) {
                score1 -= 100;
            }

            if (isBlindNil(playerOne.bid) && !playerOne.actual || isBlindNil(playerTwo.bid) && !playerTwo.actual) {
                score1 += 200;
            } else if (isBlindNil(playerOne.bid) && playerOne.actual || isBlindNil(playerTwo.bid) && playerTwo.actual) {
                score1 -= 200;
            }

            if (!playerThree.bid && !playerThree.actual || !playerFour.bid && !playerFour.actual) {
                score2 += 100;
            } else if (!playerThree.bid && playerThree.actual || !playerFour.bid && playerFour.actual) {
                score2 -= 100;
            }

            if (playerThree.bid === 100 && !playerThree.actual || playerFour.bid === 100 && !playerFour.actual) {
                score2 += 200;
            } else if (playerThree.bid === 100 && playerThree.actual || playerFour.bid === 100 && playerFour.actual) {
                score2 -= 200;
            }

            if (team1Actual >= team1Bids) {
                score1 += 10 * team1Bids + (team1Actual - team1Bids);
                bags1 += team1Actual - team1Bids;

                if (team1Bids >= 10 && team1Actual >= 10) {
                    score1 += 100;
                }
            } else {
                score1 -= 10 * team1Bids;

                if (team1Bids >= 10) {
                    score1 -= 100;
                }
            }

            if (team2Actual >= team2Bids) {
                score2 += 10 * team2Bids + (team2Actual - team2Bids);
                bags2 += team2Actual - team2Bids;

                if (team2Bids >= 10 && team2Actual >= 10) {
                    score2 += 100;
                }
            } else {
                score2 -= 10 * team2Bids;

                if (team2Bids >= 10) {
                    score2 -= 100;
                }
            }

            if (bags1 >= 10) {
                bags1 = bags1 - 10;
                score1 -= 100;
            }

            if (bags2 >= 10) {
                bags2 = bags2 - 10;
                score2 -= 100;
            }
        }
    });

    return {
        bags1,
        bags2,
        score1,
        score2
    };
};
