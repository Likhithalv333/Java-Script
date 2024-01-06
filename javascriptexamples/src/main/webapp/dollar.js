function convertTorupee(){
	const dollarinput=document.getElementById('dollarinput').value;
	const rupeeoutput=(parseFloat(dollarinput))*83.8;
	document.getElementById('rupeeoutput').value=rupeeoutput.toFixed(2);
}