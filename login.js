let otp = 0
function generate(){
	let user = document.getElementById("name").value
	if(user === ""){
		alert("please enter user name")
		return
	}
	otp = Math.floor(1000+Math.random()*9000)
	alert("Your otp is:"+otp)	
}
function login(){
	let uotp = document.getElementById("otp").value
	if(Number(uotp) === otp){
		localStorage.setItem(
		"loggedIn","true"
		)
		otp=0
		window.location.href="expense1.html"
	}
	else{
		alert("Invalid otp")
	}
}