const accountId=1223234;
let accountEmail="Bhavy@gmail.com";
var accountPassword="1234589";
accountCity="Delhi";
let accountState;


//accountId=2;  // not allowed
accountEmail="umpho";
accountPassword="12";
accountCity="Bihar";


console.log(accountId);

/*
Prefer not use var because of issue 
in blocked scope and 
functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])