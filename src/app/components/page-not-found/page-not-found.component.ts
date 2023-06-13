import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  profileForm = new FormGroup({
    producto: new FormArray([
      new FormGroup({
        producto: new FormControl(''),
        cantidadProducto: new FormControl(''),
        cantidadPasadas: new FormControl('')
      })
    ]),
  });
  addProducto(){
    const control = <FormArray>this.profileForm.controls['producto']
    control.push(
      new FormGroup({
        producto: new FormControl('', Validators.required),
        cantidadProducto: new FormControl('', Validators.required),
        cantidadPasadas: new FormControl('', Validators.required)
      })
    )
  }
  removeProducto(i: any){
    const control = <FormArray>this.profileForm.controls['producto']
    control.removeAt(i)
  }

}
