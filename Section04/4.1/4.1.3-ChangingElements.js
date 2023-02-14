// print the outer HTML of the navigation bar
const nav = document.querySelector(".nav-bar");
console.log(nav.outerHTML);

// print the inner HTML of the navigation bar
console.log(nav.innerHTML);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);
// select the classList for the first class-week, then add the class "week-1"

//skipped but will see in class tonight.

// select the img element and add a src attribute
document.querySelector("img").src = "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTmVHpqFcWzxYAP4et-KcgSgkv9VMbUUvz76tDZd1jbqEsSvOIRvZk7ETa0sD_jJpK2710hmPKVt5a8bAE";
document.querySelector("img").width = "200";

// change the font color of the h1 element
document.querySelector("h1").style.color = "blue";