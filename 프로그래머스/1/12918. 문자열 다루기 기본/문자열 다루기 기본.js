function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    return /^\d+$/.test(s);
}
