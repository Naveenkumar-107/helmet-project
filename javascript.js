function msg()
{
var name=document.payment.name.value;
var email=document.payment.email.value;
var atpos=email.indexOf("@");
var dotpos=email.lastIndexOf(".");
var phno=document.payment.phno.value;
var pincode=document.payment.pincode.value;
var addr=document.payment.addr.value;
if(name==null||name=="")
{
 	document.getElementById("n").innerHTML="enter correct name";
	return false;
}
else if(addr==null||addr=="")
{
 	document.getElementById("addr").innerHTML="enter address";
	return false;
}
else if(atpos<1||dotpos<atpos+2||dotpos+2>=email.length)
{
	document.getElementById("e").innerHTML="enter valid email ";
	return false;
}
	
else if(isNaN(phno)||phno.length<10||phno.length>10)
{
 	document.getElementById("ph").innerHTML="enter 10digit number";
	return false;
}
else if(isNaN(pincode)||pincode.length<6||pincode.length>6)
{
 	document.getElementById("pi").innerHTML="enter 6digit code";
	return false;
}
else
{
	alert("thank you for your response");
}
}