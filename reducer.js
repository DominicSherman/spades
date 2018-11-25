import {
    ADD_ACTUAL,
    ADD_BIDS,
    RESET,
    RESTART,
    SET_IS_BIDS,
    SET_PLAYER_FOUR_ACTUAL,
    SET_PLAYER_FOUR_BID,
    SET_PLAYER_FOUR_NAME,
    SET_PLAYER_ONE_ACTUAL,
    SET_PLAYER_ONE_BID,
    SET_PLAYER_ONE_NAME,
    SET_PLAYER_THREE_ACTUAL,
    SET_PLAYER_THREE_BID,
    SET_PLAYER_THREE_NAME,
    SET_PLAYER_TWO_ACTUAL,
    SET_PLAYER_TWO_BID,
    SET_PLAYER_TWO_NAME,
    SET_TEAM_ONE_BAGS,
    SET_TEAM_ONE_SCORE,
    SET_TEAM_TWO_BAGS,
    SET_TEAM_TWO_SCORE,
    UNDO_ACTUAL,
    UNDO_BIDS
} from './action-types';

const defaultState = {
    currRound: {
        player1Bid: 0,
        player2Bid: 0,
        team1Total: 0,
        player3Bid: 0,
        player4Bid: 0,
        team2Total: 0
    },
    isBids: true,
    rounds: [],
    team1: {
        firstPlayer: 'Player 1',
        secondPlayer: 'Player 2',
        score: 0,
        bags: 0
    },
    team2: {
        firstPlayer: 'Player 3',
        secondPlayer: 'Player 4',
        score: 0,
        bags: 0
    }
};

const setIsBids = (state, isBids) => ({
    ...state,
    isBids
});

const addBids = (state, bids) => ({
    ...state,
    rounds: [{
        playerOne: {
            bid: Number(bids.player1Bid)
        },
        playerTwo: {
            bid: Number(bids.player2Bid)
        },
        playerThree: {
            bid: Number(bids.player3Bid)
        },
        playerFour: {
            bid: Number(bids.player4Bid)
        },
        team1Bids: Number(bids.team1Total),
        team2Bids: Number(bids.team2Total)
    }, ...state.rounds]
});

const addActual = (state, actual) => ({
        ...state,
        rounds: [{
            ...state.rounds[0],
            playerOne: {
                ...state.rounds[0].playerOne,
                actual: Number(actual.player1Bid)
            },
            playerTwo:
                {
                    ...state.rounds[0].playerTwo,
                    actual: Number(actual.player2Bid)
                }
            ,
            playerThree: {
                ...state.rounds[0].playerThree,
                actual: Number(actual.player3Bid)
            }
            ,
            playerFour: {
                ...state.rounds[0].playerFour,
                actual: Number(actual.player4Bid)
            },
            team1Actual: Number(actual.team1Total),
            team2Actual: Number(actual.team2Total)
        }, ...state.rounds.slice(1)]
    })
;

const reset = (state) => ({
    ...state,
    currRound: {
        player1Bid: 0,
        player2Bid: 0,
        player3Bid: 0,
        player4Bid: 0
    }
});

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
        ...state.team2,
        firstPlayer
    }
});

const setPlayerFourName = (state, secondPlayer) => ({
    ...state,
    team2: {
        ...state.team2,
        secondPlayer
    }
});

const setPlayerOneBid = (state, player1Bid) => ({
    ...state,
    currRound: {
        ...state.currRound,
        player1Bid
    }
});

const setPlayerTwoBid = (state, player2Bid) => ({
    ...state,
    currRound: {
        ...state.currRound,
        player2Bid
    }
});

const setPlayerThreeBid = (state, player3Bid) => ({
    ...state,
    currRound: {
        ...state.currRound,
        player3Bid
    }
});

const setPlayerFourBid = (state, player4Bid) => ({
    ...state,
    currRound: {
        ...state.currRound,
        player4Bid
    }
});

const setPlayerOneActual = (state, player1Actual) => ({
    ...state,
    currRound: {
        ...state.currRound,
        player1Actual
    }
});

const setPlayerTwoActual = (state, player2Actual) => ({
    ...state,
    currRound: {
        ...state.currRound,
        player2Actual
    }
});

const setPlayerThreeActual = (state, player3Actual) => ({
    ...state,
    currRound: {
        ...state.currRound,
        player3Actual
    }
});

const setPlayerFourActual = (state, player4Actual) => ({
    ...state,
    currRound: {
        ...state.currRound,
        player4Actual
    }
});

const setTeamOneScore = (state, score) => ({
    ...state,
    team1: {
        ...state.team1,
        score
    }
});

const setTeamTwoScore = (state, score) => ({
    ...state,
    team2: {
        ...state.team2,
        score
    }
});

const setTeamOneBags = (state, bags) => ({
    ...state,
    team1: {
        ...state.team1,
        bags
    }
});

const setTeamTwoBags = (state, bags) => ({
    ...state,
    team2: {
        ...state.team2,
        bags
    }
});

const undoBids = (state) => ({
    ...state,
    rounds: [...state.rounds.slice(1)]
});

const undoActual = (state) => ({
    ...state,
    rounds: [{
        ...state.rounds[0],
        playerOne: {
            ...state.rounds[0].playerOne,
            actual: null
        },
        playerTwo: {
            ...state.rounds[0].playerTwo,
            actual: null
        },
        playerThree: {
            ...state.rounds[0].playerThree,
            actual: null
        },
        playerFour: {
            ...state.rounds[0].playerFour,
            actual: null
        },
        team1Actual: null,
        team2Actual: null
    }, ...state.rounds.slice(1)]
});

const restart = () => defaultState;

const reducerMap = {
    [SET_TEAM_ONE_SCORE]: setTeamOneScore,
    [SET_TEAM_TWO_SCORE]: setTeamTwoScore,
    [SET_TEAM_ONE_BAGS]: setTeamOneBags,
    [SET_TEAM_TWO_BAGS]: setTeamTwoBags,
    [SET_IS_BIDS]: setIsBids,
    [RESET]: reset,
    [RESTART]: restart,
    [ADD_BIDS]: addBids,
    [ADD_ACTUAL]: addActual,
    [SET_PLAYER_ONE_NAME]: setPlayerOneName,
    [SET_PLAYER_TWO_NAME]: setPlayerTwoName,
    [SET_PLAYER_THREE_NAME]: setPlayerThreeName,
    [SET_PLAYER_FOUR_NAME]: setPlayerFourName,
    [SET_PLAYER_ONE_BID]: setPlayerOneBid,
    [SET_PLAYER_TWO_BID]: setPlayerTwoBid,
    [SET_PLAYER_THREE_BID]: setPlayerThreeBid,
    [SET_PLAYER_FOUR_BID]: setPlayerFourBid,
    [SET_PLAYER_ONE_ACTUAL]: setPlayerOneActual,
    [SET_PLAYER_TWO_ACTUAL]: setPlayerTwoActual,
    [SET_PLAYER_THREE_ACTUAL]: setPlayerThreeActual,
    [SET_PLAYER_FOUR_ACTUAL]: setPlayerFourActual,
    [UNDO_BIDS]: undoBids,
    [UNDO_ACTUAL]: undoActual
};

export default (state = defaultState, {type, data}) => {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
};
