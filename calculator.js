
// console.log("hello")

//sum
///sub
//mult
//div
 
// console.log(process.argv)

const [operation, ...numbersArgs] = process.argv.slice(2)
// console.log(operation, numbersArgs)
const numbers = numbersArgs.map((num) => Number(num) )  
// if ("sum" === operation) {
//     const result = numbers.reduce((total, num) => { return total + num }, 0)
//     console.log(result)
// }

// if ("sub" === operation) {
//     const result = numbers.reduce((total, num) => { return total - num } )
//     console.log(result)
// }

// if ("div" === operation) {
//     const result = numbers.reduce((total, num) => { return total / num })
//     console.log(result)
// }

// if ("mult" === operation) {
//     const result = numbers.reduce((total, num) => { return total * num })
//     console.log(result)
// }
const sum = (operationParam, numbersParam) => {
    if ("sum" === operationParam) {
        const result = numbersParam.reduce((total, num) => { return total + num }, 0)
        console.log(result)
        return true
    }
    console.log("Unable To Handle ")
    return  null
}
// sum(operation, numbers )  

const sub = (operationParam, numbersParam) => {
    if ("sub" === operationParam) {
        const result = numbersParam.reduce((total, num) => { return total - num })
        console.log(result)
        return true
    }
    console.log("Unable To Handle ")
    return null
 }
// sum(operation, numbers) 
// sub(operation, numbers) 

const div = (operationParam, numbersParam) => {
    if ("div" === operationParam) {
        const result = numbersParam.reduce((total, num) => { return total / num })
        console.log(result)
        return true
    }
    console.log("Unable To Handle ")
    return null
}

 //div(operation, numbers)
const mult = (operationParam, numbersParam) => {
    if ("mult" === operationParam) {
        const result = numbersParam.reduce((total, num) => { return total * num })
        console.log(result)
        return true
    }
    console.log("Unable To Handle ")
    return null
}
//mult(operation, numbers)
switch (operation) {
    case 'sum': sum(operation, numbers)
        break;
    case 'sub': sub(operation, numbers)
        break;
    case 'div': div(operation, numbers)
        break;
    case 'mult': mult(operation, numbers) 
        break;  
    default: console.log('Error Operation');
}

