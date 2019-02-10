import Chance from 'chance';

import {createRandomProps} from '../model-factory';
import {calculateScore} from '../../src/services/score-service';
import {calculateTeamScore} from '../../src/redux/action-creators';
import {
    SET_TEAM_ONE_BAGS,
    SET_TEAM_ONE_SCORE,
    SET_TEAM_TWO_BAGS,
    SET_TEAM_TWO_SCORE
} from '../../src/redux/action-types';

jest.mock('../../src/services/score-service');

const chance = new Chance();

describe('action-creators', () => {
    let dispatchSpy,
        expectedState,
        getStateStub,
        thunk;

    beforeEach(() => {
        expectedState = createRandomProps();
        dispatchSpy = jest.fn();
        getStateStub = jest.fn(() => expectedState);
    });

    describe('calculateTeamScore', () => {
        let expectedRounds,
            expectedBags1,
            expectedBags2,
            expectedScore1,
            expectedScore2;

        beforeEach(() => {
            expectedRounds = chance.string();
            expectedBags1 = chance.natural();
            expectedBags2 = chance.natural();
            expectedScore1 = chance.natural();
            expectedScore2 = chance.natural();

            calculateScore.mockReturnValue({
                bags1: expectedBags1,
                bags2: expectedBags2,
                score1: expectedScore1,
                score2: expectedScore2
            });

            calculateTeamScore(expectedRounds)(dispatchSpy);
        });

        it('should call calculateScore', () => {
            expect(calculateScore).toHaveBeenCalledTimes(1);
            expect(calculateScore).toHaveBeenCalledWith(expectedRounds);
        });

        it('should dispatch the results', () => {
            expect(dispatchSpy).toHaveBeenCalledTimes(4);
            expect(dispatchSpy).toHaveBeenCalledWith({
                data: expectedScore1,
                type: SET_TEAM_ONE_SCORE
            });
            expect(dispatchSpy).toHaveBeenCalledWith({
                data: expectedScore2,
                type: SET_TEAM_TWO_SCORE
            });
            expect(dispatchSpy).toHaveBeenCalledWith({
                data: expectedBags1,
                type: SET_TEAM_ONE_BAGS
            });
            expect(dispatchSpy).toHaveBeenCalledWith({
                data: expectedBags2,
                type: SET_TEAM_TWO_BAGS
            });
        });
    });
});
