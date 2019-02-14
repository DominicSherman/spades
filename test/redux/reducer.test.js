import Chance from 'chance';

import reducer from '../../src/redux/reducer';
import {LIGHT, ORIGINAL} from '../../src/constants/constants';
import {RESTART} from '../../src/redux/action-types';

const chance = new Chance();

describe('reducer', () => {
    const defaultState = {
        currRound: {
            player1Bid: 0,
            player2Bid: 0,
            player3Bid: 0,
            player4Bid: 0,
            team1Total: 0,
            team2Total: 0
        },
        isBids: true,
        rounds: [],
        shouldShowHistory: false,
        showInfoModal: false,
        showSettingsModal: false,
        team1: {
            bags: 0,
            firstPlayer: 'Player 1',
            score: 0,
            secondPlayer: 'Player 2'
        },
        team2: {
            bags: 0,
            firstPlayer: 'Player 3',
            score: 0,
            secondPlayer: 'Player 4'
        },
        theme: {
            background: LIGHT,
            color: ORIGINAL
        }
    };

    let anyAction;

    beforeEach(() => {
        anyAction = chance.string();
    });

    it('should return state if an action fails to match', () => {
        const expectedState = chance.string();

        const actualState = reducer(expectedState, anyAction);

        expect(actualState).toBe(expectedState);
    });

    it('should return the default state if not called with state', () => {
        const actualState = reducer(undefined, anyAction);

        expect(actualState).toEqual(defaultState);
    });

    it('should restart when the action is RESTART', () => {
        const originalState = {
            [chance.string()]: chance.string(),
            theme: {
                [chance.string()]: chance.string()
            }
        };

        const action = {
            type: RESTART
        };

        const actualState = reducer(originalState, action);

        expect(actualState).toEqual({
            ...defaultState,
            theme: originalState.theme
        });
    });
});
