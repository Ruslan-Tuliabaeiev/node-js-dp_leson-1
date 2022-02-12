
const { sub, sum, mult, div } = require('./operations')

const actionsHandler = ( operation, numbers) => {


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
    
}

module.exports = actionsHandler

