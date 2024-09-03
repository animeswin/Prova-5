function addTask(){
  const taskInput = document.getElementById("taskInput")
  const taskText = taskInput.value.trim()
  if (taskText === "") {
    alert("Digite uma tarefa")
    return
  }

  const taskList = document.getElementById("taskList")
  const li = document.createElement("li")
  li.textContent = taskText

  const remover = document.createElement("button")
  remover.textContent = "Remover"
  remover.onclick = function () {
    taskList.removeChild(li)
  }

  const atualizar = document.createElement("button")
  atualizar.textContent = "Atualizar"
  atualizar.onclick = function () {
    const newTaskText = prompt(
      "Digite o novo texto para a tarefa:",
    )
    if (newTaskText !== null) {
      li.firstChild.textContent = newTaskText
    }
  }

  li.appendChild(atualizar)
  li.appendChild(remover)
  taskList.appendChild(li)

  taskInput.value = ""
  taskInput.focus()
}