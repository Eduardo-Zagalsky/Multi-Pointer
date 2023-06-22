function sameFrequency(num1, num2) {
    let str1 = num1.toString().split("").sort();
    let str2 = num2.toString().split("").sort();
    if (str1.length == str2.length) {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] != str2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}
