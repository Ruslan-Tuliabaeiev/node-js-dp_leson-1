

class Calculator  {
    constructor(operation, numbers) {
        this.operation = operation
        this.numbers = numbers
    }

    div = (operationParam, numbersParam) => {
        if ("div" === operationParam) {
            const result = numbersParam.reduce((total, num) => { return total / num })
            console.log(result)
            return true
        }
        console.log("Unable To Handle ")
        return null
    }
    mult = (operationParam, numbersParam) => {
        if ("mult" === operationParam) {
            const result = numbersParam.reduce((total, num) => { return total * num })
            console.log(result)
            return true
        }
        console.log("Unable To Handle ")
        return null
    }
     sub = (operationParam, numbersParam) => {
        if ("sub" === operationParam) {
            const result = numbersParam.reduce((total, num) => { return total - num })
            console.log(result)
            return true
        }
        console.log("Unable To Handle ")
        return null
    }
     sum = (operationParam, numbersParam) => {
        if ("sum" === operationParam) {
            const result = numbersParam.reduce((total, num) => { return total + num }, 0)
            console.log(result)
            return true
        }
        console.log("Unable To Handle ")
        return null
    }

 actionsHandler = (operation, numbers) => {


        switch (operation) {
            case 'sum': this.sum(operation, numbers)
                break;
            case 'sub': this.sub(operation, numbers)
                break;
            case 'div': this.div(operation, numbers)
                break;
            case 'mult': this.mult(operation, numbers)
                break;
            default: console.log('Error Operation');
        }

    }

    init = () => {
        this.actionsHandler(this.operation, this.numbers)
        
}

}
const [operation, ...numbersArgs] = process.argv.slice(2)
const numbers = numbersArgs.map((num) => Number(num))  
module.exports = new Calculator(operation, numbers).init()

