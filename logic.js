// Global variable for user inputwhich is updated on input
let input = document.querySelector('#numericInput').value

// Array with all the conversion choices
const choices = [{
// Pounds
    name: 'pounds',
    symbol: 'lb',
    // Conversion
    convert1: {
        symbol: 'oz',
        name: 'ounces',
        conversion() { return input * 16}
    },
    convert2: {
        symbol: 'g',
        name: 'grams',
        conversion() { return input / 0.0022046}
    },
    convert3: {
        name: 'kilograms',
        symbol: 'kg',
        conversion() { return input / 2.2046}
    }
}, {
// Ounces
    name: 'ounces',
    symbol: 'oz',
    // Conversion
    convert1: {
        name: 'pounds',
        symbol: 'lb',
        conversion() { return input * 0.0625}
    },
    convert2: {
        name: 'grams',
        symbol: 'g',
        conversion() { return input / 0.035274}
    },
    convert3: {
        name: 'kilograms',
        symbol: 'kg',
        conversion() { return input / 35.274}
    }
},{
// Grams
    name: 'grams',
    symbol: 'g',
    // conversion
    convert1: {
        name: 'kilograms',
        symbol: 'kg',
        conversion() { return input / 1000}
    },
    convert2: {
        symbol: 'lb',
        name: 'pounds',
        conversion() { return input / 453.59237}
        },
    convert3: {
        name: 'ounces',
        symbol: 'oz',
        conversion() { return input * 0.035274}
    }
}, {
// Kilograms
    name: 'kilograms',
    symbol: 'kg',
    // Conversion
    convert1: {
        name: 'grams',
        symbol: 'g',
        conversion() { return input * 1000 }
    },
    convert2: {
        name: 'pounds',
        symbol: 'lb',
        conversion() { return input * 2.2046226218}
    },
    convert3: {
        name: 'ounces',
        symbol: 'oz',
        conversion() { return input / 0.02834952}
    }
}]

// Default values if event listener is not triggered
let measurementChoiceInput = 'pounds'
let choiceIndex = 0

// Creates a global variable for the header above the input
const inputHeader = document.querySelector('#valueInput h2');

// First Default Render
renderConversions()

// Changes the measurement based on input from the select menu
document.querySelector('#selector').addEventListener('change', (event) => {
    // Choosing the measurement from the select menu
    measurementChoiceInput = event.target.value

    // Find the index of the measurement choice in the array
    choiceIndex = choices.findIndex((choice) =>  measurementChoiceInput == choice.name )

    // Make the Label appear selected
    activeCheck()
    // Render the conversions
    renderConversions()
})

// On numeric input keystroke in input
document.querySelector('#numericInput').addEventListener('input', (event) => {
    input = event.target.value // Sets the input for conversions
    renderConversions()
})