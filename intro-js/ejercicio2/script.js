const handlerData = (data, cache=true) => {
  data.forEach(element => {
    const li = document.createElement("li");
    li.innerHTML = element.title;
    document.getElementById("taskList").appendChild(li);
  });
}

function download1() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => handlerData(data.slice(0, 10))) //Obtiene los diez primeros elementos
}

async function download2() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  handlerData(data.slice(0, 10));
}


