function crearCodigo() {
    return parseInt(Math.random() * 10_000_000)
}

function buscarVehiculo(codigo) {
    let resultado = vehiculos.find(vehiculo => vehiculo.codigo === codigo)
    return resultado
}

//Función principal de nuestro programa
function cotizarVehiculo() {
    const codigoElegido = parseInt(prompt(mensajeBienvenida))
    if (codigoElegido !== 1 && codigoElegido !== 2 && codigoElegido !== 3) {
        alert("⛔️ Error en el vehículo seleccionado.")
        return
    }
    let seleccionado = buscarVehiculo(codigoElegido)
    let mensaje = `Has seleccionado: '${seleccionado.tipo}'. Valor del mercado: $ ${seleccionado.valor}`
    alert(mensaje)
    const respuesta = confirm("¿Confirmas la cotización de este vehículo?")
    if (respuesta) {
        mostrarCotizacion(seleccionado.valor)
    }
}

//instanciar clase JS y ver cotización
function mostrarCotizacion(valor) {
    const cotizador = new Cotizador(valor, valorFijo)
    let msjCotizacion = "✅ Costo de la póliza anual: $ " + cotizador.calcularPolizaAnual() + "\n" +
        "✅ Costo de la cuota mensual: $ " + cotizador.calcularCuotaMensual() + "\n" +
        "\n" +
        "📧 Envíamos un Email a pepito@krap.com con el código " + crearCodigo() + " para hacer efectiva la contratación del seguro."
    alert(msjCotizacion)
}




