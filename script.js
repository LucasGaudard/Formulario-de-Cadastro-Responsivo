const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

let formSubmitted = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formSubmitted = true;
  checkForm();
});

firstname.addEventListener("blur", () => {
  if (formSubmitted) checkInputFirstname();
});

email.addEventListener("blur", () => {
  if (formSubmitted) checkInputEmail();
});

password.addEventListener("blur", () => {
  if (formSubmitted) checkInputPassword();
});

confirmPassword.addEventListener("blur", () => {
  if (formSubmitted) checkInputConfirmPassword();
});

// ================= FUNÇÕES =================

function checkInputFirstname() {
  const value = firstname.value.trim();

  if (value === "") {
    errorInput(firstname, "Preencha o primeiro nome.");
  } else {
    successInput(firstname);
  }
}

function checkInputEmail() {
  const value = email.value.trim();

  if (value === "") {
    errorInput(email, "O e-mail é obrigatório.");
  } else {
    successInput(email);
  }
}

function checkInputPassword() {
  const value = password.value;

  if (value === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (value.length < 8) {
    errorInput(password, "Mínimo de 8 caracteres.");
  } else {
    successInput(password);
  }
}

function checkInputConfirmPassword() {
  const passwordValue = password.value;
  const confirmValue = confirmPassword.value;

  if (confirmValue === "") {
    errorInput(confirmPassword, "Confirme a senha.");
  } else if (confirmValue !== passwordValue) {
    errorInput(confirmPassword, "As senhas não coincidem.");
  } else {
    successInput(confirmPassword);
  }
}

function checkForm() {
  checkInputFirstname();
  checkInputEmail();
  checkInputPassword();
  checkInputConfirmPassword();

  const inputs = form.querySelectorAll(".input-box");
  const isValid = [...inputs].every(input =>
    !input.classList.contains("error")
  );

  if (isValid) {
    alert("CADASTRADO COM SUCESSO!");
    form.reset();
    inputs.forEach(input => input.classList.remove("error"));
    formSubmitted = false;
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.classList.add("error");
}

function successInput(input) {
  const formItem = input.parentElement;
  formItem.classList.remove("error");
}
