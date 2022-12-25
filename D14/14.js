//START 12/23/22 02:28
//Today's Topic is error handeling and the repo had a error had to use way back machine


// Error Handling

//14.1

try {
  // code that may throw an error
} catch (err) { // err has methods like name ,message
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}

//Error Throw
//14.2
//Gnerating own errors 
const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()

//END 12/23/22 02:34
//Not much here