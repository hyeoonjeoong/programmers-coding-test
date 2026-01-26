function solution (phone_number){
    const numLength = phone_number.length;
    return "*".repeat(numLength - 4) + phone_number.slice(-4);
}