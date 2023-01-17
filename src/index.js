module.exports = function reverse(n) {
    let result = "";
    const numModule = Math.abs(n);
    const numberStr = numModule.toString();
    for (let i = 0; i < numberStr.length; i = i + 1) {
        result = `${numberStr[i]}${result}`;
    }
    return result * 1;
};
