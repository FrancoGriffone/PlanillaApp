export class Producto {
    producto: string;
    nombreGenerico: string;
    vencimiento: string;
    stock: number;

    constructor(producto: string, nombreGenerico: string, vencimiento: string, stock: number ){
        this.producto = producto;
        this.nombreGenerico = nombreGenerico;
        this.vencimiento = vencimiento;
        this.stock = stock;
    }
}