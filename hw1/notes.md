# Updates to HW 1 09/30/2023

## Changes Made (HTML File)

1. Re-styled the html file according to homework requirements using Bootstrap (eleminated inline style)
2. Updated the input card to look the same as homework style
3. Modified the 'label' to wrap the input for accessibility

## Why Changes Were Made (HTML File)

These changes reflect the requirements as outlined in the homework style guide. The background color is 'dark' rather than 'secondary' as the color scheme looks better IMO. The 'lable' was not recognized as the label for the input so I wrapped the input within the lable to handle the accessibility warning.

## Changes Made (Palindrome.js)

1. Added a function to verify that the entered number is positive
2. Added a function to build a custom paragraph element allowing 'color' 'font size' and 'message'
3. Modified ternary arguments to if() validation with custom throw new Error()

## Why Changes Were Made (Palindrome.js)

1. The homework requirement stated that input should validate that the input is positive.
2. To allow this program to scale I have added a re-usable paragraph element
3. For consistent behavior, I added the if() validation to functions in order to immediately throw a new Error()
