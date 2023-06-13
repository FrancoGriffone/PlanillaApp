import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaTrabajosComponent } from './components/lista-trabajos/lista-trabajos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListaProductosComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'trabajos',
    component: ListaTrabajosComponent
  },
  {
    path: 'nuevoProducto',
    component: NuevoProductoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
