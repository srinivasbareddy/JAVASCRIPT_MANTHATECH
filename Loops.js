// for-loop
for (let i = 1; i < 10; i++) {
    console.log(i);
}

// Ex:- for-loop without initializer inside paranthesis
let j = 1;
for (; j < 10; j += 2) {
    console.log(j);
}

// Ex:- for-loop without condition inside paranthesis
for (let j = 1; ; j += 2) {
    console.log(j);
    if (j > 10) {
        break;
    }
}

// Ex:- for-loop without expression inside paranthesis
let k = 1;
for (;;) {
    if (k > 10) {
        break;
    }
    console.log(k);
    k += 2;
}

// Ex:- For loop without loop-body
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum);


// while-loop
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}


// do-while loop
let counter = 0;
do {
    console.log(counter);
    counter++;
} while (counter < 5)


// Ex:- for loop using "break"
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
        break;
    }
}


// Ex:- for-loop using "continue"
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Ex:- while-loop using "continue"
let i = 0;
while (i < 10) {
    i++;
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
