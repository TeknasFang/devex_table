import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { CurrencyTableComponent } from './currency-table/currency-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    TableComponent,
    CurrencyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
