
const sum = (operationParam, numbersParam) => {
    if ("sum" === operationParam) {
        const result = numbersParam.reduce((total, num) => { return total + num }, 0)
        console.log(result)
        return true
    }
    console.log("Unable To Handle ")
    return null
}

module.exports = sum