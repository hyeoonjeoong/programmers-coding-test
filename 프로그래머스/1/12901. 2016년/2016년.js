function solution(a, b) {
    const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const monthDays = getMonthDays(2016);
    
    let allPeriod = 0;
    for(let i =0; i < a - 1; i++){
        allPeriod += monthDays[i];
    }
    allPeriod += b -1;
    
    const result = days[allPeriod % 7];
    
    return result;
}

const getMonthDays = (year) => {
    const monthDays = [];
    
    for(let i=0; i < 12; i++){
        let lastDay = new Date(year, i + 1,0).getDate(); // 그 달의 마지막 날짜
        monthDays.push(lastDay);
    }
    return monthDays;
}