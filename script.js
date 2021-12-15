var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function createListItem(){
	var li = document.createElement("li");
	var div = document.createElement("div");
	var del = document.createElement("button");
	del.classList.add("delclass");
	del.innerHTML = "delete";
	ul.appendChild(div);
	div.append(li , del);
	li.appendChild(document.createTextNode(input.value));
	input.value = "";

}

function length(){
	return input.value.length;
}

function createOnClick(){
	if(length() > 0 ){
		createListItem();
	}
}

function createOnKeypress(event){
	if (length() > 0 && event.keyCode === 13 ){
		createListItem();
	}
}

function deleteListItem(element){
	if (element.target.className === "delclass"){
		element.target.parentElement.remove();
	}
}
function done(element){
	if (element.target.tagName === "LI"){
		element.target.classList.toggle("done");
	}
}

function ulclicks(element){
  done(element);
  deleteListItem(element);
}

input.addEventListener("keypress", createOnKeypress);
button.addEventListener("click", createOnClick);
ul.addEventListener("click", ulclicks);