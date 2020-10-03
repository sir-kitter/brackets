const check = (string, bracketsConfig) => {
    const brackets = new Map(bracketsConfig)
    const expectations = [Infinity]
    for(const char of string) {
        if(char === expectations[expectations.length - 1])
            expectations.pop()
        else if(brackets.has(char))
            expectations.push(brackets.get(char))
        else
            return false
    }
    return expectations.length === 1
}

module.exports = check