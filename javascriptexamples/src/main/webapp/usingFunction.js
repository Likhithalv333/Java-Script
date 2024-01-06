function greet(){
	document.write("good morning...sathyatechnologies<br>");
	
}
function add(n1,n2){
	let sum;
	sum = n1+n2;
	document.write("addition of two numbers.."+sum+"<br>")
	
}
function billClc(name,price,quantity){
	let totalBill;
	totalBill = price*quanitity;
	return totalBill;
}
function dummy(){
	
}
//calling 
greet();
add(10,20);
let bill = billClc("sugar",123,5);
document.write("your bill ..."+bill+"<br>");
let res=dummy();
documnet.write("dummy return value..+res");