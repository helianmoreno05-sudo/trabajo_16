const desplegable = document.getElementById("desplegable");
const boton = document.getElementById("boton");
const texto = document.getElementById("texto");
const flecha = document.getElementById("flecha");
const items = document.querySelectorAll("#lista li");

boton.addEventListener("click", function () {
  const abierto = desplegable.classList.toggle("abierto");
  flecha.textContent = abierto ? "^" : "v";
});

items.forEach(function (item) {
  item.addEventListener("click", function () {
    items.forEach(function (otro) {
      otro.classList.remove("seleccionado");
    });

    item.classList.add("seleccionado");
    texto.textContent = item.textContent;

    desplegable.classList.remove("abierto");
    flecha.textContent = "v";
  });
});