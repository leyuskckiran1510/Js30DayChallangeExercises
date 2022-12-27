//START 12/27/22 01:58


//DOM(Document Object Model)-Day 3
//23.1

/*EXAMPLE


selectedElement.addEventListener('eventName', function(e) {
  // the activity you want to occur after the event will be in here
})
// or

selectedElement.addEventListener('eventName', e => {
  
  // the activity you want to occur after the event will be in here

  })
*/


//23.2 
//Click
/*

const clickFunc = e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      }
const button = document.querySelector('button')
      button.addEventListener('click',clickFun(e))

      OR

      <button onclick ='clickFunc(this)'>


*/
/*
Other UseFull Events
Double Click -> dblclick
Mouse enter -> mouseenter
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page
*/

//END 12/27/22 02:59