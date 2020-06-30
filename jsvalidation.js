
//  ?=.*[character set]  ----->anywhere atleast one ----> regular expression  

function validate()
{
    var name = document.getElementById("uname").value;
    var password = document.getElementById("upass").value;
    var confirm_password = document.getElementById("cpass").value;
    var mobile = document.getElementById("umobile").value;
    var email = document.getElementById("uemail").value;


    var exp_name = /^[a-zA-Z\s]+$/;  // Capital,small letters,spaces  are allowed only .
    var exp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$^&!]).{8,32}$/  //minimum 8 maximum 32
    var exp_mobile = /^[1-9][0-9]{9}$/  
    var exp_email = /^([a-zA-Z0-9_]{3,})@([a-zA-z0-9_]{3,}).([a-zA-z.]{3,6})$/ 
     
    // User Name validation 
    if(name.trim()=="")
    {
        document.getElementById("sp1").innerHTML="**Please Fill This Field";
        document.getElementById("uname").style.border="4px solid red";
        return false;
    }
    if(exp_name.test(name))
    {
        document.getElementById("uname").style.border="4px solid green";
    }
    else
    {
        document.getElementById("sp1").innerHTML="**Please Enter Character only";
        document.getElementById("uname").style.border="4px solid red";
        return false;   
    }


    //Password validation 
    if(password.trim().length<=7)
    {
        document.getElementById("sp2").innerHTML="**At least 8 characters are needed";
        document.getElementById("upass").style.border="4px solid red";
        return false;
    }
    if(exp_password.test(password))
    {
        document.getElementById("upass").style.border="4px solid green";
    }
    else
    {
        document.getElementById("upass").style.border="4px solid red";
        document.getElementById("sp2").innerHTML="At least 1 uppercase,lowercase,special symbol,digit is needed";
        return false;
    }


    //Confirm Password validation
    if(confirm_password.trim()=="")
    {
        document.getElementById("sp3").innerHTML="**Please Fill This Field";
        document.getElementById("cpass").style.border="4px solid red";
        return false;
    }
    if(confirm_password==password)
    {
        document.getElementById("cpass").style.border="4px solid green";
    }
    if(confirm_password!=password)
    {
        document.getElementById("sp3").innerHTML="**Password is not matching";
        document.getElementById("cpass").style.border="4px solid red";
        return false;
    }


    // Mobile number validation
    if(mobile.trim()=="")
    {
        document.getElementById("sp4").innerHTML="**Please Fill This Field";
        document.getElementById("umobile").style.border="4px solid red";
        return false;
    }
    if(exp_mobile.test(mobile))
    {
        document.getElementById("umobile").style.border="4px solid green";
    }
    else
    {
        document.getElementById("sp4").innerHTML="**Only Numbers are allowed";
        document.getElementById("umobile").style.border="4px solid red";
    }

    //Email Validation 
    if(email.trim()=="")
    {
        document.getElementById("sp5").innerHTML="**Please Fill This Field";
        document.getElementById("uemail").style.border="4px solid red";
        return false;
    }
    if(exp_email.test(email))
    {
        document.getElementById("uemail").style.border="4px solid  green";
    }
    else
    {
        document.getElementById("sp5").innerHTML="**Invalid Email ID";
        document.getElementById("uemail").style.border="4px solid red";
        return false;
    }

}