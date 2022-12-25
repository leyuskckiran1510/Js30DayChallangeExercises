//STARTED 12/25/22 02:25

// Closure
//19.1
/*
Closure -> Basically  inner Function accessing parent function methods/data

JavaScript allows writing function inside an outer function.
 We can write as many inner functions as we want. 
 If inner function access the variables of outer 
 function then it is called closure.
*/
//EXAMPLE
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne,
        minusOne:minusOne
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne())
console.log(innerFuncs.minusOne())

