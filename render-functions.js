const capitalizeWithMeasurement = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Rendering function for conversions and displaying information
const renderConversions = () => {

    // Header above the numerical input determined by the dropdown select menu
    inputHeader.textContent = capitalizeWithMeasurement(measurementChoiceInput) + ` (${choices[choiceIndex].symbol}):`
    
    // Output box 1
    const outOneHeader = document.querySelector('#outOne h2')
    outOneHeader.textContent = capitalizeWithMeasurement(choices[choiceIndex].convert1.name) + ` (${choices[choiceIndex].convert1.symbol}):`
    const outOneVal = document.querySelector('#outOne span')
    outOneVal.textContent = choices[choiceIndex].convert1.conversion()

    // Output box 2
    const outTwoHeader = document.querySelector('#outTwo h2')
    outTwoHeader.textContent = capitalizeWithMeasurement(choices[choiceIndex].convert2.name) + ` (${choices[choiceIndex].convert2.symbol}):`
    const outTwoVal = document.querySelector('#outTwo span')
    outTwoVal.textContent = choices[choiceIndex].convert2.conversion()

    // Output box 3
    const outThreeHeader = document.querySelector('#outThree h2')
    outThreeHeader.textContent = capitalizeWithMeasurement(choices[choiceIndex].convert3.name) + ` (${choices[choiceIndex].convert3.symbol}):`
    const outThreeVal = document.querySelector('#outThree span')
    outThreeVal.textContent = choices[choiceIndex].convert3.conversion()
}