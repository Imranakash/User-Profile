
function checknamelength(){
	var x=document.getElementById('uname').value;
	if(x.length<5){
		alert("Name can't be <5 character!");
	}
}
function checkpassword(){
	var pass1=document.getElementById('pwd').value; 
	var pass2=document.getElementById('repwd').value; 
	if(pass1 !=pass2){
		alert("Did not match your password");
	}
}
function checkage(){

	var x=document.getElementById('age').value;
	if(x<18){
     alert("sorry you are under age");
	}
}
function checkcondition(){
	var y=document.getElementById('rem').checked;
	if(y==true){
		alert("");
	}
	else{
		alert("You must accept terms and conditions!");
	}

}