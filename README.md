# javascript-weight-converter
The application converts user inputted values of a chosen measurement live on input.
The repl link is provided below.
https://repl.it/@Tyronita/JavaScript-Weight-Converter?language=html
# https://javascript-weight-converter--tyronita.repl.co/

The project is due an entire rework for the measurement conversion logic as the structure of embedded objects within an array is not suitable.
However for now the project is entirely functional and is refactored into 3 javascript files a stylesheet file and an html file.

Each measurement for conversion are stored in an object within an global array named 'choices'.
Each measurement stores 5 properties: it's name, it's name and 3 conversion objects which store it's conversion formula function which returns the inputted value's converted value.

Each measurement is color coded for user readability and style.
A user can choose which measurement it would like to convert via an disguised HTML radio input.

dynamic-styling.js is responsible for dynamically updating the output div elements to their respective color coded colors.
