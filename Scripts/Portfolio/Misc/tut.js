//Excercise 1
// This function has no arguments, parameters, initilized variables or outputs
function exercise1(length, width) {
    let area = length * width;
    return area;
}
console.log(exercise1(5, 8));

//Exercise2
function exercise2(int1, int2) {
    let answer1 = int1 + int2;
    if (int1 === int2) {
        return answer1 * 3;
    }
    else {
        return answer1;
    }
}
console.log(exercise2(2, 9));
console.log(exercise2(2, 2));

//Exercise3
function exercise3() {
    //Generate 2 random values exclusive of 51
    let randomNum1 = Math.floor(Math.random() * 51);
    let randomNum2 = Math.floor(Math.random() * 51);

    if (randomNum1 === 50 || randomNum2 === 50 || (randomNum1 + randomNum2) === 50) {
        return true;
    }
    else {
        return false;
    }
}
console.log(exercise3());

//Exercise4
function exercise4(current, voltage) {
    let power = current * voltage;
    return power;
}
console.log(exercise4(4, 2));

//Exercise5
function exercise5() {
    numCheck = false;
    //setting random number between 1 and 10
    let random = Math.floor(Math.random() * 11);
    console.log(random);
    //checking if random number is less than 5 and store
    if (random<5){
        numCheck = true;
    }
    else if (random>5) {
        numCheck = false;
    }
    if (numCheck===true) {
        return "This number is less than 5";
    }
    else if (numCheck===false) {
        return "This number is equal to or more than 5";
    }
}
console.log(exercise5());