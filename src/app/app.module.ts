import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './db-config';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
