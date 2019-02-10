import {Alert} from 'react-native';

import {TEAM_ONE, TEAM_TWO} from '../constants/enum';
import {calculateScore, getSetBidAction, getSetNameAction, getTeamTotal} from '../services/score-service';

import {
    ADD_BIDS,
    RESET,
    RESTART,
    SET_COLOR,
    SET_IS_BIDS,
    SET_ROUNDS,
    SET_TEAM_ONE_BAGS,
    SET_TEAM_ONE_SCORE,
    SET_TEAM_TWO_BAGS,
    SET_TEAM_TWO_SCORE,
    SET_THEME,
    TOGGLE_SHOW_HISTORY,
    TOGGLE_SHOW_INFO_MODAL,
    TOGGLE_SHOW_SETTINGS_MODAL,
    UNDO_ACTUAL,
    UNDO_BIDS
} from './action-types';

export const calculateTeamScore = (rounds) => (dispatch) => {
    const {bags1, bags2, score1, score2} = calculateScore(rounds);

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

const submitBids = () => (dispatch, getState) => {
    const {currRound} = getState();

    const roundWithTotals = {
        ...currRound,
        team1Total: getTeamTotal(currRound, TEAM_ONE),
        team2Total: getTeamTotal(currRound, TEAM_TWO)
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
    });
};

const submitActuals = () => (dispatch, getState) => {
    const {currRound, rounds} = getState();

    const team1Actual = getTeamTotal(currRound, TEAM_ONE);
    const team2Actual = getTeamTotal(currRound, TEAM_TWO);

    if (team1Actual + team2Actual === 13) {
        const updatedRounds = [{
            ...rounds[0],
            playerFour: {
                ...rounds[0].playerFour,
                actual: Number(currRound.player4Bid)
            },
            playerOne: {
                ...rounds[0].playerOne,
                actual: Number(currRound.player1Bid)
            },
            playerThree: {
                ...rounds[0].playerThree,
                actual: Number(currRound.player3Bid)
            },
            playerTwo: {
                ...rounds[0].playerTwo,
                actual: Number(currRound.player2Bid)
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
    const {isBids} = getState();

    if (isBids) {
        submitBids()(dispatch, getState);
    } else {
        submitActuals()(dispatch, getState);
    }
};

export const setName = (name, player) => ({
    data: name,
    type: getSetNameAction[player]
});

export const submitValue = (bid, player) => ({
    data: bid,
    type: getSetBidAction[player]
});

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

export const toggleShowInfoModal = () => ({
    type: TOGGLE_SHOW_INFO_MODAL
});

export const toggleShowSettingsModal = () => ({
    type: TOGGLE_SHOW_SETTINGS_MODAL
});

export const setTheme = (theme) => ({
    data: theme,
    type: SET_THEME
});

export const setColor = (color) => ({
    data: color,
    type: SET_COLOR
});
