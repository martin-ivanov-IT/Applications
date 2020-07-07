import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'; 
import {ReactiveFormsModule } from '@angular/forms'; 




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ApplicationsListComponent } from './pages/applications-list/applications-list.component';
import { ApplicationCardComponent } from './application-card/application-card.component';
import { ApplicationDetailsComponent } from './pages/application-details/application-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ApplicationsListComponent,
    ApplicationCardComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
