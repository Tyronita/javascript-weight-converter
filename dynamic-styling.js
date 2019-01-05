/* Colour palette corresponds to measurement,
    pounds = #FF517A #FFCCD8 #FF475C
    ounces = #FFC94C #FFEBBD #FFBE28
    grams = #00EFAF #A1FBE2 #00E2A2
    kilograms = #00BFFF #A2E7FF #00A9FF
    */
// grab elements
const elements = document.querySelector(".io").children;
let i;

const colorCorellation = () => {
    // start at 1 to avoid checking the first div
    for (i = 1; i < elements.length; i++) {
        // Find the element with keyword and change the background colour
        if (elements[i].childNodes[1].textContent.includes('Pounds')) {
            divColoring('#FF517A')
            inputColoring('#FFCCD8', '#FF475C')
        }
        if (elements[i].childNodes[1].textContent.includes('Ounces')) {
            divColoring('#FFC94C')
            inputColoring('#FFEBBD','#FFBE28')
        }
        if (elements[i].childNodes[1].textContent.includes('Grams')) {
            divColoring('#00EFAF')
            inputColoring('#A1FBE2', '#00E2A2')
        }
        if (elements[i].childNodes[1].textContent.includes('Kilograms')) {
            divColoring('#00BFFF')
            inputColoring('#A2E7FF', '#00A9FF')
        }
    }
}

const divColoring = (color='#eee') => {
    elements[i].style.backgroundColor = color
}

const inputColoring = (secondaryColor = '#fff', tertiaryColor = '#ccc') => {
    const inputElement = elements[1].lastElementChild
    if (i == 1) {
        inputElement.style.backgroundColor = secondaryColor
        inputElement.style.borderColor = secondaryColor
    }
     if (i > 1) {
         elements[i].lastElementChild.style.backgroundColor = tertiaryColor
    }
}

const labels = document.querySelector('#selector').children
let labelIndex;
let x;

const activeCheck = () => {
    // Sets all labels to default opacity
    for (x = 0; x < 4; x++) {
        labels[x].style.opacity = '0.5'
        labels[x].style.fontWeight = '300'
        labels[x].style.textShadow ='none'
    }

    for (labelIndex = 0; labelIndex < 4; labelIndex++) {
        if (labels[labelIndex].firstElementChild.checked) {
            // Sets active label to active styling
            labels[labelIndex].style.opacity = '1.0'
            labels[labelIndex].style.fontWeight = '900'
            break;
        }
    }
}

activeCheck()
colorCorellation()

    // When Order is changed
document.querySelector('#selector').addEventListener('change', () => {
    colorCorellation()
    activeCheck()
})

    //Hover effect activation on mouse on
document.querySelector('#selector').addEventListener('mouseover', (event) => {
    activeCheck()
    event.target.style.opacity = '0.95'
    event.target.style.textShadow = 'rgba(255,255,255,0.4) 1px 1px 3px'
})

// // Hover effect activation on mouse off
 document.querySelector('#selector').addEventListener('mouseout', (event) => {
     activeCheck()
})