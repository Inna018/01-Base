//task 1:

function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input is not an array");
  }

  if (isNaN(first) || isNaN(second)) {
    throw new TypeError("Input is not a number");
  }

  const firstIndex = parseInt(first, 10);
  const secondIndex = parseInt(second, 10);

  if (
    firstIndex < 0 ||
    firstIndex >= arr.length ||
    secondIndex < 0 ||
    secondIndex >= arr.length
  ) {
    throw new RangeError("Index out of range");
  }

  return arr[firstIndex] + arr[secondIndex];
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(sumSliceArray(arr, 3, 5));

try {
  const arr2 = [1, 2, 3, 4, 5, 6, 7];
  sumSliceArray(arr2, 8, "five");
} catch (e) {
  console.log("Error");
}

//task 2:

function checkAge() {
  const name = prompt("Enter your name:");
  const age = prompt("Enter your age:");
  const status = prompt("Enter your status (admin, moderator, user):");

  if (!name || !age || !status) {
    throw new Error("The field is empty!");
  }

  const parsedAge = parseInt(age, 10);

  if (isNaN(parsedAge)) {
    throw new TypeError("Age must be a number");
  }

  if (parsedAge < 18 || parsedAge > 70) {
    throw new RangeError("You are not within the age range to watch the movie");
  }

  if (status !== "admin" && status !== "moderator" && status !== "user") {
    throw new EvalError("Invalid status entered");
  }

  alert("You can watch a movie!");
}

try {
  setInputValues("Bob", "18", "user");
  checkAge();
} catch (error) {
  console.log(error.name);
}

try {
  setInputValues("Bob", "ten", "user");
  checkAge();
} catch (error) {
  console.log(error.name);
}

try {
  setInputValues("Bob", "22", "guest");
  checkAge();
} catch (error) {
  console.log(error.name);
}
