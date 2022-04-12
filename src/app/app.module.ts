import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { HttpClientModule} from '@angular/common/http';
import { DirdemoComponent } from './dirdemo/dirdemo.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipedemoComponent } from './pipedemo/pipedemo.component'

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    DirdemoComponent,
    PipedemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
