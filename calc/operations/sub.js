
const sub = (operationParam, numbersParam) => {
    if ("sub" === operationParam) {
        const result = numbersParam.reduce((total, num) => { return total - num })
        console.log(result)
        return true
    }
    console.log("Unable To Handle ")
    return null
}

module.exports = sub