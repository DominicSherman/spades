import {Alert} from 'react-native';

import {TEAM_ONE, TEAM_TWO} from '../constants/constants';
import {
    addCurrRoundResults,
    calculateScore,
    getTeamTotalBids,
    setBidsActionEnum,
    setNameActionsEnum
} from '../services/score-service';

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
import {bidsAddUpTo13} from '../constants/score-helpers';

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
        team1Total: getTeamTotalBids(currRound, TEAM_ONE),
        team2Total: getTeamTotalBids(currRound, TEAM_TWO)
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

const submitResults = () => (dispatch, getState) => {
    const {currRound, rounds} = getState();

    if (bidsAddUpTo13(currRound)) {
        const updatedRounds = addCurrRoundResults(currRound, rounds);

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
        submitResults()(dispatch, getState);
    }
};

export const setName = (name, player) => ({
    data: name,
    type: setNameActionsEnum[player]
});

export const submitValue = (bid, player) => ({
    data: bid,
    type: setBidsActionEnum[player]
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
