import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ContentLimitterPipe } from './Pipe/content-limitter.pipe';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContentLimitterPipe,
    AddProductComponent,
    EditProductComponent,
    ViewProductDetailsComponent,
    SuppliersComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
