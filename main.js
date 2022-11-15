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
                        "📧 Envíamos un Email a hola@motizar.com con el código " + crearCodigo() + " para hacer efectiva la contratación del seguro."
        alert(msjCotizacion)
}





// function cotizar() {
//     const respuesta = parseInt(prompt(mensajeBienvenida))
 
//           if (respuesta === NaN) {
//             console.error("Debes ingresar un valor de acuerdo a lo sugerido.")
//             return //corto la ejecución del resto del código
//           }

//           switch(respuesta) {
//             case 1: //moto
//                 cilindrada = prompt(mensajeMoto).toUpperCase().trim()
//                 if (cilindrada !== "A" && cilindrada !== "B" && cilindrada !== "C" && cilindrada !== "D") {
//                     console.error("No has seleccionado una cilindrada válida.")
//                     return
//                 }

//                 if (cilindrada === "A") {
//                     importe = valorFijo * 100
//                 } else if (cilindrada === "B") { 
//                     importe = valorFijo * 250
//                 } else if (cilindrada === "C") { 
//                     importe = valorFijo * 500
//                 } else {
//                     importe = valorFijo * 1000
//                 }
//                 break

//             case 2:
//                 importe = valorFijo * 92
//                 break

//             case 3:
//                 importe = valorFijo * 84
//                 break

//             default:
//                 console.error("Ocurrió un error inesperado.")
//                 return 
//           }
//           alert("La póliza mensual de tu vehículo es $ " + importe.toFixed(2))
// }