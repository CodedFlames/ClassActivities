// create a new unordered list (ul) element
const mylist = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector("nav > p").remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(mylist);
// create two new list item (li) elements, and add some text to them
const list1 = document.createElement('li');
const list2 = document.createElement('li');

list1.textContent = "First New List Item";
list2.textContent = "Second New List Item";
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(list1);
document.querySelector(".nav-bar > ul").appendChild(list2);