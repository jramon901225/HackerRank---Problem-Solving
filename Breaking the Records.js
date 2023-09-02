const scores = [12, 24, 10, 24];

breakingRecords(scores);

function breakingRecords(scores) {
    let minScore = scores[0];
    let maxScore = scores[0];

    let maxCount = 0;
    let minCount = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxCount++;
        } else if (scores[i] < minScore) {
            minScore = scores[i];
            minCount++;
        }
    }

    return [maxCount , minCount];
}
