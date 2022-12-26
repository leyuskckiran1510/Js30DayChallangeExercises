//START 12/25/22 03:18

//Document Object Model (DOM) - Day 1


//21.1

/*
Getting elements by tag name
getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object

// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }



Getting elements by class name
getElementsByClassName() method returns an HTMLCollection object.

const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}


Getting an element by id
getElementsById() targets a single HTML element

Getting elements by using querySelector methods (think of it like other selector but in CSS style)
The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name
*/

//21.2
/*
Adding Atributes Common HTML attributes: 

ariaAtomic ariaAutoComplete ariaBusy ariaChecked ariaColCount ariaColIndex ariaColIndexText ariaColSpan 
ariaCurrent ariaDescription ariaDisabled ariaExpanded ariaHasPopup ariaHidden ariaKeyShortcuts ariaLabel 
ariaLevel ariaLive ariaModal ariaMultiLine ariaMultiSelectable ariaOrientation ariaPlaceholder ariaPosInSet 
ariaPressed ariaReadOnly Non-standard ariaRelevant ariaRequired ariaRoleDescription ariaRowCount ariaRowIndex 
ariaRowIndexText ariaRowSpan ariaSelected ariaSetSize ariaSort ariaValueMax ariaValueMin ariaValueNow 
ariaValueText assignedSlot attributes childElementCount children classList className clientHeight clientLeft
clientTop clientWidth firstElementChild id innerHTML lastElementChild localName Non-standard msRegionOverflow
namespaceURI nextElementSibling Non-standard openOrClosedShadowRoot outerHTML part prefix 
previousElementSibling scrollHeight scrollLeft Non-standard scrollLeftMax scrollTop Non-standard 
scrollTopMax scrollWidth shadowRoot slot tagName 


Atributes are like a Object so we can just use the keys like above and assign it with desire value
like xyz.id ='asd' xyz.className = 'asd'
 Or We can use setAtribute() method to;
 like xyz.setAttribute('id','idas')

//classList as Class can have multiple values it has some additional METHODS OF IT
.add('title', 'header-title')
.remove('id','idsa')
*/


