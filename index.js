/*


*/

const randomInt = (min = 0, max = 19, number_of_digits = 0) => {
  let sign = 0;
  try {
    if (max < min) {
      throw new Error(
        "The maximum value can not be less than the minimum value."
      );
    } else {
      if (max < 0 && min < 0) {
        sign = 1;
        if (number_of_digits > 1) {
          let random_numbers = [];
          while (true) {
            if (random_numbers.length === number_of_digits) {
              return random_numbers;
            } else {
              if (sign === 0) {
                random_numbers.push(
                  Math.floor((Math.random() * 10000000000) % max)
                );
              } else {
                if (
                  Math.floor((Math.random() * 10000000000) % max) * -1 <
                  min
                ) {
                  random_numbers.push(
                    Math.floor((Math.random() * 10000000000) % max) * -1
                  );
                } else {
                  random_numbers.push(
                    Math.floor((Math.random() * 10000000000) % min) * -1
                  );
                }
              }
            }
          }
        } else {
          if (sign === 0) {
            return Math.floor((Math.random() * 10000000000) % max);
          } else {
            return Math.floor((Math.random() * 10000000000) % max) * -1 < min
              ? Math.floor((Math.random() * 10000000000) % max) * -1
              : Math.floor((Math.random() * 10000000000) % min) * -1;
          }
        }
      } else if (max >= 0 && min < 0) {
        if (number_of_digits > 1) {
          let random_numbers = [];
          while (true) {
            if (random_numbers.length === number_of_digits) {
              return random_numbers;
            } else {
              sign = Math.floor((Math.random() * 10) % 2);
              if (sign === 0) {
                random_numbers.push(
                  Math.floor((Math.random() * 10000000000) % max)
                );
              } else {
                if (
                  Math.floor((Math.random() * 10000000000) % max) * -1 <
                  min
                ) {
                  random_numbers.push(
                    Math.floor((Math.random() * 10000000000) % max) * -1
                  );
                } else {
                  random_numbers.push(
                    Math.floor((Math.random() * 10000000000) % min) * -1
                  );
                }
              }
            }
          }
        } else {
          sign = Math.floor((Math.random() * 10) % 2);
          if (sign === 0) {
            return Math.floor((Math.random() * 10000000000) % max);
          } else {
            return Math.floor((Math.random() * 10000000000) % max) * -1 < min
              ? Math.floor((Math.random() * 10000000000) % max) * -1
              : Math.floor((Math.random() * 10000000000) % min) * -1;
          }
        }
      } else {
        sign = 0;
        if (number_of_digits > 1) {
          let random_numbers = [];
          while (true) {
            if (random_numbers.length === number_of_digits) {
              return random_numbers;
            } else {
              random_numbers.push(
                Math.floor((Math.random() * 10000000000) % max)
              );
            }
          }
        } else {
          return Math.floor((Math.random() * 10000000000) % max);
        }
      }
    }
  } catch (error) {
    return error;
  }
};

const randomFloat = (min, max, number_of_digits) => {
  let sign = 0;

  const zeros = String(Math.abs(max)).length + 5;
  const number_of_digits_on_max_value = 1000;
  try {
    if (max < min) {
      throw new Error(
        "The maximum value can not be less than the minimum value."
      );
    } else {
      if (max < 0 && min < 0) {
        sign = 1;
        if (number_of_digits > 1) {
          let random_numbers = [];
          while (true) {
            if (random_numbers.length === number_of_digits) {
              return random_numbers;
            } else {
              if (sign === 0) {
                random_numbers.push(
                  Math.floor(Math.random() * number_of_digits_on_max_value) /
                    max
                );
              } else {
                if (
                  Math.floor(
                    (Math.random() * number_of_digits_on_max_value) % max
                  ) *
                    -1 <
                  min
                ) {
                  random_numbers.push(
                    (Math.floor(Math.random() * number_of_digits_on_max_value) /
                      max) *
                      -1
                  );
                } else {
                  random_numbers.push(
                    (Math.floor(Math.random() * number_of_digits_on_max_value) /
                      min) *
                      -1
                  );
                }
              }
            }
          }
        } else {
          if (sign === 0) {
            return (
              Math.floor(Math.random() * number_of_digits_on_max_value) % max
            );
          } else {
            return (Math.floor(Math.random() * number_of_digits_on_max_value) /
              max) *
              -1 <
              min
              ? (Math.floor(Math.random() * number_of_digits_on_max_value) /
                  max) *
                  -1
              : (Math.floor(Math.random() * number_of_digits_on_max_value) /
                  min) *
                  -1;
          }
        }
      } else if (max >= 0 && min < 0) {
        if (number_of_digits > 1) {
          let random_numbers = [];
          while (true) {
            if (random_numbers.length === number_of_digits) {
              return random_numbers;
            } else {
              sign = Math.floor((Math.random() * 10) % 2);
              if (sign === 0) {
                random_numbers.push(
                  Math.floor(Math.random() * number_of_digits_on_max_value) /
                    max
                );
              } else {
                if (
                  (Math.floor(Math.random() * number_of_digits_on_max_value) /
                    max) *
                    -1 <
                  min
                ) {
                  random_numbers.push(
                    (Math.floor(Math.random() * number_of_digits_on_max_value) /
                      max) *
                      -1
                  );
                } else {
                  random_numbers.push(
                    (Math.floor(Math.random() * number_of_digits_on_max_value) /
                      min) *
                      -1
                  );
                }
              }
            }
          }
        } else {
          sign = Math.floor((Math.random() * 10) % 2);
          if (sign === 0) {
            return (
              Math.floor(Math.random() * number_of_digits_on_max_value) / max
            );
          } else {
            return (Math.floor(Math.random() * number_of_digits_on_max_value) /
              max) *
              -1 <
              min
              ? (Math.floor(Math.random() * number_of_digits_on_max_value) /
                  max) *
                  -1
              : (Math.floor(Math.random() * number_of_digits_on_max_value) /
                  min) *
                  -1;
          }
        }
      } else {
        sign = 0;
        if (number_of_digits > 1) {
          let random_numbers = [];
          while (true) {
            if (random_numbers.length === number_of_digits) {
              return random_numbers;
            } else {
              random_numbers.push(
                Math.floor(Math.random() * number_of_digits_on_max_value) / max
              );
            }
          }
        } else {
          return (
            Math.floor(Math.random() * number_of_digits_on_max_value) / max
          );
        }
      }
    }
  } catch (error) {
    return error;
  }
};
module.exports = {
  randomInt,
  randomFloat,
};
