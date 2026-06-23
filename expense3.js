if(localStorage.getItem("loggedIn") !== "true"){
	window.location.href="index.html"
}

let list = document.getElementById("list")
let bal = document.getElementById("bal")
let total = 0
let transactions = JSON.parse(localStorage.getItem("transactions")) || []
for(let item of transactions){
	let li = document.createElement("li")
	li.innerText = item.desc+" "+item.amount
	list.appendChild(li)
	let delbtn = document.createElement("button")
	delbtn.innerText = "remove"
	li.appendChild(delbtn)
	delbtn.addEventListener("click",function(){
		transactions = transactions.filter(function(t){
			return !(t.desc === item.desc && t.amount === item.amount)
		})
		localStorage.setItem(
		"transactions",JSON.stringify(transactions)
		)
		total = total - item.amount
		bal.innerText = "Balance:"+total
		li.remove()
	})
	total += item.amount
}
bal.innerText = "Balance:"+total
function addList(){
	let desc = document.getElementById("desc").value
	let amount = parseInt(document.getElementById("amount").value)
	if(desc === "" || isNaN(amount)){
		alert("Please Enter Description and Amount")
		return
	}
	transactions.push({
		desc:desc,
		amount:amount
	})
	localStorage.setItem(
	"transactions",JSON.stringify(transactions)
	)
	
	let li = document.createElement("li")
	li.innerText = desc+" - "+amount
	list.appendChild(li)
	total = total + amount 
	bal.innerText = "Balance:"+total
	
	let delbtn = document.createElement("button")
	delbtn.innerText = "remove"
	delbtn.addEventListener("click",function(){
		transactions = transactions.filter(function(t){
			return !(t.desc === desc && t.amount === amount)
		})
		localStorage.setItem(
		"transactions",JSON.stringify(transactions)
		)
		total = total - amount
		bal.innerText = "Balance:"+total
		li.remove()
	})
	li.appendChild(delbtn)
	document.getElementById("desc").value=""
	document.getElementById("amount").value=""
}
function logout(){
	localStorage.removeItem("loggedIn")
	window.location.href="index.html"
}
