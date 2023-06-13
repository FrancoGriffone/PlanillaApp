import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent {

  profileForm = new FormGroup({
    prod: new FormControl('', Validators.required),
    nomGen: new FormControl('', Validators.required),
    vencimiento: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
  });

  onSubmit(){
    console.log(this.profileForm.value)
    this.profileForm.reset()
  }
}
