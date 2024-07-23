import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HistoryService } from './core/services/history.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LogonComponent } from './features/logon/logon.component';
import { HomeComponent } from './features/home/home.component';
import { SidebarComponent } from './features/home/sidebar/sidebar.component';
import { NavbarComponent } from './features/home/navbar/navbar.component';
import { DocumentsComponent } from './features/home/documents/documents.component';
import { ChatComponent } from './features/home/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    DocumentsComponent,
    ChatComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [HistoryService, DatePipe,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
