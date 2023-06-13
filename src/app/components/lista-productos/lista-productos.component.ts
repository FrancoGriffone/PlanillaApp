import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {

  columnDefs: ColDef[] = [
    { field: 'make', headerName: "Producto", width: 150, sortable: true},
    { field: 'model', headerName: "Nombre Generico", width:200},
    { field: 'price', headerName: "Vencimiento", width:150, sortable: true},
    { field: 'price', headerName: "Consumos", width:100},
    { field: 'price', headerName: "Stock", width:100, sortable: true},
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
];
idForm = new FormGroup({
  id: new FormControl('', Validators.required),
});


idSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.idForm.value);
}
}
