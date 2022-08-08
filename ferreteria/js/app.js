const editarProducto = (param) => {
    const resultado = productosJSON.find(c => c.id == param)
    inputID.value = parseInt(resultado.id)
    inputNombre.value = resultado.nombre
    inputDescripcion.value = resultado.descripcion
    inputCategoria.value = resultado.categoria
    inputStock.value = resultado.stock
    btnModificar.classList.remove("ocultar-boton")
    openModal()
}

const nuevoProducto = () => {
    inputID.value = 0
    inputNombre.value = ""
    inputPrecio.value = 0
    inputDescripcion.value = ""
    inputCategoria.value = ""
    inputStock.value = 0
    btnAgregar.classList.remove("ocultar-boton")
    openModal()
}

const modificarProducto = async () => {
    try {
        const id = parseInt(inputID.value)
        const datos = {
            nombre: inputNombre.value,
            precio: inputPrecio.value,
            descripcion: inputDescripcion.value,
            categoria: inputCategoria.value,
            stock: inputStock.value
        }
        const FULLURL = `${URL}/${id}`
        const BODY = JSON.stringify(datos)
        const OPTIONS = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: BODY
        }
        const response = await fetch(FULLURL, OPTIONS)
        respuesta = await response.json()
        cargoTablaProductos()
        btnModificar.classList.toggle("ocultar-boton")

    } catch (error) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Hubo un problema al modificar el Producto',
            showConfirmButton: false,
            timer: 1500
        })

    } finally {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su producto fue modificado con exito',
            showConfirmButton: false,
            timer: 1500
        })
        closeModal()
    }
}

const agregarProducto = async () => {
    try {
        const datos = {
            nombre: inputNombre.value,
            precio: inputPrecio.value,
            descripcion: inputDescripcion.value,
            categoria: inputCategoria.value,
            stock: inputStock.value
        }
        const BODY = JSON.stringify(datos)
        const OPTIONS = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: BODY
        }
        const response = await fetch(URL, OPTIONS)
        respuesta = await response.json()
        inputID.value = respuesta.id
        cargoTablaProductos()
        btnAgregar.classList.toggle("ocultar-boton")

    } catch (error) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Hubo un problema al agregar el Producto',
            showConfirmButton: false,
            timer: 1500
        })

    } finally {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su producto fue añadido con exito',
            showConfirmButton: false,
            timer: 1500
        })
        closeModal()

    }
}

const eliminarProducto = async () => {
    try {
        const prodID = prompt("Ingrese el código del curso a Eliminar:")
        respuesta = productosJSON.find(c => c.id == prodID) || false
        if (!respuesta) {
            alert(`No se encontró un curso con el ID: ${prodID}`)
            return
        } else {
            const confirmado = confirm("Esta operación no se podrá deshacer. ¿Desea continuar?")
            if (confirmado) {
                const FULLURL = `${URL}/${prodID}`
                const OPTIONS = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                }
                const response = await fetch(FULLURL, OPTIONS)
                respuesta = await response.json()
                console.table(respuesta)
                cargoTablaProductos()
            }
        }

    } catch (error) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'A ocurrido un error',
            showConfirmButton: false,
            timer: 2000
        })

    } finally {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su producto fue eliminado con exito',
            showConfirmButton: false,
            timer: 1500
        })
        closeModal()
    }
}


//Eventos

btnModificar.addEventListener("click", modificarProducto)
btnNuevo.addEventListener("click", nuevoProducto)
btnAgregar.addEventListener("click", agregarProducto)
btnEliminar.addEventListener("click", eliminarProducto)