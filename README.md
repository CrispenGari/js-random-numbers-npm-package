### What is this?

### js-random-numbers

This is package that generates random numbers for both unsigned and signed `integers` and `float` numbers

## Installation

```sh
$ npm install js-random-numbers
```

## Usage

## Import `js-random-numbers`

```sh
const randomNumber = require("js-random-numbers");
```

## OR

```sh
import randomNumber from "js-random-numbers";
```

## Then

For integer values

```
console.log(randomNumber.randomInt(5, 20, 20));
console.log(randomNumber.randomInt(5, 20));
```

The above will output the following:

```
[
   6,  0, 16, 12, 18,  6,  4,
  13,  3,  1, 12,  1, 15, 16,
   6, 16,  9,  8,  1, 11
]
4
```

## For Float values

```
console.log(randomNumber.randomFloat(0, 19, 5));
console.log(randomNumber.randomFloat(0, 19));
```

The above will output the following:

```
[
  21.57894736842105,
  35.63157894736842,
  43.73684210526316,
  18.473684210526315,
  49.78947368421053
]
1.1578947368421053
```

## Package Information

- randomises integers and float
- randomises an array of integers and float values
- randomises integers and float that are negative
