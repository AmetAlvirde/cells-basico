const person = 'Amet';
const age = 26;

const canIEnter = (strings, personExpression, ageExpression) => {
  if (ageExpression < 18) {
    return `${personExpression} no puede pasar`;
  }
  return `${personExpression} sí puede pasar`;
};

const output = canIEnter`${person} tiene ${age}`;

console.log(output);
