function validateForm() {
     let userName = (document.getElementById('userName').value).trim();
     let password = document.getElementById('password').value;

     if (userName == "") {
       document.getElementById('error').innerHTML = "Please Enter Username";
       return false;
     }

     if(password == "") {
       document.getElementById('error').innerHTML = "Please Enter Password";
       return false;
     }

     // if(userName == "Admin") {
     //   document.querySelector("fOrm").setAttribute("action", "manageOrders.html");
     // }

}
