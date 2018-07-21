import {ADD_ROUND} from '../../action-types';

const defaultState = {
    rounds: [{
        player1Bid: 0,
        player2Bid: 0,
        player3Bid: 0,
        player4Bid: 0,
        team1Bid: 0,
        team2Bid: 0,
        team1Actual: 0,
        team2Actual: 0
    }]
};

const addRound = (state, round) => ({
    rounds: [round, ...state.rounds]
});

const reducerMap = {
    [ADD_ROUND]: addRound
};

export default (state = defaultState, {type, data}) => {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
};
