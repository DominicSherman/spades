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

    rounds.forEach((round) => {
        const {playerOne, playerTwo, playerThree, playerFour, team1Bids, team1Actual, team2Bids, team2Actual} = round;

        if (playerOne.actual !== null && playerOne.actual !== undefined) {

            if ((!playerOne.bid && !playerOne.actual) || (!playerTwo.bid && !playerTwo.actual)) {
                score1 += 100;
            } else if ((!playerOne.bid && playerOne.actual) || (!playerTwo.bid && playerTwo.actual)) {
                score1 -= 100;
            }

            if ((!playerThree.bid && !playerThree.actual) || (!playerFour.bid && !playerFour.actual)) {
                score2 += 100;
            } else if ((!playerThree.bid && playerThree.actual) || (!playerFour.bid && playerFour.actual)) {
                score2 -= 100;
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

                if (team1Bids >= 10) {
                    score2 -= 100;
                }
            }

            if (bags1 >= 10) {
                bags1 = 10 - bags1;
                score1 -= 100;
            }

            if(bags2 >= 10) {
                bags2 = 10 - bags2;
                score2 -= 100;
            }
        }
    });

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

export const submitBids = (round) => (dispatch) => {
    const roundWithTotals = {
        ...round,
        team1Total: Number(round.player1Bid) + Number(round.player2Bid),
        team2Total: Number(round.player3Bid) + Number(round.player4Bid)
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

export const submitActuals = (score1, score2, roundBids, roundActual) => (dispatch) => {
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
