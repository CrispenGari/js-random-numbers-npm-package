### What is this?

### random-question

This is package that generates random numbers for both unsigned and signed `integers` and `float` numbers

## Installation

```sh
$ npm install random-question
```

## Usage

## Import `random-question`

```sh
const randomQuestion = require("random-question");
```

## OR

```sh
import randomQuestion from "random-question";
```

## Then

```
console.log(randomQuestion.randomQuestion());

```

The above will output the following:

```
What’s the weirdest conversation you’ve eavesdropped on?
```

## OR

```
console.log(randomQuestion.randomQuestion(5))

```

The above will output an array of questions for example:

```
// Depending on the number of question that you passed to the function randomQuestion

[
  ' What’s something that I don’t know?',
  ' What’s the most rage inducing game you’ve ever played?',
  ' What food is delicious but a pain to eat?',
  ' What’s fine in small numbers but terrifying in large numbers?',
  ' What was the most amazing physical feat you’ve managed to pull off?'
]

```
