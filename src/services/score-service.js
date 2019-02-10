export const calculateScore = (rounds) => {
    let score1 = 0,
        score2 = 0,
        bags1 = 0,
        bags2 = 0;

    rounds.forEach((round) => {
        const {playerOne, playerTwo, playerThree, playerFour, team1Actual, team2Actual, team1Bids, team2Bids} = round;

        if (playerOne.actual !== null && playerOne.actual !== undefined) {
            if (!playerOne.bid && !playerOne.actual || !playerTwo.bid && !playerTwo.actual) {
                score1 += 100;
            } else if (!playerOne.bid && playerOne.actual || !playerTwo.bid && playerTwo.actual) {
                score1 -= 100;
            }

            if (playerOne.bid === 100 && !playerOne.actual || playerTwo.bid === 100 && !playerTwo.actual) {
                score1 += 200;
            } else if (playerOne.bid === 100 && playerOne.actual || playerTwo.bid === 100 && playerTwo.actual) {
                score1 -= 200;
            }

            if (!playerThree.bid && !playerThree.actual || !playerFour.bid && !playerFour.actual) {
                score2 += 100;
            } else if (!playerThree.bid && playerThree.actual || !playerFour.bid && playerFour.actual) {
                score2 -= 100;
            }

            if (playerThree.bid === 100 && !playerThree.actual || playerFour.bid === 100 && !playerFour.actual) {
                score2 += 200;
            } else if (playerThree.bid === 100 && playerThree.actual || playerFour.bid === 100 && playerFour.actual) {
                score2 -= 200;
            }

            if (team1Actual >= team1Bids) {
                score1 += 10 * team1Bids + (team1Actual - team1Bids);
                bags1 += team1Actual - team1Bids;

                if (team1Bids >= 10 && team1Actual >= 10) {
                    score1 += 100;
                }
            } else {
                score1 -= 10 * team1Bids;

                if (team1Bids >= 10) {
                    score1 -= 100;
                }
            }

            if (team2Actual >= team2Bids) {
                score2 += 10 * team2Bids + (team2Actual - team2Bids);
                bags2 += team2Actual - team2Bids;

                if (team2Bids >= 10 && team2Actual >= 10) {
                    score2 += 100;
                }
            } else {
                score2 -= 10 * team2Bids;

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
        bags1,
        bags2,
        score1,
        score2
    };
};