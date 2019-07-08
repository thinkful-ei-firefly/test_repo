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

function daysInMonth(month, leapYear) {
  switch(month) {
    case 'January': 
      return `${month} has 31 days`;
    case 'Feburary': 
      return leapYear ? `${month} has 29 days` : `${month}'has 28 days`;
    case 'March':
      return `${month} has 31 days`;
    case 'April':
      return `${month} has 30 days`;
    case 'May':
      return `${month} has 31 days`;
    case 'June':
      return `${month} has 30 days`;
    case 'July':
      return `${month} has 31 days`;
    case 'August':
      return `${month} has 31 days`;
    case 'September':
      return `${month} has 30 days`;
    case 'October':
      return `${month} has 31 days`;
    case 'November':
      return `${month} has 30 days`;
    case 'December':
      return `${month} has 31 days`;
  }
}
console.log(daysInMonth('May', true))