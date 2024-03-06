import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: '', component: DialogComponent },
  { path: 'chat', component: ChatComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule ,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
