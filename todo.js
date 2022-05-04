var input = document.getElementById("inputt");
var button = document.getElementById("add");
var todo = document.getElementById("todo");


button.addEventListener("click", function(){
    var p = document.createElement("p");
    p.classList.add("text");
    p.innerText = input.value;
    todo.appendChild(p);
    p.style.cursor = "pointer";
    if (input.value == ""){
        p.innerText = "OOPS YOU MISSED THIS LINE";
        window.alert("Please input what u gonna do")
    }
    p.addEventListener('click', function(){
        p.style.textDecoration = "line-through";
    })
    p.addEventListener('dblclick', function(){
        todo.removeChild(p);
    })
});