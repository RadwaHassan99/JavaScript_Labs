const getData = (APIlink)=>{
    return new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest();
        request.onload = function(){
            if(this.readyState===4 && this.status===200){
                resolve(JSON.parse(this.responseText));
            }
            else{
                reject(Error("Data Not Found"))
            }
        };
        request.open("GET",APIlink);
        request.send();
    });
};

getData("https://reqres.in/api/users?page=2").then((result) =>{
    return result.data;
}).then((result)=>{
    var container = document.getElementById("container");
    for(let i=0;i<result.length;i++){
        var mail = document.createElement("p");
        var avatar = document.createElement("img");
        mail.innerHTML="email: "+result[i].email;
        avatar.src=result[i].avatar;
        container.appendChild(mail);
        container.appendChild(avatar);  
        var line = document.createElement("hr");
        container.appendChild(line);
    }
    
})