var userNameInput = document.getElementById("userName")
var userEmailInput = document.getElementById("userEmail")
var userPasswordInput = document.getElementById("userPassword")
var signUp = document.querySelector("button");

var arrayList = [];
if (localStorage.getItem("userList") != null) {
     arrayList = JSON.parse(localStorage.getItem("userList"))
}




signUp.addEventListener('click', function (e) {
     if (checkEmail()) {
          return;
     }
     if (checkName()) {
          return;
     }


     var user = {
          name: userNameInput.value,
          email: userEmailInput.value,
          password: userPasswordInput.value,
     }
     if (validateInput(userNameInput) &&
          validateInput(userEmailInput) &&
          validateInput(userPasswordInput)) {
          arrayList.push(user)
          console.log(arrayList);
          cleanInputs();
          localStorage.setItem("userList", JSON.stringify(arrayList))
          window.location.href = "login.html"
     } else {
          lightBoxContainer.classList.remove("d-none")
     }



})


function cleanInputs() {
     userNameInput.value = "";
     userEmailInput.value = "";
     userPasswordInput.value = "";
     userName.classList.remove("is-valid", "is-invalid");
     userEmail.classList.remove("is-valid", "is-invalid")
     userPassword.classList.remove("is-valid", "is-invalid")
}



function checkEmail() {
     for (var i = 0; i < arrayList.length; i++) {
          if (arrayList[i].email === userEmailInput.value) {
               Swal.fire({
                    icon: "error",
                    title: "Oops... Something went wrong!",
                    text: 'Email already exist',

               });
               return true;
          }
     }
     return false;
}




function checkName() {
     for (var i = 0; i < arrayList.length; i++) {
          if (arrayList[i].name === userNameInput.value) {
               Swal.fire({
                    icon: "error",
                    title: "Oops... Something went wrong!",
                    text: 'User Name already exist',

               });
               return true;
          }
     }
     return false;
}




function validateInput(element) {


     var regex = {
          userName: /^[A-Za-z0-9_-]{3,10}\s?/,
          userEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
          userPassword: /^(?=.*?[A-Z])(?=.*?[a-z]?)(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

     }
     console.log(regex[element.id].test(element.value));



     if (regex[element.id].test(element.value)) {
          element.classList.add("is-valid");
          element.classList.remove("is-invalid")
          return true
     } else {
          element.classList.add("is-invalid");
          element.classList.remove("is-valid")
          return false
     }

}




var closeBtn = document.querySelector("#closeBtn");

closeBtn.addEventListener("click", function (e) {

     lightBoxContainer.classList.add("d-none");
})


lightBoxContainer.addEventListener("click", function (e) {

     lightBoxContainer.classList.add("d-none");
})

lightBoxContainer.firstElementChild.addEventListener("click", function (e) {
     e.stopPropagation();
})


