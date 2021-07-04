let instructoe = {
  firstName: "Souvik",
  isInstructor: true,
  favouriteNumber: [1, 2, 3, 4, 5],
};

Object.keys(instructoe); //O(n)

Object.values(instructoe); //O(n)

Object.entries(instructoe); //O(n)

instructoe.hasOwnProperty("firstName"); //O(1)
