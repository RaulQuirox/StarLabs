let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("listaCarrito");
    listaCarrito.innerHTML = '';

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;
        
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.onclick = function() {
            eliminarDelCarrito(index);
        };

        li.appendChild(eliminarBtn);
        listaCarrito.appendChild(li);
    });

    const totalElem = document.getElementById("total");
    totalElem.textContent = `Total: $${total}`;
}

function realizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert(`Compra realizada con éxito. Total: $${total}`);
        carrito = [];
        total = 0;
        actualizarCarrito();
    }
}
