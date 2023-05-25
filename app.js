var input=document.getElementById("todoInput").value
var ulparent = document.getElementById("ulParent")

function addTodo(){
    var liEle = document.createElement("li")
    var litxt = document.createTextNode(input)
    liEle.appendChild(litxt)
    ulparent.appendChild(liEle)
}
function delTodo(){
    ulparent.innerHTML = ""
}