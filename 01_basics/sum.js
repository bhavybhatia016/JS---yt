let myArray=[1,2,3,4,5];
function sumo(numberss) {
    let sum=0;
    for(let hi = 0; hi < numberss.length; hi++) {
        sum+=numberss[hi];
    }
    return sum;
}
console.log(sumo(myArray));