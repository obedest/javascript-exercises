const repeatString = function(str, num) {
    if (num >= 0) {
        return 'Error';
    }
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
};

// repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
