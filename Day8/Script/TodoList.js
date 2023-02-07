function addTask(){
    var htmlContents = document.documentElement.innerHTML;
    var taskName = document.getElementById("taskName").value;
    var list = document.getElementById("list");
    if(taskName != null && taskName != ""){
        var list = document.getElementById("list");
        var rowTask = document.createElement("div");
        rowTask.className="rows";
        list.appendChild(rowTask);


        var tasks = document.createElement("p");
        tasks.className="tasks";
        var taskCont = document.createTextNode(taskName);
        tasks.appendChild(taskCont);
        rowTask.appendChild(tasks);
    
    
        var Complete = document.createElement("button");
        Complete.className="Complete";
        var True = document.createTextNode("✓");
        Complete.appendChild(True);
        rowTask.appendChild(Complete);
        Complete.addEventListener("click", function(){
            Complete.parentNode.firstElementChild.style.setProperty("text-decoration", "line-through");
        });


        var Remove = document.createElement("button");
        Remove.className="Remove";
        var False = document.createTextNode("x");
        Remove.appendChild(False);
        rowTask.appendChild(Remove);
        Remove.addEventListener("click", function(){
            Complete.parentNode.remove();
        });
    }
}

