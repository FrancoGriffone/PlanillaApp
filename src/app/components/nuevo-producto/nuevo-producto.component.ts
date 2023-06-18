import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent {

  profileForm: FormGroup

  titulo = 'Nuevo producto'

  id: string ; 
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productoService: ProductoService,
    private aRouter: ActivatedRoute
    ) {
      this.profileForm = this.fb.group({
        prod: ['', Validators.required],
        nomGen: ['', Validators.required],
        vencimiento: ['', Validators.required],
        stock: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id')
    }
    
    ngOnInit(): void {
      this.editar()
    }

  agregarProducto() {
    const PRODUCTO: Producto = {
      producto: this.profileForm.get('prod')?.value,
      nombreGenerico: this.profileForm.get('nomGen')?.value,
      vencimiento: this.profileForm.get('vencimiento')?.value,
      stock: this.profileForm.get('stock')?.value
    }
    //CHEQUEAR SI EL PRODUCTO YA EXISTE
    if (this.id !== null) {
      this.productoService.editarProducto(this.id, PRODUCTO).subscribe(data =>{
        alert('Producto editado con éxito')
        this.router.navigate(['/'])
      }, error => {
        console.log(error)
        this.profileForm.reset()
      })
    } else {
      console.log(PRODUCTO)
    this.productoService.guardarProducto(PRODUCTO).subscribe(data =>{
      alert('Producto creado con éxito')
      this.router.navigate(['/'])
    }, error => {
      console.log(error)
      this.profileForm.reset()
    })
    }
  }
  editar(){
    if (this.id !== null){
      this.titulo = 'Editar producto'
      this.productoService.obtenerProducto(this.id).subscribe(data => {
        this.profileForm.patchValue({
          prod: data.producto,
          nomGen: data.nombreGenerico,
          vencimiento: data.vencimiento,
          stock: data.stock
        })
      })
    }
  }
}
