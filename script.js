function showLogin() {
  hideAll();
  document.getElementById("login").classList.remove("hidden");
}

function showRegister() {
  hideAll();
  document.getElementById("register").classList.remove("hidden");
}

function showApp() {
  hideAll();
  document.getElementById("app").classList.remove("hidden");
}

function hideAll() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("register").classList.add("hidden");
  document.getElementById("app").classList.add("hidden");
}

function register() {
  let email = document.getElementById("regEmail").value;
  let senha = document.getElementById("regSenha").value;

  localStorage.setItem("user", JSON.stringify({ email, senha }));
  alert("Cadastrado!");
  showLogin();
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let senha = document.getElementById("loginSenha").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.senha === senha) {
    showApp();
  } else {
    alert("Erro no login!");
  }
}

// DRAG AND DROP
function addTask(coluna) {
  let texto = prompt("Digite a tarefa:");

  if (texto) {
    let task = document.createElement("div");
    task.className = "task";
    task.innerText = texto;
    task.draggable = true;

    task.addEventListener("dragstart", () => {
      task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
      task.classList.remove("dragging");
    });

    document.getElementById(coluna).appendChild(task);
  }
}

document.querySelectorAll(".tasks").forEach(col => {
  col.addEventListener("dragover", e => {
    e.preventDefault();
    const task = document.querySelector(".dragging");
    col.appendChild(task);
  });
});