const dataError = [{ id: 999, nombre: "Error", creado: "Error", duracion: "Error" }]
const URL = "https://62ddcedc79b9f8c30aaf24c0.mockapi.io/ferreteria"
const filasTabla = document.querySelector("tbody")
const cargando = document.querySelector("#cargando")
const dialog = document.querySelector("dialog")
const inputID = document.querySelector("#id")
const inputNombre = document.querySelector("#nombre")
const inputPrecio = document.querySelector("#precio")
const inputDescripcion = document.querySelector("#descripcion")
const inputCategoria = document.querySelector("#categoria")
const inputStock = document.querySelector("#stock")
const btnModificar = document.querySelector("#btnModificar")
const btnAgregar = document.querySelector("#btnAgregar")
const btnNuevo = document.querySelector("#btnNuevo")
const btnEliminar = document.querySelector("#btnEliminar")

let productosJSON = []