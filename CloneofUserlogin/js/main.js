// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

let Accounts = loadAccount();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let Username = document.getElementById("username").value;
  let Password = document.getElementById("password").value;
  let Confirm = document.getElementById("confirm").value;
  let Check = CheckUsername(Username);

  if(!(Password === Confirm)){
    return alert("Please redo Password Confirmation");
  }else if(CheckInputFeild(Username, Password, Confirm) === -1){
    return alert("Pleas type something in the input feilds");
  }else{
    if(Check === -1){
      Accounts.push(CreateAccount(Username, Password));
      saveAccount();
      loadAccount();
      alert("Your username has been added");
    } else{
      return alert("This username, or password is already in use");
    }
  } 
}



// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  console.log('Sign In Btn Clicked');
  let Username = document.getElementById("signUpUsername").value;
  let Password = document.getElementById("signUpPassword").value;
  let count = 0;

  for(let i = 0; i < Accounts.length; i++){
    if(Username === Accounts[i].Username && Password === Accounts[i].Password){
      count += 1;
    }
  }
  if(count <= 0){
    alert("Username, or password Doesn't exist, or you misspelled it.");
  } else if(CheckInputFeild(Username, Password)){
    return alert("Pleas type something in the input feilds");
  } else{
    alert("You are now logged in!");
  }
}



//Helper Functions sign up
function CreateAccount(username, password){
  return {
    Username: username,
    Password: password
  }
}


function saveAccount() {
  localStorage.setItem("Accounts", JSON.stringify(Accounts));
}


function loadAccount(){
  let accountStr = localStorage.getItem("Accounts");
  return JSON.parse(accountStr) ?? [];
}


function CheckUsername(username){
  let count = 0;
  for(let i = 0; i < Accounts.length; i++){
    if(username === Accounts[i].Username){
      count += 1;
    }
  }
  if(count <= 0){
    return -1;
  }
}

function CheckInputFeild(input1, input2, input3){
  if(!input1 || !input2 || !input3){
    return -1;
  }
}