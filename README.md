# Mr. Roboger's Neighborhood


#### By Vera Weikel

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_
* _TDD_

## Description

Create a web application, with test driven development, taking a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list.

Describe: neighborhoodMessage()

<!-- First Test -->
Test: "It should return 1 if an integer input evaluates truthy."
Code:
const num = 1;
neighborhoodMessage(num);
Expected Output: 1

<!-- Second Test -->
Test: "It should return 0 if there is no input."
Code:
const num = "";
neighborhoodMessage(num);
Expected Output: 0

<!-- Third Test -->
Test: "It should return an array of numbers from a given integer input."
Code:
const num = 3;
neighborhoodMessage(num);
Expected Output: [0, 1, 2, 3];

<!-- Fourth Test -->
Test: "It should return "Beep!" for number 1 in a give index of an array."
Code:
const num = 3;
neighborhoodMessage(num);
Expected Output: [0,"Beep!", 2, 3];

<!-- Fifth Test -->
Test: "It should return "Beep!" for numbers that contain a 1 in a given index of an array."
Code:
const num = 15;
neighborhoodMessage(num);
Expected Output: [0, 'Beep!', 2, 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!'];

<!-- Sixth Test -->
Test: "It should return ""Boop!" for numbers that contain a 2 in a given index of an array."
Code:
const num = 15;
neighborhoodMessage(num);
Expected Output: [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!'];

<!-- Seventh Test -->
Test: "It should return numbers that contain a 3, "Won't you be my neighbor?""
Code:
const num = 15;
neighborhoodMessage(num);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!'];

<!-- Eigth Test -->
Test: "It should return numbers that contain a 3 first, then 2 second, and 1 last weighed by the highest order number at the top of heirarchy substitutions."
Code:
const num = 15;
neighborhoodMessage(num);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?', 'Beep!', 'Beep!'];

<!-- Ninth Test -->
Test: "It should return 0 if input is undefinded."
Code:
const num = "";
neighborhoodMessage(num);
Expected Output: 0

<!-- Tenth Test -->
Test: "It should return 0 if input is null."
Code:
const num = "";
neighborhoodMessage(num);
Expected Output: 0

## Setup/Installation Requirements

* _Open a terminal console on your personal computer_
* _Navigate to your Desktop_
* _Type $ git clone the [repo](https://github.com/QuietEvolver/mr-roboger-neighborhood.git)_
* _Navigate into the repo once cloned_
* _Once in the repository folder, open index.html in browser of choice._

## Known Bugs

* _No known bugs at this time._

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) _2023 Vera Weikel_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.