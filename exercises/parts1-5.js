// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
// Declare and assign these variables.
// Remember: variable declarations in TypeScript include the type!
// milesToMars is a number with the value of kilometersToMars * milesPerKilometer.
// hoursToMars is a number with the value of milesToMars / speedMph.
// daysToMars is a number with the value of hoursToMars / 24.
// Write a console.log statement that prints out the days to Mars.
// Use template literal syntax and the variables ${spacecraftName} and ${daysToMars}.
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
console.log("Miles to Mars: ".concat(milesToMars, "\nHours to Mars: ").concat(hoursToMars, "\nDays to Mars: ").concat(daysToMars, "\n"));
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
