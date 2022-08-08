const closeModal = () => { dialog.removeAttribute("open") }

const openModal = () => { dialog.setAttribute("open", true) }

const HTMLtabla = (fila) => {
    return `<tr>
                <td ondblclick="editarProducto(${fila.id})"
                    title="Doble clic para Modificar"
                    class="cell-colored">${fila.id}</td>
                <td>${fila.nombre}</td>
                <td>$${fila.precio}</td>
                <td>${fila.descripcion}</td>
                <td>${fila.categoria}</td>                
                <td>${fila.stock}</td>                
            </tr>`
}

const obtenerProductos = async () => {
    const response = await fetch(URL)
    response.status >= 400
        ? data = dataError
        : data = response.json()
    return data
}

const cargoTablaProductos = async () => {
    let armoTabla = ""
    productosJSON = await obtenerProductos()
    await productosJSON.forEach(prod => armoTabla += HTMLtabla(prod))
    filasTabla.innerHTML = armoTabla
    cargando.remove()
}

cargoTablaProductos()