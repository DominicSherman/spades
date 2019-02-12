import {getTeamTotalBids} from '../services/score-service';

import {TEAM_ONE, TEAM_TWO} from './constants';

export const isBidBlindNil = (bid) => Number(bid) === 100;

export const isNil = (value) => Number(value) === 0;

export const teamOneHasBidBlindNil = (currRound) => isBidBlindNil(currRound.player1Bid) || isBidBlindNil(currRound.player2Bid);

export const teamTwoHasBidBlindNil = (currRound) => isBidBlindNil(currRound.player3Bid) || isBidBlindNil(currRound.player4Bid);

export const teamHasBidBlindNil = (currRound, team) =>
    team === TEAM_ONE && teamOneHasBidBlindNil(currRound) ||
    team === TEAM_TWO && teamTwoHasBidBlindNil(currRound);

export const bidsAddUpTo13 = (currRound) => getTeamTotalBids(currRound, TEAM_ONE) + getTeamTotalBids(currRound, TEAM_TWO) === 13;

export const roundHasResults = (round) => round.playerOne.actual !== null && round.playerOne.actual !== undefined;

export const getScoreForNil = (player) => isNil(player.actual) ? 100 : -100;

export const getScoreForBlindNil = (player) => isNil(player.actual) ? 200 : -200;
