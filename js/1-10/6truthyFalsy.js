// ================== locuras de js =============== //

console.log('============ verdaderos ==============');
// true
console.log(Boolean('1'));
console.log(Boolean(' '));
console.log(Boolean('a'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function(){}));

console.log('============ falsos ==============');
// falsos
console.log(Boolean(0));
console.log(Boolean());
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(false);
