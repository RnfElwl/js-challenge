const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const onLoginBtnClick = () => {
  console.log(loginInput.value);
};

loginButton.addEventListener("click", onLoginBtnClick);
