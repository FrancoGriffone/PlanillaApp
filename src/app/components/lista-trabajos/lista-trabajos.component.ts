import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-trabajos',
  templateUrl: './lista-trabajos.component.html',
  styleUrls: ['./lista-trabajos.component.scss']
})
export class ListaTrabajosComponent {

  columnDefs: ColDef[] = [
    { field: 'make', headerName: "Cliente", width: 100, sortable: true, filter: true},
    { field: 'model', headerName: "Productos usados", width:200},
    { field: 'price', headerName: "Cantidades x pasada", width:100, sortable: true},
    { field: 'price', headerName: "Pasadas (veces usadas)", width:100, sortable: true},
    { field: 'price', headerName: "Cantidad total usada", width:100, sortable: true},
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
];

ngOnInit(): void {}

profileForm = new FormGroup({
  fecha: new FormControl('', Validators.required),
  cliente: new FormControl('', Validators.required),
  producto: new FormArray([
    new FormGroup({
      producto: new FormControl(''),
      cantidadProducto: new FormControl(''),
      cantidadPasadas: new FormControl('')
    })
  ]),
});

idForm = new FormGroup({
  id: new FormControl('', Validators.required),
});

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.profileForm.value);
}

idSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.idForm.value);
}

addProducto(){
  const control = <FormArray>this.profileForm.controls['producto']
  control.push(
    new FormGroup({
      producto: new FormControl(''),
      cantidadProducto: new FormControl(''),
      cantidadPasadas: new FormControl('')
    })
  )
}

removeProducto(i: any){
  const control = <FormArray>this.profileForm.controls['producto']
  control.removeAt(i)
}
}
