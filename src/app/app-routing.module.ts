import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogonComponent } from './features/logon/logon.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/guards/auth.gaurd';

const routes: Routes = [ 
                        { path: '', component: LogonComponent, data: { title: 'Login Page' }},
                        { path: 'home', component: HomeComponent, data: { title: 'Home Page' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
