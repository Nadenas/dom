// Your code here
let mylist = document.querySelector("ul")
let addToDo = document.getElementById("addToDo")
//let toRemove = document.querySelectorAll("li")



addToDo.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var icon = document.createElement("i");
        li.appendChild(span)
        .appendChild(icon)
        .classList.add('fa', 'fa-trash')        
        mylist.appendChild(li).appendChild(document.createTextNode(' ' + addToDo.value))
        bintrash();
    }
   
});
//window.onload = function() {
    
    /*document.getElementById("addToDo").addEventListener("change", function() {
        var input = document.getElementById("addToDo");
        var list = document.querySelector("ul");
        var item = document.createElement("li");
        item.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + input.value;
        list.appendChild(item);
    });
    console.log(mylist.children.length);*/
function bintrash() {
    let trashCan = document.querySelectorAll(".fa");
    for(let i = 0; i < trashCan.length; i++){
        trashCan[i].addEventListener("click", function(event){
           // event.target.parentElement.parentElement.remove(event.value);
           let li = event.target.parentNode.parentNode;
           removeElementList(li, li.parentNode);
        });
    }
}

function removeElementList(element, list) {
    list.removeChild(element);
}


