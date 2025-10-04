//Optional Chaining
const user = {
    name: 'Mike',
}
//Using the '?' tell it to check if address exist, and if not return undefined
console.log(user.address?.city);

//Nullish Coalescing Operator
let value = null;
//If value is null or undefined it will return 'Default Value'
let result = value ?? 'Default Value';

console.log(result);

//Both
console.log(user.address?.city ?? 'Unknown');


