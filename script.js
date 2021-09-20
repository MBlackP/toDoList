var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement('div');
	var li = document.createElement("li");
	var deleteButton = document.createElement('button');

	div.classList.add('wrapper');
	ul.appendChild(div);
	div.append(li, deleteButton);
	li.classList.add('taskClass');
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	deleteButton.classList.add('deleteClass');
	deleteButton.innerHTML='Delete';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.tagName === 'li') {
		task.target.classList.toggle('done');
	}
}

function deleteListElement(element) {
	if (element.target.className === 'deleteClass') {
		element.target.parentElement.remove();
	}
}

function mouseClickHandler(element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener('click', mouseClickHandler);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);