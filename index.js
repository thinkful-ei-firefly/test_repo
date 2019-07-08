
function jediName(firstName, lastName) {
  lName = lastName.slice(0, 3);
  fName = firstName.slice(0, 2);
  return lName + fName;
}

console.log(jediName('bob', 'smith'));

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond.');
  } else if (num.isFinite() && > 0) {
    console.log('To infinity');
  } else if (num.isFinite() && < 0) {
    console.log('To negative infinity');
  } else (num === 0) {
    console.log('Staying home');
  }
  }