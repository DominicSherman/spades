import {combineReducers} from 'redux';

import teams from './team-reducer';
import rounds from './round-reducer';

const spadesScore = combineReducers({
    teams,
    rounds
});

export default spadesScore;
