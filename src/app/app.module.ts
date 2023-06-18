import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//AG Grid
import { AgGridModule } from 'ag-grid-angular';
//Angular Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Material UI
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaTrabajosComponent } from './components/lista-trabajos/lista-trabajos.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaTrabajosComponent,
    ListaProductosComponent,
    PageNotFoundComponent,
    NuevoProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
