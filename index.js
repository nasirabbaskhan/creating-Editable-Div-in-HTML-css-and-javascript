//Create a new div
let createdDiv = document.createElement('div')

// Add the text to that created element
let val = localStorage.getItem('text')
let text 
if(val== null){
text = document.createTextNode('This is my element. click to edit it')
}
else
{
text = document.createTextNode(val)
}
createdDiv.appendChild(text)

//Give element id , style and class
createdDiv.setAttribute('id', 'elem')
createdDiv.setAttribute('style', 'border:2px solid red; width:154px; margin:34px; padding:23px;')
createdDiv.setAttribute('class', 'elem')

// grap the main container
let container = document.querySelector('.container')
let first = document.getElementById('myfirst')


//insert the div before element with id myfirst
container.insertBefore(createdDiv, first)


//add event listener to the createdDiv
createdDiv.addEventListener('click', function(){
let noTextAreas= document.getElementsByClassName('textarea').length; 
if(noTextAreas== 0)
{
let html = createdDiv.innerHTML;
createdDiv.innerHTML= `<textarea id="textarea" class="textarea" rows=6 cols=20>${html}</textarea>`;

console.log("Thank you fr listening" , createdDiv)
}
//listen for the blure event on textarea
let textarea= getElementById('textarea')
textarea.addEventListener('blur', function(){
createdDiv.innerHTML = textarea.value
localStorage.setItem('text', createdDiv.innerHTML )
console.log(createdDiv)
})
})