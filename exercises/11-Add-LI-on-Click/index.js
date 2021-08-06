let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var newLi = document.createElement("li");
	newLi.innerHTML = "Fourth element";                              
	document.querySelector("#myList").appendChild(newLi);
});
