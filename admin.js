var userTable = document.getElementById("userList");
var users = JSON.parse(sessionStorage.getItem("users"));
var output = false

function outputUsers(){
	if (output === false) {
		userTable.style.display="block";
		for (let i = 1; i <= users.length; i++) {
			userTable.innerHTML += `<tr id="user${i}"><td>${i}.</td><td id="user${i}-login">${users[i].login}</td> <td id="user${i}-email">${users[i].email}</td> <td id="user${i}-passwd">${users[i].passwd}</td></tr>`
		}
		userList.innerHTML += `<button class="p-3 m-3 btn btn-primary" id="menucloser" onclick="deleteMenu()">Remove menu</button>`
		output = true
	} else {
		alert("You already has output")
	}
}

function edit(num) {
	let answer = window.prompt(`Which property you want to change? \n email ::: login ::: password ::: no`);
	if (answer != "no" ){
			if ( answer === 'login' ) {
				let assign = window.prompt("Enter the value for login ::: no")
				if ( assign != 'no' ) { 
				while (assign.length > 10 || assign.length == 0) {
					assign = window.prompt("Enter the value with length less than 10");
				}
				users[num].login = assign;
				window.alert(`login changed to ${assign}`)
				}
				

			} else if ( answer === 'email' ) {
				let assign = window.prompt("Enter the value for email ::: no")
				if ( assign != 'no' ) { 
				while (assign.length > 10 || assign.length == 0) {
					assign = window.prompt("Enter the value with length less than 10");
				}
				users[num].email = assign;
				window.alert(`email changed to ${assign}`)
				}
			} else if ( answer === 'password' ) {
				let assign = window.prompt("Enter the value for password ::: no")
				if ( assign != 'no' ) { 
				while (assign.length > 15 || assign.length < 8) {
					assign = window.prompt("Enter the value with length greater than 8 and lesser 15");
				}
				users[num].passwd = assign;
				window.alert(`password changed to ${assign}`);
			}} else { window.alert('undefined property');}
					

				
	} else {
	window.alert("no then returning to panel");
	}
			let elem = document.getElementById(`user${num}`);
			elem.remove();
			userList.innerHTML += `<li id="user${num}" class="container p-2 m-2 border border-danger rounded"> login: ${users[num].login}; email: ${users[num].email}; passwd: ${users[num].passwd}; <button onclick="deleteItem(${num})">delete</button> <button onclick="edit(${num})">edit</button></li>` 
			sessionStorage.setItem("users", JSON.stringify(users));

}

function deleteItem(num){
	delete users[num];
	const deleted = document.getElementById(`user${num}`);
	deleted.remove();
}

function deleteMenu(){
	userTable.style.display="none";
	output = false
	for (let i = 0; i < users.length; i++) {
		let elem = document.getElementById(`user${i}`)
		elem.remove()
		//userTable.innerHTML += `<tr id="user${i}"><td id="user${i}-login">${users[i].login}</td> <td id="user${i}-email">${users[i].email}</td> <td id="user${i}-passwd">${users[i].passwd}</td></tr>`
	}
	let closer = document.getElementById("menucloser")
	closer.remove()
}
