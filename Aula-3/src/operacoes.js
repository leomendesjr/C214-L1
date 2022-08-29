const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(elemento) {
        const validateElem = validate({ elemento },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateElem !== undefined ){
            return 'Error';
        }
        return elemento + 10;
    },

    sub(elemento) {
        const validateElem = validate({ elemento },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateElem !== undefined ){
            return 'Error';
        }
        return elemento - 10;
    },

    mult(elemento) {
        const validateElem = validate({ elemento },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateElem !== undefined ){
            return 'Error';
        }
        return elemento * 10;
    },

    div(elemento) {
        const validateElem = validate({ elemento },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateElem !== undefined ){
            return 'Error';
        }
        return elemento / 10;
    },

    pot(elemento) {
        const validateElem = validate({ elemento },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateElem !== undefined ){
            return 'Error';
        }
        return elemento * elemento;
    },
};

module.exports = Calculadora;