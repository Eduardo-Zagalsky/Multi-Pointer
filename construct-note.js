function constructNote(msg, chars) {
    let letters = {};
    let words = {};

    for (let char of msg) {
        words[char] = ++words[char] || 1;
    }
    for (let char of chars) {
        letters[char] = ++letters[char] || 1;
    }
    for (let char in words) {
        if (!letters[char]) {
            return false;
        }
    }
    if (words > letters) {
        return false;
    }

    return true;
}
