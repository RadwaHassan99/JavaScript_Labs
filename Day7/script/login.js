function pageOnLoad(){
    document.body.style.background="rgb(156, 120, 227)";
}

function highlightInput(elem){
    elem.style.background="rgb(131, 235, 249)";
}

function RemoveHighlight(elem){
    elem.style.background="white";
}


function validateData(){
    var uname=document.getElementById("uname").value;
    var pswd=document.getElementById("pswd").value;
    var cont=document.getElementById("container");
    if((uname==="admin") && (pswd==="123")){
        cont.style.background="green";
        alert("Welcome");
    }
    else{
        cont.style.background="red";
        alert("Not registered");
    }
}

function onFormSubmit() {	
	return false;
}

function submitHavor(){
    var submit=document.getElementById("submit");
    submit.style.cursor="pointer";
}






