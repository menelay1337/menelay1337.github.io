var userTable = document.getElementById("userList");
var users = JSON.parse(sessionStorage.getItem("users"));
var output = false
var counter = 0

//var outputBasket = false
//var basketList = document.getElementById("basketList")

//function outputBaskets(){
//	if (users.length === 0 ){
//		window.alert("Users list is empty!")
//	} else if (output === false) {
//		basketList.style.display="block";
//		for (let i = 0; i < users.length; i++) {
//			basketList.innerHTML += `<tr id="cart${i}"><td>${i+1}</td><td>${users[i].login}</td><td id="cart${i}info"></td></tr>`
//			let cartinfo = document.getElementById(`cart${i}info`)
//			for (let j = 0; j < users[i].cart.length; j++){
//				let currentcart = users[i].cart[j]
//				cartinfo.innerHTML += `<span class="fs-3">${j}. ${currentcart.name}:</span> <img src= "${currentcart.path}" width="300px" height="200px;">`
//			}
//		}
//	}
//
//}

function outputUsers(){
	if (users.length === 0 ){
		window.alert("Users list is empty!")
	} else if (output === false) {
		userTable.style.display="block";
		for (let i = 0; i < users.length; i++) {
			if (users[i] != null) {
		userTable.innerHTML += `<tr id="user${i}"><td>${i+1}.</td><td id="user${i}-login">${users[i].login}<button id="btn-login-${i}"type="button" onclick="takeInput(${i}, 'login')" class="ms-1 btn btn-secondary">edit</button></td> <td id="user${i}-email">${users[i].email}<button type="button" onclick="takeInput(${i}, 'email')" class="ms-1 btn btn-secondary">edit</button></td> <td id="user${i}-passwd">${users[i].passwd}<button type="button" onclick="takeInput(${i}, 'password')" class="ms-1 btn btn-secondary">edit</button></td><td><button type="button" onclick="deleteUser(${i})" class="ms-1 btn btn-secondary">delete</button></td></tr>`
			} else {
				users.slice(i, 1)
			}
		}
		userList.innerHTML += `<button class="p-3 m-3 btn btn-primary" id="menucloser" onclick="deleteMenu()">Remove menu</button>`
		output = true
	} else {
		window.alert("You already has output")
	}
}

function takeInput(num, type){
	let input = window.prompt(`Enter new ${type} for ${num+1}th user`)
	while (input.length < 4 && input.length > 10){
		input = window.prompt(`Enter again new ${type} for ${num+1}th user`)		
	}
	if ( type === "login") {
		users[num].login = input
	sessionStorage.setItem("users", JSON.stringify(users));
		window.alert("Successfully changed login")
	} else if ( type === "email") {
		users[num].email = input
	sessionStorage.setItem("users", JSON.stringify(users));
		window.alert("Successfully changed email")
	} else if (type === "password") {
		users[num].passwd = input
	sessionStorage.setItem("users", JSON.stringify(users));
		window.alert("Successfully changed password")
	} else {
		window.alert("Undefined type!")
	}
	deleteMenu()
	outputUsers()
}

function deleteUser(num){
	users.splice(num, 1)
	const deleted = document.getElementById(`user${num}`);
	deleted.remove();
	sessionStorage.setItem("users", JSON.stringify(users));
	counter = counter + 1

}

function deleteMenu(){
	userTable.style.display="none";
	output = false
	for (let i = 0; i < users.length; i++) {
		let elem = document.getElementById(`user${i}`)
		if (elem != null) {
			elem.remove()
		}
		//userTable.innerHTML += `<tr id="user${i}"><td id="user${i}-login">${users[i].login}</td> <td id="user${i}-email">${users[i].email}</td> <td id="user${i}-passwd">${users[i].passwd}</td></tr>`
	}
	for ( let child in userTable.children ) {
		child.remove()
	}	
	let closer = document.getElementById("menucloser")
	closer.remove()
	counter = 0
}
