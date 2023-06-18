import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/'

  constructor(private http: HttpClient) { }

  //RETORNA TODOS LOS PRODUCTOS, NO SE USA PORQUE AG GRID LO TOMA DE OTRA FORMA
  getProductos(): Observable<any> {
    return this.http.get(this.url)
  }

  //ELIMINAR PRODUCTO, NO VA A TENER POR EL MOMENTO FORMA DE HACERLO SALVO VIA URL
  eliminarProducto(id: string): Observable<any>{
    return this.http.delete(this.url + id)
  }

  //OBTENER PRODUCTO POR ID
  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  //GUARDAR PRODUCTO
  guardarProducto(producto: Producto): Observable<any>{
    return this.http.post(this.url, producto)
  }

  //EDITAR PRODUCTO
  editarProducto(id:string, producto: Producto): Observable<any>{
    return this.http.put(this.url + id, producto)
  }
}
