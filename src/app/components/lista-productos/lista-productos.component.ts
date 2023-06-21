import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/service/producto.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {

  rowData$!: Observable<any[]>

  // datos = [] 

  // obtenerProductos(){
  //   this.productoService.getProductos().subscribe(data =>{
  //     console.log(data)
  //     this.datos = data
  //   }), error => {
  //     console.log(error)
  //   }
  // }

  columnDefs: ColDef[] = [
    { field: 'producto', headerName: "Producto", width: 150, sortable: true, resizable: true},
    { field: 'nombreGenerico', headerName: "Nombre Generico", width:200, resizable: true},
    { field: 'vencimiento', headerName: "Vencimiento", width:150, sortable: true, resizable: true},
    { field: 'consumos', headerName: "Consumos", width:100, resizable: true},
    { field: 'stock', headerName: "Stock", width:100, sortable: true, resizable: true},
];

idForm = new FormGroup({
  id: new FormControl('', Validators.required),
});
id:string = this.idForm.value.id

idSubmit() {
  this.router.navigate(["editarProducto/", this.idForm.value.id])
}

constructor(private productoService: ProductoService, private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.rowData$ = this.http.get<any[]>('https://planillaapp.onrender.com/api/productos')
  }

  eliminarProducto(id: any){
    this.productoService.eliminarProducto(this.idForm.value.id).subscribe(data => {
      console.log(data)
      alert('El producto fue eliminado correctamente!')
      this.idForm.reset()
    })
  }
}
