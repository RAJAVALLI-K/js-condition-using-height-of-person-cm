// 1- Write a program to accept the height of a person in centimeter
// (like below150(Dwarf),
// 150 to 165(average person) ,
// 165 to 195(tallest person) and
// above 195(abnormal))and
// categorize the person according to their height.

let heightCm = parseInt(prompt('Enter a the height of centimeter:'));
if (heightCm < 150) {
    console.log("the person heightCm Dwarf");
}
else if (heightCm >= 150 && heightCm < 165) {
    console.log("average person");
}

else if (heightCm >= 165 && heightCm < 195) {
    console.log("tallest person");
}
else {
    console.log("abnormal");
}