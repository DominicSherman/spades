import {ADD_ROUND} from '../../action-types';

const newRound = () => ({
    player1Bid: 0,
    player2Bid: 0,
    player3Bid: 0,
    player4Bid: 0,
    team1Bid: 0,
    team2Bid: 0,
    team1Actual: 0,
    team2Actual: 0
});

export const addNewRound = () => (dispatch) => {
    dispatch({
        data: newRound(),
        type: ADD_ROUND
    })
};