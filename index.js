function jediName(firstName, lastName) {
  lName = lastName.slice(0, 3);
  fName = firstName.slice(0, 2);
  return lName + fName;
}

console.log(jediName("bob", "smith"));

function beyond(num) {
  if (num === Infinity) {
    console.log("And beyond.");
  } else if (num.isFinite() && num > 0) {
    console.log("To infinity");
  } else if (num.isFinite() && num < 0) {
    console.log("To negative infinity");
  } else {
    console.log("Staying home");
  }
}

const decode = message => {
  const arr = message.split(" ");

  const answer = arr.map(word => {
    if (word[0] === "a") {
      return word[2];
    } else if (word[0] === "b") {
      return word[3];
    } else if (word[0] === "c") {
      return word[4];
    } else if (word[0] === "d") {
      return word[5];
    } else {
      return " ";
    }
  });
  return answer.join(" ");
};

console.log(decode("craft block argon meter bells brown croon droop"));
