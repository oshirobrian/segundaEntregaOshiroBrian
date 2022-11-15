class Cotizador {
    constructor(valorMercado, valorFijo) {
        this.valorMercado = valorMercado
        this.valorFijo = valorFijo
    }
    calcularPolizaAnual() {
        return ((this.valorMercado * 0.0005) * this.valorFijo).toFixed(2)
    }
    calcularCuotaMensual() {
        return (this.calcularPolizaAnual() / 12)
    }
}