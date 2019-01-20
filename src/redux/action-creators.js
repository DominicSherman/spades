import {
    SET_ROUNDS,
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
    SET_PLAYER_TWO_NAME,
    SET_TEAM_ONE_BAGS,
    SET_TEAM_ONE_SCORE,
    SET_TEAM_TWO_BAGS,
    SET_TEAM_TWO_SCORE,
    UNDO_ACTUAL,
    UNDO_BIDS, TOGGLE_SHOW_HISTORY
} from '../constants/action-types';
import {FOUR, ONE, THREE, TWO} from '../constants/enum';
import {Alert} from 'react-native';

const calculateScore = (rounds) => {
    let score1 = 0,
        score2 = 0,
        bags1 = 0,
        bags2 = 0;

    rounds.forEach((round) => {
        const {playerOne, playerTwo, playerThree, playerFour, team1Actual, team2Actual, team1Bids, team2Bids} = round;

        if (playerOne.actual !== null && playerOne.actual !== undefined) {
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

    return {
        score1,
        score2,
        bags1,
        bags2
    };
};
export const calculateTeamScore = (rounds) => (dispatch) => {
    const {
        score1,
        score2,
        bags1,
        bags2
    } = calculateScore(rounds);

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

const submitBids = (roundBids) => (dispatch) => {
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

const submitActuals = (roundActual) => (dispatch, getState) => {
    const team1Actual = Number(roundActual.player1Bid) + Number(roundActual.player2Bid);
    const team2Actual = Number(roundActual.player3Bid) + Number(roundActual.player4Bid);

    if ((team1Actual + team2Actual) === 13) {
        const {rounds} = getState();

        let updatedRounds = [{
            ...rounds[0],
            playerOne: {
                ...rounds[0].playerOne,
                actual: Number(roundActual.player1Bid)
            },
            playerTwo:
                {
                    ...rounds[0].playerTwo,
                    actual: Number(roundActual.player2Bid)
                }
            ,
            playerThree: {
                ...rounds[0].playerThree,
                actual: Number(roundActual.player3Bid)
            }
            ,
            playerFour: {
                ...rounds[0].playerFour,
                actual: Number(roundActual.player4Bid)
            },
            team1Actual,
            team2Actual
        }, ...rounds.slice(1)];

        updatedRounds[0].score = calculateScore(updatedRounds);

        dispatch({
            data: updatedRounds,
            type: SET_ROUNDS
        });

        dispatch({
            type: RESET
        });

        dispatch({
            data: true,
            type: SET_IS_BIDS
        });
    }
};

export const submit = () => (dispatch, getState) => {
    const {isBids, currRound} = getState();

    if (isBids) {
        submitBids(currRound)(dispatch, getState);
    } else {
        submitActuals(currRound)(dispatch, getState);
    }
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

export const restart = () => (dispatch) => Alert.alert(
    'Are you sure you want to restart?',
    'You cannot undo this',
    [
        {text: 'Cancel'},
        {
            onPress: () => dispatch({type: RESTART}),
            text: 'Yes'
        }
    ]
);

export const undo = (isBids) => (dispatch, getState) => {
    const {rounds} = getState();

    if (rounds.length) {
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
    }
};

export const toggleShowHistory = () => ({
    type: TOGGLE_SHOW_HISTORY
});
