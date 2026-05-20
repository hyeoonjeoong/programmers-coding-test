function solution(id_list, report, k) {
    const uniqueReport = [...new Set(report)];
    
    const whoReported = {}; // 신고당한 사람: [신고한 사람들 이름 배열]
    const mailCount = {};  // 유저: [받을 메일 수]
    
    id_list.forEach((id) => {
        whoReported[id] = [];
        mailCount[id] = 0;
    })
    
    for(const list of uniqueReport){
        const [reporter, reportee] = list.split(' ')
        whoReported[reportee].push(reporter);
    }

    for (const id of id_list) {
        if(whoReported[id].length >= k){
            whoReported[id].forEach((reporter)=> {
                mailCount[reporter]++;
            })
        }
    }

    return Object.values(mailCount);
    
}