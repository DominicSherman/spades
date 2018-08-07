import {
    ADD_ACTUAL,
    ADD_BIDS,
    RESET,
    RESTART,
    SET_IS_BIDS,
    SET_PLAYER_FOUR_BID,
    SET_PLAYER_FOUR_NAME,
    SET_PLAYER_ONE_BID,
    SET_PLAYER_ONE_NAME,
    SET_PLAYER_THREE_BID,
    SET_PLAYER_THREE_NAME,
    SET_PLAYER_TWO_BID,
    SET_PLAYER_TWO_NAME, SET_TEAM_ONE_BAGS,
    SET_TEAM_ONE_SCORE, SET_TEAM_TWO_BAGS,
    SET_TEAM_TWO_SCORE, UNDO_ACTUAL, UNDO_BIDS
} from './action-types';
import {FOUR, ONE, THREE, TWO} from './constants/enum';


export const calculateTeamScore = (rounds, team1, team2) => (dispatch) => {
    let score1 = 0;
    let score2 = 0;
    let bags1 = team1.bags;
    let bags2 = team2.bags;

    console.log('team1.score', team1.score);
    console.log('team2.score', team2.score);

    rounds.forEach((round) => {
        const {playerOne, playerTwo, playerThree, playerFour, team1Actual, team2Actual, team1Bids, team2Bids} = round;

        if (playerOne.actual !== null && playerOne.actual !== undefined) {
            console.log('round', round);

            if ((!playerOne.bid && !playerOne.actual) || (!playerTwo.bid && !playerTwo.actual)) {
                score1 += 100;
            } else if ((!playerOne.bid && playerOne.actual) || (!playerTwo.bid && playerTwo.actual)) {
                score1 -= 100;
            }

            if ((playerOne.bid === 100 && !playerOne.actual) || (playerTwo.bid === 100 && !playerTwo.actual)) {
                score1 += 200;
            } else if ((playerOne.bid === 100 && playerOne.actual) || (playerTwo.bid === 100 && playerTwo.actual)) {
                score1 -= 200;
            }

            if ((!playerThree.bid && !playerThree.actual) || (!playerFour.bid && !playerFour.actual)) {
                score2 += 100;
            } else if ((!playerThree.bid && playerThree.actual) || (!playerFour.bid && playerFour.actual)) {
                score2 -= 100;
            }

            if ((playerThree.bid === 100 && !playerThree.actual) || (playerFour.bid === 100 && !playerFour.actual)) {
                score2 += 200;
            } else if ((playerThree.bid === 100 && playerThree.actual) || (playerFour.bid === 100 && playerFour.actual)) {
                score2 -= 200;
            }

            if (team1Actual >= team1Bids) {
                score1 += (10 * team1Bids) + (team1Actual - team1Bids);
                bags1 += (team1Actual - team1Bids);

                if (team1Bids >= 10 && team1Actual >= 10) {
                    score1 += 100;
                }
            } else {
                score1 -= (10 * team1Bids);

                if (team1Bids >= 10) {
                    score1 -= 100;
                }
            }

            if (team2Actual >= team2Bids) {
                score2 += (10 * team2Bids) + (team2Actual - team2Bids);
                bags2 += (team2Actual - team2Bids);

                if (team2Bids >= 10 && team2Actual >= 10) {
                    score2 += 100;
                }
            } else {
                score2 -= (10 * team2Bids);

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
    console.log('score1', score1);
    console.log('score2', score2);

    dispatch({
        data: score1,
        type: SET_TEAM_ONE_SCORE
    });

    dispatch({
        data: score2,
        type: SET_TEAM_TWO_SCORE
    });

    dispatch({
        data: bags1,
        type: SET_TEAM_ONE_BAGS
    });

    dispatch({
        data: bags2,
        type: SET_TEAM_TWO_BAGS
    });
};

export const submitBids = (roundBids) => (dispatch) => {
    let team1Total = Number(roundBids.player1Bid) + Number(roundBids.player2Bid);
    let team2Total = Number(roundBids.player3Bid) + Number(roundBids.player4Bid);

    if (Number(roundBids.player1Bid) === 100 || Number(roundBids.player2Bid) === 100) {
        team1Total -= 100;
    }

    if (Number(roundBids.player3Bid) === 100 || Number(roundBids.player4Bid) === 100) {
        team2Total -= 100;
    }

    const roundWithTotals = {
        ...roundBids,
        team1Total,
        team2Total
    };

    dispatch({
        data: roundWithTotals,
        type: ADD_BIDS
    });

    dispatch({
        type: RESET
    });

    dispatch({
        data: false,
        type: SET_IS_BIDS
    })
};

export const submitActuals = (roundActual) => (dispatch) => {
    const roundWithTotals = {
        ...roundActual,
        team1Total: Number(roundActual.player1Bid) + Number(roundActual.player2Bid),
        team2Total: Number(roundActual.player3Bid) + Number(roundActual.player4Bid)
    };

    dispatch({
        data: roundWithTotals,
        type: ADD_ACTUAL
    });

    dispatch({
        type: RESET
    });

    dispatch({
        data: true,
        type: SET_IS_BIDS
    });
};

export const setName = (name, player) => (dispatch) => {
    if (player === ONE) {
        dispatch({
            data: name,
            type: SET_PLAYER_ONE_NAME
        });
    } else if (player === TWO) {
        dispatch({
            data: name,
            type: SET_PLAYER_TWO_NAME
        });
    } else if (player === THREE) {
        dispatch({
            data: name,
            type: SET_PLAYER_THREE_NAME
        });
    } else if (player === FOUR) {
        dispatch({
            data: name,
            type: SET_PLAYER_FOUR_NAME
        });
    }
};

export const submitValue = (bid, player) => (dispatch) => {
    if (player === ONE) {
        dispatch({
            data: bid,
            type: SET_PLAYER_ONE_BID
        });
    } else if (player === TWO) {
        dispatch({
            data: bid,
            type: SET_PLAYER_TWO_BID
        });
    } else if (player === THREE) {
        dispatch({
            data: bid,
            type: SET_PLAYER_THREE_BID
        });
    } else if (player === FOUR) {
        dispatch({
            data: bid,
            type: SET_PLAYER_FOUR_BID
        });
    }
};

export const restart = () => (dispatch) => {
    dispatch({type: RESTART})
};

export const undo = (isBids) => (dispatch) => {
    if (isBids) {
        dispatch({type: UNDO_ACTUAL});
        dispatch({
            data: false,
            type: SET_IS_BIDS
        });
    } else {
        dispatch({type: UNDO_BIDS});
        dispatch({
            data: true,
            type: SET_IS_BIDS
        });
    }
};
