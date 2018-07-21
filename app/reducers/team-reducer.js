import {
    SET_PLAYER_FOUR_NAME,
    SET_PLAYER_ONE_NAME,
    SET_PLAYER_THREE_NAME,
    SET_PLAYER_TWO_NAME
} from '../../action-types';

const defaultState = {
    team1: {
        firstPlayer: 'Player 1',
        secondPlayer: 'Player 2',
        score: 0
    },
    team2: {
        firstPlayer: 'Player 3',
        secondPlayer: 'Player 4',
        score: 0
    }
};

const setPlayerOneName = (state, firstPlayer) => ({
    ...state,
    team1: {
        ...state.team1,
        firstPlayer
    }
});

const setPlayerTwoName = (state, secondPlayer) => ({
    ...state,
    team1: {
        ...state.team1,
        secondPlayer
    }
});

const setPlayerThreeName = (state, firstPlayer) => ({
    ...state,
    team2: {
        ...state.team1,
        firstPlayer
    }
});

const setPlayerFourName = (state, secondPlayer) => ({
    ...state,
    team2: {
        ...state.team1,
        secondPlayer
    }
});

const reducerMap = {
    [SET_PLAYER_ONE_NAME]: setPlayerOneName,
    [SET_PLAYER_TWO_NAME]: setPlayerTwoName,
    [SET_PLAYER_THREE_NAME]: setPlayerThreeName,
    [SET_PLAYER_FOUR_NAME]: setPlayerFourName
};

export default (state = defaultState, {type, data}) => {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
};
