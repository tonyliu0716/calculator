function calcTip(){
	var sub = document.getElementById("subtotal").value;
	var tip = document.getElementById("tip").value;
	document.getElementById("total").innerHTML = sub - sub * (tip / 100);
}