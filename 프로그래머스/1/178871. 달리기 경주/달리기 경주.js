function solution(players, callings) {
    const playerMap = {};
    players.forEach((name, idx) => playerMap[name] = idx);
    
    for(const call of callings){
        const idx = playerMap[call]; // 플레이어에서 몇번째에 있는지(현재 인덱스))
        const front = players[idx - 1]; // 바로 앞사람 이름
        
        [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];
        
        playerMap[call] --;
        playerMap[front] ++;
        
    }
    return players
    
}