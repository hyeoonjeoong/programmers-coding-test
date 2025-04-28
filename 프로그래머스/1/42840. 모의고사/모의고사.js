function solution(answers) {
    let player = {
        '1': [1, 2, 3, 4, 5],
        '2': [2, 1, 2, 3, 2, 4, 2, 5 ],
        '3': [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    };
    let scores = [0, 0, 0]; // 각 수포자가 맞춘 개수

    for( let i = 0; i < answers.length; i++){
        if (answers[i] === player['1'][i % player['1'].length]) scores[0]++;
        if (answers[i] === player['2'][i % player['2'].length]) scores[1]++;
        if (answers[i] === player['3'][i % player['3'].length]) scores[2]++;
    }

    let highScore = Math.max(...scores)
    let result = [];

    scores.forEach((score, idx) => {
        if(score === highScore){
            result.push(idx + 1);
        }
    })
    return result;
}