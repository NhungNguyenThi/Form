
	function checkusername(){
		var user = document.getElementById('username').value;
		if(user == ""){
			document.getElementById('usernameid').innerHTML = "*Please fill the username";
			return false;
		}
		if((user.length < 3) || (user.length > 20)){
			document.getElementById('usernameid').innerHTML = "*Please fill the username between 3 and 20 char";
			return false;
		}
		if(!isNaN(user)){
			document.getElementById('usernameid').innerHTML = "*Please enter character";
			return false;
		}
	}

	function checkpa(){
		var pass = document.getElementById('password').value;
		if(pass == ""){
			document.getElementById('passwords').innerHTML = "*Please fill the password";
			return false;
		}
		if((pass.length < 5) || (pass.length > 20)){
			document.getElementById('passwords').innerHTML = "*Please fill the password between 5 and 20";
			return false;
		}
	}
	function checkpass(){
		var pass = document.getElementById('password').value;
		var conpass = document.getElementById("conpassw").value;
		if(pass!=conpass){
			document.getElementById('confrmpassword').innerHTML = "*Password are not same";
			return false;
		}
		if(conpass == ""){
			document.getElementById('confrmpassword').innerHTML = "*Please fill the confirm password";
			return false;
		}	
	}
	function checkphone(){
		var number = document.getElementById("numbermobile").value;
		if(number == ""){
			document.getElementById('mobilenumber').innerHTML = "*Please fill the number ";
			return false;
		}
		if(number.length < 10 || number.length > 11){
			document.getElementById('mobilenumber').innerHTML = "*Number should be 10->11 digits";
			return false;
		}
		if(isNaN(number)){
			document.getElementById('mobilenumber').innerHTML = "*Number should conatins only digits";
			return false;
		}
	}
	function checkEmail(){
		var email = document.getElementById("emailid").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(email == ""){
			document.getElementById("emailids").innerHTML = "Please fill the email";
			return false;
		}
		if(!filter.test(email)){
			document.getElementById("emailids").innerHTML = "Email is false";
			return false;
		}
		else{
			document.getElementById("emailids").innerHTML = "Email is true";
		}
	}

	